import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var sl$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var result = number + " ";
      switch (key) {
        case "s":
          return withoutSuffix || isFuture ? "nekaj sekund" : "nekaj sekundami";
        case "ss":
          if (number === 1) {
            result += withoutSuffix ? "sekundo" : "sekundi";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "sekundi" : "sekundah";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "sekunde" : "sekundah";
          } else {
            result += "sekund";
          }
          return result;
        case "m":
          return withoutSuffix ? "ena minuta" : "eno minuto";
        case "mm":
          if (number === 1) {
            result += withoutSuffix ? "minuta" : "minuto";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "minuti" : "minutama";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "minute" : "minutami";
          } else {
            result += withoutSuffix || isFuture ? "minut" : "minutami";
          }
          return result;
        case "h":
          return withoutSuffix ? "ena ura" : "eno uro";
        case "hh":
          if (number === 1) {
            result += withoutSuffix ? "ura" : "uro";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "uri" : "urama";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "ure" : "urami";
          } else {
            result += withoutSuffix || isFuture ? "ur" : "urami";
          }
          return result;
        case "d":
          return withoutSuffix || isFuture ? "en dan" : "enim dnem";
        case "dd":
          if (number === 1) {
            result += withoutSuffix || isFuture ? "dan" : "dnem";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "dni" : "dnevoma";
          } else {
            result += withoutSuffix || isFuture ? "dni" : "dnevi";
          }
          return result;
        case "M":
          return withoutSuffix || isFuture ? "en mesec" : "enim mesecem";
        case "MM":
          if (number === 1) {
            result += withoutSuffix || isFuture ? "mesec" : "mesecem";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "meseca" : "mesecema";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "mesece" : "meseci";
          } else {
            result += withoutSuffix || isFuture ? "mesecev" : "meseci";
          }
          return result;
        case "y":
          return withoutSuffix || isFuture ? "eno leto" : "enim letom";
        case "yy":
          if (number === 1) {
            result += withoutSuffix || isFuture ? "leto" : "letom";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "leti" : "letoma";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "leta" : "leti";
          } else {
            result += withoutSuffix || isFuture ? "let" : "leti";
          }
          return result;
      }
    }
    var sl2 = moment2.defineLocale("sl", {
      months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),
      weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
      weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD. MM. YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v] [nedeljo] [ob] LT";
            case 3:
              return "[v] [sredo] [ob] LT";
            case 6:
              return "[v] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[v] dddd [ob] LT";
          }
        },
        lastDay: "[v\u010Deraj ob] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[prej\u0161njo] [nedeljo] [ob] LT";
            case 3:
              return "[prej\u0161njo] [sredo] [ob] LT";
            case 6:
              return "[prej\u0161njo] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prej\u0161nji] dddd [ob] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "\u010Dez %s",
        past: "pred %s",
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
    return sl2;
  });
})();
var sl = sl$2.exports;
var sl$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), sl$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": sl
}));
export { sl$1 as s };
