import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var ar$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var symbolMap = {
      1: "\u0661",
      2: "\u0662",
      3: "\u0663",
      4: "\u0664",
      5: "\u0665",
      6: "\u0666",
      7: "\u0667",
      8: "\u0668",
      9: "\u0669",
      0: "\u0660"
    }, numberMap = {
      "\u0661": "1",
      "\u0662": "2",
      "\u0663": "3",
      "\u0664": "4",
      "\u0665": "5",
      "\u0666": "6",
      "\u0667": "7",
      "\u0668": "8",
      "\u0669": "9",
      "\u0660": "0"
    }, pluralForm = function(n) {
      return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
      s: [
        "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629",
        "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",
        ["\u062B\u0627\u0646\u064A\u062A\u0627\u0646", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646"],
        "%d \u062B\u0648\u0627\u0646",
        "%d \u062B\u0627\u0646\u064A\u0629",
        "%d \u062B\u0627\u0646\u064A\u0629"
      ],
      m: [
        "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629",
        "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",
        ["\u062F\u0642\u064A\u0642\u062A\u0627\u0646", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646"],
        "%d \u062F\u0642\u0627\u0626\u0642",
        "%d \u062F\u0642\u064A\u0642\u0629",
        "%d \u062F\u0642\u064A\u0642\u0629"
      ],
      h: [
        "\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629",
        "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",
        ["\u0633\u0627\u0639\u062A\u0627\u0646", "\u0633\u0627\u0639\u062A\u064A\u0646"],
        "%d \u0633\u0627\u0639\u0627\u062A",
        "%d \u0633\u0627\u0639\u0629",
        "%d \u0633\u0627\u0639\u0629"
      ],
      d: [
        "\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645",
        "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F",
        ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"],
        "%d \u0623\u064A\u0627\u0645",
        "%d \u064A\u0648\u0645\u064B\u0627",
        "%d \u064A\u0648\u0645"
      ],
      M: [
        "\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631",
        "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F",
        ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"],
        "%d \u0623\u0634\u0647\u0631",
        "%d \u0634\u0647\u0631\u0627",
        "%d \u0634\u0647\u0631"
      ],
      y: [
        "\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645",
        "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F",
        ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"],
        "%d \u0623\u0639\u0648\u0627\u0645",
        "%d \u0639\u0627\u0645\u064B\u0627",
        "%d \u0639\u0627\u0645"
      ]
    }, pluralize = function(u) {
      return function(number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number), str = plurals[u][pluralForm(number)];
        if (f === 2) {
          str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
      };
    }, months = [
      "\u064A\u0646\u0627\u064A\u0631",
      "\u0641\u0628\u0631\u0627\u064A\u0631",
      "\u0645\u0627\u0631\u0633",
      "\u0623\u0628\u0631\u064A\u0644",
      "\u0645\u0627\u064A\u0648",
      "\u064A\u0648\u0646\u064A\u0648",
      "\u064A\u0648\u0644\u064A\u0648",
      "\u0623\u063A\u0633\u0637\u0633",
      "\u0633\u0628\u062A\u0645\u0628\u0631",
      "\u0623\u0643\u062A\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062F\u064A\u0633\u0645\u0628\u0631"
    ];
    var ar2 = moment2.defineLocale("ar", {
      months,
      monthsShort: months,
      weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
      weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
      weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/\u200FM/\u200FYYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /ص|م/,
      isPM: function(input) {
        return input === "\u0645";
      },
      meridiem: function(hour, minute, isLower) {
        if (hour < 12) {
          return "\u0635";
        } else {
          return "\u0645";
        }
      },
      calendar: {
        sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        nextDay: "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        nextWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        lastWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "\u0628\u0639\u062F %s",
        past: "\u0645\u0646\u0630 %s",
        s: pluralize("s"),
        ss: pluralize("s"),
        m: pluralize("m"),
        mm: pluralize("m"),
        h: pluralize("h"),
        hh: pluralize("h"),
        d: pluralize("d"),
        dd: pluralize("d"),
        M: pluralize("M"),
        MM: pluralize("M"),
        y: pluralize("y"),
        yy: pluralize("y")
      },
      preparse: function(string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(match) {
          return numberMap[match];
        }).replace(/،/g, ",");
      },
      postformat: function(string) {
        return string.replace(/\d/g, function(match) {
          return symbolMap[match];
        }).replace(/,/g, "\u060C");
      },
      week: {
        dow: 6,
        doy: 12
      }
    });
    return ar2;
  });
})();
var ar = ar$2.exports;
var ar$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), ar$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": ar
}));
export { ar$1 as a };
