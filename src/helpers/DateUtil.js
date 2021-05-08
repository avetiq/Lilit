import moment from 'moment';

class DateUtil {
  static formatDate = (date: Date, format: string): string => moment(date).format(format || 'YYYY-MM-DD');

  static parse = (date: string, format: string) => moment(date, format || 'YYYY-MM-DD').toDate();

  static addHours = (date: Date, hours: number): Date => moment(date).add(hours, 'hours').toDate();

  static getYear = (date) => Number(DateUtil.formatDate(date, 'YYYY'));

  static getMonth = (date) => Number(DateUtil.formatDate(date, 'MM'));

  static startOfMonth = (date) => moment(date).startOf('month');

  static endOfMonth = (date) => moment(date).endOf('month');

  static startOfWeek = (date) => moment(date).startOf('isoWeek');

  static endOfWeek = (date) => moment(date).endOf('isoWeek');

  static dateDifference = (date1, date2) => moment(new Date(date2)).diff(moment(new Date(date1)), 'days');

  static isSameDay = (date1, date2) => moment(date1).isSame(date2, 'D');

  static isToday = (date) => moment(0, 'HH').diff(date, 'days') === 0;

  static isDate = (date: string, format: string) => moment(date, format || 'DD.MM.YYYY', true).isValid();

  static addDays = (date, daysCount) => moment(date).add(daysCount, 'days');

  static addMonths = (date, monthsCount) => moment(date).add(monthsCount, 'months');

  static addYears = (date, yearsCount) => moment(date).add(yearsCount, 'years');

  static getMonthName = (monthNumber) => moment(monthNumber, 'M', 'hy-am').format('MMMM');

  static getWeekdayName = (weekdayNumber) => moment.localeData('hy-am').weekdaysShort()[weekdayNumber];

  static getShortDate = (date) => moment(date, '', 'hy-am').format('MMM Do, LT');

}

export default DateUtil;
