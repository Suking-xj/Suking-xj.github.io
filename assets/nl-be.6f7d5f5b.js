import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var nlBe$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), monthsParse = [
      /^jan/i,
      /^feb/i,
      /^maart|mrt.?$/i,
      /^apr/i,
      /^mei$/i,
      /^jun[i.]?$/i,
      /^jul[i.]?$/i,
      /^aug/i,
      /^sep/i,
      /^okt/i,
      /^nov/i,
      /^dec/i
    ], monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var nlBe2 = moment2.defineLocale("nl-be", {
      months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
      monthsShort: function(m, format) {
        if (!m) {
          return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
          return monthsShortWithoutDots[m.month()];
        } else {
          return monthsShortWithDots[m.month()];
        }
      },
      monthsRegex,
      monthsShortRegex: monthsRegex,
      monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse,
      longMonthsParse: monthsParse,
      shortMonthsParse: monthsParse,
      weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
      weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
      weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[vandaag om] LT",
        nextDay: "[morgen om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[gisteren om] LT",
        lastWeek: "[afgelopen] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "over %s",
        past: "%s geleden",
        s: "een paar seconden",
        ss: "%d seconden",
        m: "\xE9\xE9n minuut",
        mm: "%d minuten",
        h: "\xE9\xE9n uur",
        hh: "%d uur",
        d: "\xE9\xE9n dag",
        dd: "%d dagen",
        M: "\xE9\xE9n maand",
        MM: "%d maanden",
        y: "\xE9\xE9n jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function(number) {
        return number + (number === 1 || number === 8 || number >= 20 ? "ste" : "de");
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
    return nlBe2;
  });
})();
var nlBe = nlBe$2.exports;
var nlBe$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), nlBe$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": nlBe
}));
export { nlBe$1 as n };
