import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var et$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
        s: ["m\xF5ne sekundi", "m\xF5ni sekund", "paar sekundit"],
        ss: [number + "sekundi", number + "sekundit"],
        m: ["\xFChe minuti", "\xFCks minut"],
        mm: [number + " minuti", number + " minutit"],
        h: ["\xFChe tunni", "tund aega", "\xFCks tund"],
        hh: [number + " tunni", number + " tundi"],
        d: ["\xFChe p\xE4eva", "\xFCks p\xE4ev"],
        M: ["kuu aja", "kuu aega", "\xFCks kuu"],
        MM: [number + " kuu", number + " kuud"],
        y: ["\xFChe aasta", "aasta", "\xFCks aasta"],
        yy: [number + " aasta", number + " aastat"]
      };
      if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
      }
      return isFuture ? format[key][0] : format[key][1];
    }
    var et2 = moment2.defineLocale("et", {
      months: "jaanuar_veebruar_m\xE4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
      monthsShort: "jaan_veebr_m\xE4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
      weekdays: "p\xFChap\xE4ev_esmasp\xE4ev_teisip\xE4ev_kolmap\xE4ev_neljap\xE4ev_reede_laup\xE4ev".split("_"),
      weekdaysShort: "P_E_T_K_N_R_L".split("_"),
      weekdaysMin: "P_E_T_K_N_R_L".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[T\xE4na,] LT",
        nextDay: "[Homme,] LT",
        nextWeek: "[J\xE4rgmine] dddd LT",
        lastDay: "[Eile,] LT",
        lastWeek: "[Eelmine] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s p\xE4rast",
        past: "%s tagasi",
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: "%d p\xE4eva",
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return et2;
  });
})();
var et = et$2.exports;
var et$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), et$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": et
}));
export { et$1 as e };
