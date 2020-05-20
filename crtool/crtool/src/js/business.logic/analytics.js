/*
 * Other uses of Analytics in public CFPB repositories.
 * https://github.com/cfpb/ccdb5-ui/blob/77dcb86ecb8471d326e6c18d7f9bb1a809c922bf/src/actions/analytics.jsx#L1
 * https://github.com/cfpb/college-costs/blob/969043ee4f879999cf91bbb481e64be620021d26/src/disclosures/js/utils/Analytics.js#L3
 */
import C from "./constants";

const Analytics = {

    tagManagerIsLoaded: false,

    EVENT_CATEGORY: 'curriculum review tool interaction',

    /**
     * Get data layer object.
     * @param {string} action Name of event.
     * @param {string} label DOM element label.
     * @param {string} category Type of event.
     * @param {Function} callback Function to call on GTM submission.
     * @param {number} timeout Callback invocation fallback time.
     * @returns {object} Data layer object.
     */
    getDataLayerOptions: function( action, label, category, callback, timeout ) {
      return {
        event:         category || Analytics.EVENT_CATEGORY,
        action:        action,
        label:         label || '',
        eventCallback: callback,
        eventTimeout:  timeout || 500
      }
    },

    /**
     * Initialize the Analytics module.
     */
    init: function() {
      // detect if Google tag manager is loaded
      if ( window.hasOwnProperty( 'google_tag_manager' ) ) {
        Analytics.tagManagerIsLoaded = true;
      } else {
        var _tagManager;
        Object.defineProperty( window, 'google_tag_manager', {
          enumerable: true,
          configurable: true,
          get: function() {
            return _tagManager
          },
          set: function( value ) {
            _tagManager = value;
            Analytics.tagManagerIsLoaded = true;
          }
        } )
      }
    },

    /**
     * @name sendEvent
     * @kind function
     *
     * @description
     * Pushes an event to the GTM dataLayer.
     * @param {object} dataLayerOptions Type of event.
     */
    sendEvent: function( dataLayerOptions ) {
        if (C.ANALYTICS_DEBUG_ON) {
            console.log(dataLayerOptions);
        } else {
            var callback = dataLayerOptions.eventCallback;
            if ( Analytics.tagManagerIsLoaded ) {
                window.dataLayer.push( dataLayerOptions );
            } else if ( callback && typeof callback === 'function' ) {
                callback(); // eslint-disable-line callback-return, max-len
            }
        }
    }

    // sendEvents(array) for multiple events is here is required in future:
    // https://github.com/cfpb/college-costs/blob/master/src/disclosures/js/utils/Analytics.js#L77

  }

  Analytics.init()

  export default Analytics
