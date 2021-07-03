import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var pt$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var pt2 = moment2.defineLocale("pt", {
      months: "janeiro_fevereiro_mar\xE7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
      monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
      weekdays: "Domingo_Segunda-feira_Ter\xE7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xE1bado".split("_"),
      weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),
      weekdaysMin: "Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY HH:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hoje \xE0s] LT",
        nextDay: "[Amanh\xE3 \xE0s] LT",
        nextWeek: "dddd [\xE0s] LT",
        lastDay: "[Ontem \xE0s] LT",
        lastWeek: function() {
          return this.day() === 0 || this.day() === 6 ? "[\xDAltimo] dddd [\xE0s] LT" : "[\xDAltima] dddd [\xE0s] LT";
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "em %s",
        past: "h\xE1 %s",
        s: "segundos",
        ss: "%d segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        w: "uma semana",
        ww: "%d semanas",
        M: "um m\xEAs",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%d\xBA",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return pt2;
  });
})();
var pt = pt$2.exports;
var pt$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), pt$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": pt
}));
export { pt$1 as p };
