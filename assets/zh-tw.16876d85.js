import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var zhTw$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var zhTw2 = moment2.defineLocale("zh-tw", {
      months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
      monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
      weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
      weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"),
      weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY\u5E74M\u6708D\u65E5",
        LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
        LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
        l: "YYYY/M/D",
        ll: "YYYY\u5E74M\u6708D\u65E5",
        lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
        llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === "\u51CC\u6668" || meridiem === "\u65E9\u4E0A" || meridiem === "\u4E0A\u5348") {
          return hour;
        } else if (meridiem === "\u4E2D\u5348") {
          return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === "\u4E0B\u5348" || meridiem === "\u665A\u4E0A") {
          return hour + 12;
        }
      },
      meridiem: function(hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
          return "\u51CC\u6668";
        } else if (hm < 900) {
          return "\u65E9\u4E0A";
        } else if (hm < 1130) {
          return "\u4E0A\u5348";
        } else if (hm < 1230) {
          return "\u4E2D\u5348";
        } else if (hm < 1800) {
          return "\u4E0B\u5348";
        } else {
          return "\u665A\u4E0A";
        }
      },
      calendar: {
        sameDay: "[\u4ECA\u5929] LT",
        nextDay: "[\u660E\u5929] LT",
        nextWeek: "[\u4E0B]dddd LT",
        lastDay: "[\u6628\u5929] LT",
        lastWeek: "[\u4E0A]dddd LT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
      ordinal: function(number, period) {
        switch (period) {
          case "d":
          case "D":
          case "DDD":
            return number + "\u65E5";
          case "M":
            return number + "\u6708";
          case "w":
          case "W":
            return number + "\u9031";
          default:
            return number;
        }
      },
      relativeTime: {
        future: "%s\u5F8C",
        past: "%s\u524D",
        s: "\u5E7E\u79D2",
        ss: "%d \u79D2",
        m: "1 \u5206\u9418",
        mm: "%d \u5206\u9418",
        h: "1 \u5C0F\u6642",
        hh: "%d \u5C0F\u6642",
        d: "1 \u5929",
        dd: "%d \u5929",
        M: "1 \u500B\u6708",
        MM: "%d \u500B\u6708",
        y: "1 \u5E74",
        yy: "%d \u5E74"
      }
    });
    return zhTw2;
  });
})();
var zhTw = zhTw$2.exports;
var zhTw$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), zhTw$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": zhTw
}));
export { zhTw$1 as z };
