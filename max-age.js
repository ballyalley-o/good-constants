'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.thirtyDaysFromNow =
  exports.fifteenDaysFromNow =
  exports.twoDaysFromNow =
  exports.oneDayFromNow =
  exports.sixHrFromNow =
  exports.twoHrFromNow =
  exports.oneHrFromNow =
  exports.thirtyDays =
  exports.oneDay =
  exports.sixHr =
  exports.twoHr =
  exports.oneHr =
  exports.tenMinFromNow =
  exports.tenMin =
  exports.fiveSecFromNow =
  exports.expire =
    void 0
/**
 * @description maxAge in milliseconds
 * @property {number} five_sec - 5 seconds
 * @property {number} ten_min - 10 minutes
 * @property {number} one_hr - 1 hour
 * @property {number} two_hr - 2 hours
 * @property {number} six_hr - 6 hours
 * @property {number} 1 - 1 day
 * @property {number} 2 - 2 days
 * @property {number} 15 - 15 days
 * @property {number} 30 - 30 days
 * @returns {IMaxAge}
 */
var maxAge = {
  five_sec: 5 * 1000,
  ten_min: 10 * 60 * 1000,
  one_hr: 60 * 60 * 1000,
  two_hr: 2 * 60 * 60 * 1000,
  six_hr: 6 * 60 * 60 * 1000,
  1: 24 * 60 * 60 * 1000,
  2: 2 * 24 * 60 * 60 * 1000,
  15: 15 * 24 * 60 * 60 * 1000,
  30: 30 * 24 * 60 * 60 * 1000,
}
var expire = new Date(0)
exports.expire = expire
var fiveSec = maxAge.five_sec
var tenMin = maxAge.ten_min
exports.tenMin = tenMin
var oneHr = maxAge.one_hr
exports.oneHr = oneHr
var twoHr = maxAge.two_hr
exports.twoHr = twoHr
var sixHr = maxAge.six_hr
exports.sixHr = sixHr
var oneDay = maxAge[1]
exports.oneDay = oneDay
var twoDays = maxAge[2]
var fifteenDays = maxAge[15]
var thirtyDays = maxAge[30]
exports.thirtyDays = thirtyDays
var fromNow = function (time) {
  return new Date(Date.now() + time)
}
var fiveSecFromNow = fromNow(fiveSec)
exports.fiveSecFromNow = fiveSecFromNow
var tenMinFromNow = fromNow(tenMin)
exports.tenMinFromNow = tenMinFromNow
var oneHrFromNow = fromNow(oneHr)
exports.oneHrFromNow = oneHrFromNow
var twoHrFromNow = fromNow(twoHr)
exports.twoHrFromNow = twoHrFromNow
var sixHrFromNow = fromNow(sixHr)
exports.sixHrFromNow = sixHrFromNow
var oneDayFromNow = fromNow(oneDay)
exports.oneDayFromNow = oneDayFromNow
var twoDaysFromNow = fromNow(twoDays)
exports.twoDaysFromNow = twoDaysFromNow
var fifteenDaysFromNow = fromNow(fifteenDays)
exports.fifteenDaysFromNow = fifteenDaysFromNow
var thirtyDaysFromNow = fromNow(thirtyDays)
exports.thirtyDaysFromNow = thirtyDaysFromNow
