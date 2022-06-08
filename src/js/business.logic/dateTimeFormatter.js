const DateTimeFormatter = {

  getDateNowFormat() {
    let dateToFormat = new Date();
    let month = new Array( 12 );
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    // e.g. "Nov 13, 2016";
    let formatedDate = month[dateToFormat.getMonth()] + ' ' + dateToFormat.getDate() + ',  ' + dateToFormat.getFullYear();
    return formatedDate;
  }
};

export default DateTimeFormatter;
