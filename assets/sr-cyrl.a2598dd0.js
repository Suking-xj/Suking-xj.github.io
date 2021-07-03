import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var srCyrl$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var translator = {
      words: {
        ss: ["\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u0441\u0435\u043A\u0443\u043D\u0434\u0435", "\u0441\u0435\u043A\u0443\u043D\u0434\u0438"],
        m: ["\u0458\u0435\u0434\u0430\u043D \u043C\u0438\u043D\u0443\u0442", "\u0458\u0435\u0434\u043D\u0435 \u043C\u0438\u043D\u0443\u0442\u0435"],
        mm: ["\u043C\u0438\u043D\u0443\u0442", "\u043C\u0438\u043D\u0443\u0442\u0435", "\u043C\u0438\u043D\u0443\u0442\u0430"],
        h: ["\u0458\u0435\u0434\u0430\u043D \u0441\u0430\u0442", "\u0458\u0435\u0434\u043D\u043E\u0433 \u0441\u0430\u0442\u0430"],
        hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
        dd: ["\u0434\u0430\u043D", "\u0434\u0430\u043D\u0430", "\u0434\u0430\u043D\u0430"],
        MM: ["\u043C\u0435\u0441\u0435\u0446", "\u043C\u0435\u0441\u0435\u0446\u0430", "\u043C\u0435\u0441\u0435\u0446\u0438"],
        yy: ["\u0433\u043E\u0434\u0438\u043D\u0430", "\u0433\u043E\u0434\u0438\u043D\u0435", "\u0433\u043E\u0434\u0438\u043D\u0430"]
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
    var srCyrl2 = moment2.defineLocale("sr-cyrl", {
      months: "\u0458\u0430\u043D\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440_\u043E\u043A\u0442\u043E\u0431\u0430\u0440_\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440".split("_"),
      monthsShort: "\u0458\u0430\u043D._\u0444\u0435\u0431._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433._\u0441\u0435\u043F._\u043E\u043A\u0442._\u043D\u043E\u0432._\u0434\u0435\u0446.".split("_"),
      monthsParseExact: true,
      weekdays: "\u043D\u0435\u0434\u0435\u0459\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A_\u0443\u0442\u043E\u0440\u0430\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A_\u043F\u0435\u0442\u0430\u043A_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),
      weekdaysShort: "\u043D\u0435\u0434._\u043F\u043E\u043D._\u0443\u0442\u043E._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043F\u0435\u0442._\u0441\u0443\u0431.".split("_"),
      weekdaysMin: "\u043D\u0435_\u043F\u043E_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441\u0443".split("_"),
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
        sameDay: "[\u0434\u0430\u043D\u0430\u0441 \u0443] LT",
        nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[\u0443] [\u043D\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
            case 3:
              return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
            case 6:
              return "[\u0443] [\u0441\u0443\u0431\u043E\u0442\u0443] [\u0443] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[\u0443] dddd [\u0443] LT";
          }
        },
        lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
        lastWeek: function() {
          var lastWeekDays = [
            "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u043D\u0435\u0434\u0435\u0459\u0435] [\u0443] LT",
            "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u043A\u0430] [\u0443] LT",
            "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0443\u0442\u043E\u0440\u043A\u0430] [\u0443] LT",
            "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT",
            "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043A\u0430] [\u0443] LT",
            "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u0435\u0442\u043A\u0430] [\u0443] LT",
            "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0443\u0431\u043E\u0442\u0435] [\u0443] LT"
          ];
          return lastWeekDays[this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "\u0437\u0430 %s",
        past: "\u043F\u0440\u0435 %s",
        s: "\u043D\u0435\u043A\u043E\u043B\u0438\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
        ss: translator.translate,
        m: translator.translate,
        mm: translator.translate,
        h: translator.translate,
        hh: translator.translate,
        d: "\u0434\u0430\u043D",
        dd: translator.translate,
        M: "\u043C\u0435\u0441\u0435\u0446",
        MM: translator.translate,
        y: "\u0433\u043E\u0434\u0438\u043D\u0443",
        yy: translator.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
    return srCyrl2;
  });
})();
var srCyrl = srCyrl$2.exports;
var srCyrl$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), srCyrl$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": srCyrl
}));
export { srCyrl$1 as s };
