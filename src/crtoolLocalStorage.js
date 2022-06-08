import C from './js/business.logic/constants';

export const CHECK_FREQUENCY = 10e3;

/**
 * A proxy for the localStorage API which periodically saves to the DB and
 * can synchronize itself when the page loads.
 *
 * TODO use https://jestjs.io/docs/en/24.x/getting-started.html
 */
const ls = {
  // Use DOM LocalStorage, but allow swapping
  localStorage: localStorage,
  getLocationHash() {
    return window.location.hash;
  },
  setLocationHash( hash ) {
    window.location.hash = hash;
  },
  setHref( url ) {
    window.location.href = url;
  },
  getHref() {
    return window.location.href;
  },
  getISODate() {
    return new Date().toISOString();
  },

  review: {},
  lastTimeSaved: '',
  timeoutHandle: 0,

  redirectHome() {
    ls.setHref( C.START_PAGE_RELATIVE_URL );
  },

  updateUrl( review_id ) {
    ls.setLocationHash( '#id=' + review_id );
  },

  scheduleSaveIfDirty( delay ) {
    ls.timeoutHandle = setTimeout( ls.saveIfDirty, delay );
  },

  cancelSaveIfDirty() {
    if ( ls.timeoutHandle ) {
      clearTimeout( ls.timeoutHandle );
    }
  },

  async init() {
    const token = ls.getUrlToken();
    let review_id = token || ls.localStorage.getItem( 'curriculumReviewId' ) || '';
    if ( !review_id ) {
      return ls.redirectHome();
    }

    // If review_id found but a token is not set, update the URL
    if ( !token && review_id ) {
      ls.updateUrl( review_id );
    }

    const ls_review = ls.loadReviewFromLocalStorage( review_id );

    let db_review;
    let db_fresh = false;
    try {
      db_review = await ls.fetchReviewFromServer( review_id );
      if ( !db_review ) {
        // Do not allow end users to set their own ID via the URL or localStorage.
        ls.localStorage.removeItem( 'crtool.' + review_id );
        ls.localStorage.removeItem( 'curriculumReviewId' );
        ls.redirectHome();
        return;
      }
      if ( !db_review.ls_modified_time ) {
        // A fresh review. Let's set a local time on it
        db_review.ls_modified_time = ls.getISODate();
        db_fresh = true;
      }
    } catch ( e ) {
      console.error( e );
      // Request failed, just try to carry on with local storage
    }

    if ( !ls_review && !db_review ) {
      ls.redirectHome();
      return;
    }

    const useLocal = ls_review && (
      !db_review || ( ls_review.ls_modified_time > db_review.ls_modified_time )
    );
    if ( useLocal ) {
      // Trust that newer local time means more up-to-date data
      ls.review = ls_review;
      ls.localStorage.setItem( 'curriculumReviewId', review_id );
      ls.timeoutHandle = ls.scheduleSaveIfDirty( 0 );
    } else {
      ls.review = db_review;
      // Just bring local storage up to speed
      ls.localStorage.setItem( 'crtool.' + db_review.id, JSON.stringify( db_review ) );
      ls.localStorage.setItem( 'curriculumReviewId', db_review.id );
      // Don't need to sync immediately after load
      ls.lastTimeSaved = ls.review.ls_modified_time;
      ls.timeoutHandle = ls.scheduleSaveIfDirty( db_fresh ? 0 : CHECK_FREQUENCY );
    }
  },

  isReady() {
    return Boolean( ls.review.id );
  },

  saveReviewToLocalStorage() {
    ls.review.ls_modified_time = ls.getISODate();
    ls.localStorage.setItem( 'crtool.' + ls.review.id, JSON.stringify( ls.review ) );
  },

  isValidReview( review ) {
    if ( typeof review !== 'object' || review === null ) {
      return false;
    }

    for ( const prop of [ 'id', 'last_updated' ] ) {
      if ( !review.hasOwnProperty( prop ) ) {
        return false;
      }
    }

    return true;
  },

  /**
     * Returns a Promise with a valid review or undefined.
     *
     * Rejects if request fails. Invalid response resolves to undefined.
     */
  async fetchReviewFromServer( review_id ) {
    const xhttp = new XMLHttpRequest();
    xhttp.open( 'POST', '../get-review/', true );
    xhttp.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhttp.timeout = 5e3;

    return new Promise( ( resolve, reject ) => {
      xhttp.onreadystatechange = () => {
        if ( xhttp.readyState !== 4 ) {
          return;
        }

        if ( xhttp.status !== 200 ) {
          console.error( 'Review fetch failed.' );
          reject();
        }

        try {
          const review = JSON.parse( xhttp.responseText );
          resolve( ls.isValidReview( review ) ? review : undefined );
        } catch ( e ) {
          console.error( e );
          reject();
        }
      };

      xhttp.send( 'token=' + review_id );
    } );
  },

  /*
    * Returns a valid review from LocalStorage or undefined
    */
  loadReviewFromLocalStorage( review_id ) {
    let review = ls.localStorage.getItem( 'crtool.' + review_id ) || '{}';
    if ( review === '{}' ) {
      return;
    }

    try {
      review = JSON.parse( review );
      if ( !ls.isValidReview( review ) ) {
        throw new Error( 'invalid review' );
      }

      return review;
    } catch ( e ) {
      console.error( e );
    }
  },

  /*
     * Overwrite Database review state with state in LocalStorage
     *
     * Rejects anytime a valid response was not received
     */
  async saveReviewToServer() {
    const xhttp = new XMLHttpRequest();
    xhttp.open( 'POST', '../update-review/', true );
    xhttp.timeout = 5e3;
    xhttp.setRequestHeader( 'Content-Type', 'application/json;charset=UTF-8' );

    return new Promise( ( resolve, reject ) => {
      xhttp.onreadystatechange = () => {
        if ( xhttp.readyState !== 4 ) {
          return;
        }

        if ( xhttp.status !== 200 ) {
          console.error( 'DB save failed.' );
          reject();
          return;
        }

        const review = JSON.parse( xhttp.responseText );
        if ( ls.isValidReview( review ) ) {
          // console.info('Received response', ls);

          if ( ls.review.ls_modified_time > ls.lastTimeSaved ) {
            // console.info('Scheduling re-save...');
            // Leave dirty and don't overwrite local storage
          } else {
            ls.review = review;
            ls.localStorage.setItem( 'crtool.' + review.id, JSON.stringify( ls.review ) );
          }

          resolve();
          return;
        }

        console.error( 'Invalid server response' );
        reject();
      };

      ls.lastTimeSaved = ls.review.ls_modified_time;
      // console.info(`Saving version ${ls.lastTimeSaved}`);
      xhttp.send( JSON.stringify( ls.review ) );
    } );
  },

  // TODO see https://jestjs.io/docs/en/24.x/timer-mocks#run-pending-timers
  async saveIfDirty( force = false ) {
    // If called from an imperative action, we don't want to clear the existing schedule
    ls.cancelSaveIfDirty();

    if ( !force && ls.review.ls_modified_time <= ls.lastTimeSaved ) {
      ls.scheduleSaveIfDirty( CHECK_FREQUENCY );
      return;
    }

    return ls.saveReviewToServer();
  },

  getUrlToken() {
    return ( /id=(\w+)/ ).test( ls.getLocationHash() ) ? RegExp.$1 : '';
  },

  setUrlToken( uri, token ) {
    return uri.replace( /#.*/, '' ) + '#id=' + token;
  },

  // TODO test that setting a novel item updates ls_modified_time on the
  // review in local storage.
  // TODO test that setting the same value, does not.
  setItem( key, value ) {
    if ( !ls.isReady() ) {
      throw new Error( 'Use before init' );
    }

    // Only setItem value if it's different than what's already there.
    if ( ls.review[key] !== value ) {
      ls.review[key] = value;
      ls.saveReviewToLocalStorage();
    }
  },

  // TODO test pulling values from the review
  getItem( key ) {
    if ( !ls.isReady() ) {
      throw new Error( 'Use before init' );
    }

    if ( ls.review.hasOwnProperty( key ) ) {
      return ls.review[key];
    } else {
      return null;
    }
  },

  // TODO test updates ls_modified_time on the review in local storage.
  removeItem( key ) {
    if ( !ls.isReady() ) {
      throw new Error( 'Use before init' );
    }

    if ( ls.review.hasOwnProperty( key ) ) {
      delete ls.review[key];
      ls.saveReviewToLocalStorage();
    }
  },

  clear() {
    if ( !ls.isReady() ) {
      throw new Error( 'Use before init' );
    }

    ls.localStorage.removeItem( 'curriculumReviewId' );
  }
};

const crtoolLocalStorage = ls;

export default crtoolLocalStorage;
