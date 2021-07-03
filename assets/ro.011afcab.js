import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var ro$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
        ss: "secunde",
        mm: "minute",
        hh: "ore",
        dd: "zile",
        ww: "s\u0103pt\u0103m\xE2ni",
        MM: "luni",
        yy: "ani"
      }, separator = " ";
      if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
        separator = " de ";
      }
      return number + separator + format[key];
    }
    var ro2 = moment2.defineLocale("ro", {
      months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
      monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\xE2mb\u0103t\u0103".split("_"),
      weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xE2m".split("_"),
      weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xE2".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[azi la] LT",
        nextDay: "[m\xE2ine la] LT",
        nextWeek: "dddd [la] LT",
        lastDay: "[ieri la] LT",
        lastWeek: "[fosta] dddd [la] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "peste %s",
        past: "%s \xEEn urm\u0103",
        s: "c\xE2teva secunde",
        ss: relativeTimeWithPlural,
        m: "un minut",
        mm: relativeTimeWithPlural,
        h: "o or\u0103",
        hh: relativeTimeWithPlural,
        d: "o zi",
        dd: relativeTimeWithPlural,
        w: "o s\u0103pt\u0103m\xE2n\u0103",
        ww: relativeTimeWithPlural,
        M: "o lun\u0103",
        MM: relativeTimeWithPlural,
        y: "un an",
        yy: relativeTimeWithPlural
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
    return ro2;
  });
})();
var ro = ro$2.exports;
var ro$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), ro$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": ro
}));
export { ro$1 as r };
