import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var hu$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var weekEndings = "vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(" ");
    function translate(number, withoutSuffix, key, isFuture) {
      var num = number;
      switch (key) {
        case "s":
          return isFuture || withoutSuffix ? "n\xE9h\xE1ny m\xE1sodperc" : "n\xE9h\xE1ny m\xE1sodperce";
        case "ss":
          return num + (isFuture || withoutSuffix) ? " m\xE1sodperc" : " m\xE1sodperce";
        case "m":
          return "egy" + (isFuture || withoutSuffix ? " perc" : " perce");
        case "mm":
          return num + (isFuture || withoutSuffix ? " perc" : " perce");
        case "h":
          return "egy" + (isFuture || withoutSuffix ? " \xF3ra" : " \xF3r\xE1ja");
        case "hh":
          return num + (isFuture || withoutSuffix ? " \xF3ra" : " \xF3r\xE1ja");
        case "d":
          return "egy" + (isFuture || withoutSuffix ? " nap" : " napja");
        case "dd":
          return num + (isFuture || withoutSuffix ? " nap" : " napja");
        case "M":
          return "egy" + (isFuture || withoutSuffix ? " h\xF3nap" : " h\xF3napja");
        case "MM":
          return num + (isFuture || withoutSuffix ? " h\xF3nap" : " h\xF3napja");
        case "y":
          return "egy" + (isFuture || withoutSuffix ? " \xE9v" : " \xE9ve");
        case "yy":
          return num + (isFuture || withoutSuffix ? " \xE9v" : " \xE9ve");
      }
      return "";
    }
    function week(isFuture) {
      return (isFuture ? "" : "[m\xFAlt] ") + "[" + weekEndings[this.day()] + "] LT[-kor]";
    }
    var hu2 = moment2.defineLocale("hu", {
      months: "janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split("_"),
      monthsShort: "jan._feb._m\xE1rc._\xE1pr._m\xE1j._j\xFAn._j\xFAl._aug._szept._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"),
      weekdaysShort: "vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      },
      meridiemParse: /de|du/i,
      isPM: function(input) {
        return input.charAt(1).toLowerCase() === "u";
      },
      meridiem: function(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower === true ? "de" : "DE";
        } else {
          return isLower === true ? "du" : "DU";
        }
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function() {
          return week.call(this, true);
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function() {
          return week.call(this, false);
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s m\xFAlva",
        past: "%s",
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return hu2;
  });
})();
var hu = hu$2.exports;
var hu$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), hu$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": hu
}));
export { hu$1 as h };
