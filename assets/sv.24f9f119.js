import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var sv$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var sv2 = moment2.defineLocale("sv", {
      months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays: "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"),
      weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"),
      weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Idag] LT",
        nextDay: "[Imorgon] LT",
        lastDay: "[Ig\xE5r] LT",
        nextWeek: "[P\xE5] dddd LT",
        lastWeek: "[I] dddd[s] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "f\xF6r %s sedan",
        s: "n\xE5gra sekunder",
        ss: "%d sekunder",
        m: "en minut",
        mm: "%d minuter",
        h: "en timme",
        hh: "%d timmar",
        d: "en dag",
        dd: "%d dagar",
        M: "en m\xE5nad",
        MM: "%d m\xE5nader",
        y: "ett \xE5r",
        yy: "%d \xE5r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
      ordinal: function(number) {
        var b = number % 10, output = ~~(number % 100 / 10) === 1 ? ":e" : b === 1 ? ":a" : b === 2 ? ":a" : b === 3 ? ":e" : ":e";
        return number + output;
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
    return sv2;
  });
})();
var sv = sv$2.exports;
var sv$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), sv$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": sv
}));
export { sv$1 as s };
