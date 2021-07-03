import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var nb$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var nb2 = moment2.defineLocale("nb", {
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
      monthsParseExact: true,
      weekdays: "s\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag".split("_"),
      weekdaysShort: "s\xF8._ma._ti._on._to._fr._l\xF8.".split("_"),
      weekdaysMin: "s\xF8_ma_ti_on_to_fr_l\xF8".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[i g\xE5r kl.] LT",
        lastWeek: "[forrige] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "noen sekunder",
        ss: "%d sekunder",
        m: "ett minutt",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dager",
        w: "en uke",
        ww: "%d uker",
        M: "en m\xE5ned",
        MM: "%d m\xE5neder",
        y: "ett \xE5r",
        yy: "%d \xE5r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return nb2;
  });
})();
var nb = nb$2.exports;
var nb$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), nb$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": nb
}));
export { nb$1 as n };
