import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var es$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var monthsShortDot = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), monthsShort = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), monthsParse = [
      /^ene/i,
      /^feb/i,
      /^mar/i,
      /^abr/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^ago/i,
      /^sep/i,
      /^oct/i,
      /^nov/i,
      /^dic/i
    ], monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var es2 = moment2.defineLocale("es", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function(m, format) {
        if (!m) {
          return monthsShortDot;
        } else if (/-MMM-/.test(format)) {
          return monthsShort[m.month()];
        } else {
          return monthsShortDot[m.month()];
        }
      },
      monthsRegex,
      monthsShortRegex: monthsRegex,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse,
      longMonthsParse: monthsParse,
      shortMonthsParse: monthsParse,
      weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
      weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY H:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
      },
      calendar: {
        sameDay: function() {
          return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        nextDay: function() {
          return "[ma\xF1ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        nextWeek: function() {
          return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        lastDay: function() {
          return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        lastWeek: function() {
          return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un d\xEDa",
        dd: "%d d\xEDas",
        w: "una semana",
        ww: "%d semanas",
        M: "un mes",
        MM: "%d meses",
        y: "un a\xF1o",
        yy: "%d a\xF1os"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%d\xBA",
      week: {
        dow: 1,
        doy: 4
      },
      invalidDate: "Fecha inv\xE1lida"
    });
    return es2;
  });
})();
var es = es$2.exports;
var es$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), es$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": es
}));
export { es$1 as e };
