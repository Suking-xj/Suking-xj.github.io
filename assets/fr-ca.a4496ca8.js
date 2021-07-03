import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var frCa$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var frCa2 = moment2.defineLocale("fr-ca", {
      months: "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),
      monthsShort: "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),
      monthsParseExact: true,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourd\u2019hui \xE0] LT",
        nextDay: "[Demain \xE0] LT",
        nextWeek: "dddd [\xE0] LT",
        lastDay: "[Hier \xE0] LT",
        lastWeek: "dddd [dernier \xE0] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function(number, period) {
        switch (period) {
          default:
          case "M":
          case "Q":
          case "D":
          case "DDD":
          case "d":
            return number + (number === 1 ? "er" : "e");
          case "w":
          case "W":
            return number + (number === 1 ? "re" : "e");
        }
      }
    });
    return frCa2;
  });
})();
var frCa = frCa$2.exports;
var frCa$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), frCa$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": frCa
}));
export { frCa$1 as f };
