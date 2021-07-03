import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var he$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var he2 = moment2.defineLocale("he", {
      months: "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split("_"),
      monthsShort: "\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split("_"),
      weekdays: "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split("_"),
      weekdaysShort: "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split("_"),
      weekdaysMin: "\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [\u05D1]MMMM YYYY",
        LLL: "D [\u05D1]MMMM YYYY HH:mm",
        LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT",
        nextDay: "[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT",
        nextWeek: "dddd [\u05D1\u05E9\u05E2\u05D4] LT",
        lastDay: "[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT",
        lastWeek: "[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "\u05D1\u05E2\u05D5\u05D3 %s",
        past: "\u05DC\u05E4\u05E0\u05D9 %s",
        s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",
        ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA",
        m: "\u05D3\u05E7\u05D4",
        mm: "%d \u05D3\u05E7\u05D5\u05EA",
        h: "\u05E9\u05E2\u05D4",
        hh: function(number) {
          if (number === 2) {
            return "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD";
          }
          return number + " \u05E9\u05E2\u05D5\u05EA";
        },
        d: "\u05D9\u05D5\u05DD",
        dd: function(number) {
          if (number === 2) {
            return "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD";
          }
          return number + " \u05D9\u05DE\u05D9\u05DD";
        },
        M: "\u05D7\u05D5\u05D3\u05E9",
        MM: function(number) {
          if (number === 2) {
            return "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD";
          }
          return number + " \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD";
        },
        y: "\u05E9\u05E0\u05D4",
        yy: function(number) {
          if (number === 2) {
            return "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD";
          } else if (number % 10 === 0 && number !== 10) {
            return number + " \u05E9\u05E0\u05D4";
          }
          return number + " \u05E9\u05E0\u05D9\u05DD";
        }
      },
      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function(input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
      },
      meridiem: function(hour, minute, isLower) {
        if (hour < 5) {
          return "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8";
        } else if (hour < 10) {
          return "\u05D1\u05D1\u05D5\u05E7\u05E8";
        } else if (hour < 12) {
          return isLower ? '\u05DC\u05E4\u05E0\u05D4"\u05E6' : "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD";
        } else if (hour < 18) {
          return isLower ? '\u05D0\u05D7\u05D4"\u05E6' : "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD";
        } else {
          return "\u05D1\u05E2\u05E8\u05D1";
        }
      }
    });
    return he2;
  });
})();
var he = he$2.exports;
var he$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), he$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": he
}));
export { he$1 as h };
