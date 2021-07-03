import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var arKw$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var arKw2 = moment2.defineLocale("ar-kw", {
      months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"),
      monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"),
      weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062A\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),
      weekdaysShort: "\u0627\u062D\u062F_\u0627\u062A\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),
      weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),
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
        sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "\u0641\u064A %s",
        past: "\u0645\u0646\u0630 %s",
        s: "\u062B\u0648\u0627\u0646",
        ss: "%d \u062B\u0627\u0646\u064A\u0629",
        m: "\u062F\u0642\u064A\u0642\u0629",
        mm: "%d \u062F\u0642\u0627\u0626\u0642",
        h: "\u0633\u0627\u0639\u0629",
        hh: "%d \u0633\u0627\u0639\u0627\u062A",
        d: "\u064A\u0648\u0645",
        dd: "%d \u0623\u064A\u0627\u0645",
        M: "\u0634\u0647\u0631",
        MM: "%d \u0623\u0634\u0647\u0631",
        y: "\u0633\u0646\u0629",
        yy: "%d \u0633\u0646\u0648\u0627\u062A"
      },
      week: {
        dow: 0,
        doy: 12
      }
    });
    return arKw2;
  });
})();
var arKw = arKw$2.exports;
var arKw$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), arKw$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": arKw
}));
export { arKw$1 as a };
