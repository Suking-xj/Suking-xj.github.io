import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var sr$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var translator = {
      words: {
        ss: ["sekunda", "sekunde", "sekundi"],
        m: ["jedan minut", "jedne minute"],
        mm: ["minut", "minute", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        dd: ["dan", "dana", "dana"],
        MM: ["mesec", "meseca", "meseci"],
        yy: ["godina", "godine", "godina"]
      },
      correctGrammaticalCase: function(number, wordKey) {
        return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
      },
      translate: function(number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
          return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
          return number + " " + translator.correctGrammaticalCase(number, wordKey);
        }
      }
    };
    var sr2 = moment2.defineLocale("sr", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "nedelja_ponedeljak_utorak_sreda_\u010Detvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sre._\u010Det._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D. M. YYYY.",
        LL: "D. MMMM YYYY.",
        LLL: "D. MMMM YYYY. H:mm",
        LLLL: "dddd, D. MMMM YYYY. H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedelju] [u] LT";
            case 3:
              return "[u] [sredu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT";
          }
        },
        lastDay: "[ju\u010De u] LT",
        lastWeek: function() {
          var lastWeekDays = [
            "[pro\u0161le] [nedelje] [u] LT",
            "[pro\u0161log] [ponedeljka] [u] LT",
            "[pro\u0161log] [utorka] [u] LT",
            "[pro\u0161le] [srede] [u] LT",
            "[pro\u0161log] [\u010Detvrtka] [u] LT",
            "[pro\u0161log] [petka] [u] LT",
            "[pro\u0161le] [subote] [u] LT"
          ];
          return lastWeekDays[this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pre %s",
        s: "nekoliko sekundi",
        ss: translator.translate,
        m: translator.translate,
        mm: translator.translate,
        h: translator.translate,
        hh: translator.translate,
        d: "dan",
        dd: translator.translate,
        M: "mesec",
        MM: translator.translate,
        y: "godinu",
        yy: translator.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
    return sr2;
  });
})();
var sr = sr$2.exports;
var sr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), sr$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": sr
}));
export { sr$1 as s };
