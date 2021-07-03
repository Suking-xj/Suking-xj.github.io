import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var cs$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var months = "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_"), monthsShort = "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_"), monthsParse = [
      /^led/i,
      /^úno/i,
      /^bře/i,
      /^dub/i,
      /^kvě/i,
      /^(čvn|červen$|června)/i,
      /^(čvc|červenec|července)/i,
      /^srp/i,
      /^zář/i,
      /^říj/i,
      /^lis/i,
      /^pro/i
    ], monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
    function plural(n) {
      return n > 1 && n < 5 && ~~(n / 10) !== 1;
    }
    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + " ";
      switch (key) {
        case "s":
          return withoutSuffix || isFuture ? "p\xE1r sekund" : "p\xE1r sekundami";
        case "ss":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "sekundy" : "sekund");
          } else {
            return result + "sekundami";
          }
        case "m":
          return withoutSuffix ? "minuta" : isFuture ? "minutu" : "minutou";
        case "mm":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "minuty" : "minut");
          } else {
            return result + "minutami";
          }
        case "h":
          return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
        case "hh":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "hodiny" : "hodin");
          } else {
            return result + "hodinami";
          }
        case "d":
          return withoutSuffix || isFuture ? "den" : "dnem";
        case "dd":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "dny" : "dn\xED");
          } else {
            return result + "dny";
          }
        case "M":
          return withoutSuffix || isFuture ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";
        case "MM":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F");
          } else {
            return result + "m\u011Bs\xEDci";
          }
        case "y":
          return withoutSuffix || isFuture ? "rok" : "rokem";
        case "yy":
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? "roky" : "let");
          } else {
            return result + "lety";
          }
      }
    }
    var cs2 = moment2.defineLocale("cs", {
      months,
      monthsShort,
      monthsRegex,
      monthsShortRegex: monthsRegex,
      monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
      monthsParse,
      longMonthsParse: monthsParse,
      shortMonthsParse: monthsParse,
      weekdays: "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"),
      weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
      weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[z\xEDtra v] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v ned\u011Bli v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve st\u0159edu v] LT";
            case 4:
              return "[ve \u010Dtvrtek v] LT";
            case 5:
              return "[v p\xE1tek v] LT";
            case 6:
              return "[v sobotu v] LT";
          }
        },
        lastDay: "[v\u010Dera v] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[minulou ned\u011Bli v] LT";
            case 1:
            case 2:
              return "[minul\xE9] dddd [v] LT";
            case 3:
              return "[minulou st\u0159edu v] LT";
            case 4:
            case 5:
              return "[minul\xFD] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "p\u0159ed %s",
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
    return cs2;
  });
})();
var cs = cs$2.exports;
var cs$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), cs$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": cs
}));
export { cs$1 as c };
