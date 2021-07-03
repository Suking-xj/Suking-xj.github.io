import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var lv$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var units = {
      ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
      m: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"),
      mm: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"),
      h: "stundas_stund\u0101m_stunda_stundas".split("_"),
      hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
      d: "dienas_dien\u0101m_diena_dienas".split("_"),
      dd: "dienas_dien\u0101m_diena_dienas".split("_"),
      M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
      MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
      y: "gada_gadiem_gads_gadi".split("_"),
      yy: "gada_gadiem_gads_gadi".split("_")
    };
    function format(forms, number, withoutSuffix) {
      if (withoutSuffix) {
        return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
      } else {
        return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
      }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      return number + " " + format(units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
      return format(units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
      return withoutSuffix ? "da\u017Eas sekundes" : "da\u017E\u0101m sekund\u0113m";
    }
    var lv2 = moment2.defineLocale("lv", {
      months: "janv\u0101ris_febru\u0101ris_marts_apr\u012Blis_maijs_j\u016Bnijs_j\u016Blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_j\u016Bn_j\u016Bl_aug_sep_okt_nov_dec".split("_"),
      weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
      weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY.",
        LL: "YYYY. [gada] D. MMMM",
        LLL: "YYYY. [gada] D. MMMM, HH:mm",
        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
      },
      calendar: {
        sameDay: "[\u0160odien pulksten] LT",
        nextDay: "[R\u012Bt pulksten] LT",
        nextWeek: "dddd [pulksten] LT",
        lastDay: "[Vakar pulksten] LT",
        lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "p\u0113c %s",
        past: "pirms %s",
        s: relativeSeconds,
        ss: relativeTimeWithPlural,
        m: relativeTimeWithSingular,
        mm: relativeTimeWithPlural,
        h: relativeTimeWithSingular,
        hh: relativeTimeWithPlural,
        d: relativeTimeWithSingular,
        dd: relativeTimeWithPlural,
        M: relativeTimeWithSingular,
        MM: relativeTimeWithPlural,
        y: relativeTimeWithSingular,
        yy: relativeTimeWithPlural
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return lv2;
  });
})();
var lv = lv$2.exports;
var lv$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), lv$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": lv
}));
export { lv$1 as l };
