import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var ru$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    function plural(word, num) {
      var forms = word.split("_");
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
        ss: withoutSuffix ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
        mm: withoutSuffix ? "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442" : "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442",
        hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432",
        dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439",
        ww: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043D\u0435\u0434\u0435\u043B\u0438_\u043D\u0435\u0434\u0435\u043B\u044C",
        MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432",
        yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442"
      };
      if (key === "m") {
        return withoutSuffix ? "\u043C\u0438\u043D\u0443\u0442\u0430" : "\u043C\u0438\u043D\u0443\u0442\u0443";
      } else {
        return number + " " + plural(format[key], +number);
      }
    }
    var monthsParse = [
      /^янв/i,
      /^фев/i,
      /^мар/i,
      /^апр/i,
      /^ма[йя]/i,
      /^июн/i,
      /^июл/i,
      /^авг/i,
      /^сен/i,
      /^окт/i,
      /^ноя/i,
      /^дек/i
    ];
    var ru2 = moment2.defineLocale("ru", {
      months: {
        format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"),
        standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_")
      },
      monthsShort: {
        format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"),
        standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_")
      },
      weekdays: {
        standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"),
        format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
      },
      weekdaysShort: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
      weekdaysMin: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
      monthsParse,
      longMonthsParse: monthsParse,
      shortMonthsParse: monthsParse,
      monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
      monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY \u0433.",
        LLL: "D MMMM YYYY \u0433., H:mm",
        LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
      },
      calendar: {
        sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F, \u0432] LT",
        nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
        lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
        nextWeek: function(now) {
          if (now.week() !== this.week()) {
            switch (this.day()) {
              case 0:
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd, [\u0432] LT";
              case 1:
              case 2:
              case 4:
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd, [\u0432] LT";
              case 3:
              case 5:
              case 6:
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd, [\u0432] LT";
            }
          } else {
            if (this.day() === 2) {
              return "[\u0412\u043E] dddd, [\u0432] LT";
            } else {
              return "[\u0412] dddd, [\u0432] LT";
            }
          }
        },
        lastWeek: function(now) {
          if (now.week() !== this.week()) {
            switch (this.day()) {
              case 0:
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd, [\u0432] LT";
              case 1:
              case 2:
              case 4:
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd, [\u0432] LT";
              case 3:
              case 5:
              case 6:
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd, [\u0432] LT";
            }
          } else {
            if (this.day() === 2) {
              return "[\u0412\u043E] dddd, [\u0432] LT";
            } else {
              return "[\u0412] dddd, [\u0432] LT";
            }
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "\u0447\u0435\u0440\u0435\u0437 %s",
        past: "%s \u043D\u0430\u0437\u0430\u0434",
        s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434",
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: "\u0447\u0430\u0441",
        hh: relativeTimeWithPlural,
        d: "\u0434\u0435\u043D\u044C",
        dd: relativeTimeWithPlural,
        w: "\u043D\u0435\u0434\u0435\u043B\u044F",
        ww: relativeTimeWithPlural,
        M: "\u043C\u0435\u0441\u044F\u0446",
        MM: relativeTimeWithPlural,
        y: "\u0433\u043E\u0434",
        yy: relativeTimeWithPlural
      },
      meridiemParse: /ночи|утра|дня|вечера/i,
      isPM: function(input) {
        return /^(дня|вечера)$/.test(input);
      },
      meridiem: function(hour, minute, isLower) {
        if (hour < 4) {
          return "\u043D\u043E\u0447\u0438";
        } else if (hour < 12) {
          return "\u0443\u0442\u0440\u0430";
        } else if (hour < 17) {
          return "\u0434\u043D\u044F";
        } else {
          return "\u0432\u0435\u0447\u0435\u0440\u0430";
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
      ordinal: function(number, period) {
        switch (period) {
          case "M":
          case "d":
          case "DDD":
            return number + "-\u0439";
          case "D":
            return number + "-\u0433\u043E";
          case "w":
          case "W":
            return number + "-\u044F";
          default:
            return number;
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
    return ru2;
  });
})();
var ru = ru$2.exports;
var ru$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), ru$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": ru
}));
export { ru$1 as r };
