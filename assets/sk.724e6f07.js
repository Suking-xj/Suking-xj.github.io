import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var sk$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var months = "janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split("_"), monthsShort = "jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_");
    function plural(n) {
      return n > 1 && n < 5;
    }
    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + " ";
      switch (key) {
        case "s":
          return withoutSuffix || isFuture ? "p\xE1r sek\xFAnd" : "p\xE1r sekundami";
        case "ss":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "sekundy" : "sek\xFAnd");
          } else {
            return result + "sekundami";
          }
        case "m":
          return withoutSuffix ? "min\xFAta" : isFuture ? "min\xFAtu" : "min\xFAtou";
        case "mm":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "min\xFAty" : "min\xFAt");
          } else {
            return result + "min\xFAtami";
          }
        case "h":
          return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
        case "hh":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "hodiny" : "hod\xEDn");
          } else {
            return result + "hodinami";
          }
        case "d":
          return withoutSuffix || isFuture ? "de\u0148" : "d\u0148om";
        case "dd":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "dni" : "dn\xED");
          } else {
            return result + "d\u0148ami";
          }
        case "M":
          return withoutSuffix || isFuture ? "mesiac" : "mesiacom";
        case "MM":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "mesiace" : "mesiacov");
          } else {
            return result + "mesiacmi";
          }
        case "y":
          return withoutSuffix || isFuture ? "rok" : "rokom";
        case "yy":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "roky" : "rokov");
          } else {
            return result + "rokmi";
          }
      }
    }
    var sk2 = moment2.defineLocale("sk", {
      months,
      monthsShort,
      weekdays: "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
      weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v nede\u013Eu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo \u0161tvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT";
          }
        },
        lastDay: "[v\u010Dera o] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[minul\xFA nede\u013Eu o] LT";
            case 1:
            case 2:
              return "[minul\xFD] dddd [o] LT";
            case 3:
              return "[minul\xFA stredu o] LT";
            case 4:
            case 5:
              return "[minul\xFD] dddd [o] LT";
            case 6:
              return "[minul\xFA sobotu o] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return sk2;
  });
})();
var sk = sk$2.exports;
var sk$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), sk$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": sk
}));
export { sk$1 as s };
