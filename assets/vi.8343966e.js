import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var vi$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var vi2 = moment2.defineLocale("vi", {
      months: "th\xE1ng 1_th\xE1ng 2_th\xE1ng 3_th\xE1ng 4_th\xE1ng 5_th\xE1ng 6_th\xE1ng 7_th\xE1ng 8_th\xE1ng 9_th\xE1ng 10_th\xE1ng 11_th\xE1ng 12".split("_"),
      monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
      monthsParseExact: true,
      weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split("_"),
      weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysParseExact: true,
      meridiemParse: /sa|ch/i,
      isPM: function(input) {
        return /^ch$/i.test(input);
      },
      meridiem: function(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower ? "sa" : "SA";
        } else {
          return isLower ? "ch" : "CH";
        }
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [n\u0103m] YYYY",
        LLL: "D MMMM [n\u0103m] YYYY HH:mm",
        LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
        l: "DD/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[H\xF4m nay l\xFAc] LT",
        nextDay: "[Ng\xE0y mai l\xFAc] LT",
        nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\xFAc] LT",
        lastDay: "[H\xF4m qua l\xFAc] LT",
        lastWeek: "dddd [tu\u1EA7n tr\u01B0\u1EDBc l\xFAc] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s t\u1EDBi",
        past: "%s tr\u01B0\u1EDBc",
        s: "v\xE0i gi\xE2y",
        ss: "%d gi\xE2y",
        m: "m\u1ED9t ph\xFAt",
        mm: "%d ph\xFAt",
        h: "m\u1ED9t gi\u1EDD",
        hh: "%d gi\u1EDD",
        d: "m\u1ED9t ng\xE0y",
        dd: "%d ng\xE0y",
        w: "m\u1ED9t tu\u1EA7n",
        ww: "%d tu\u1EA7n",
        M: "m\u1ED9t th\xE1ng",
        MM: "%d th\xE1ng",
        y: "m\u1ED9t n\u0103m",
        yy: "%d n\u0103m"
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function(number) {
        return number;
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
    return vi2;
  });
})();
var vi = vi$2.exports;
var vi$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), vi$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": vi
}));
export { vi$1 as v };
