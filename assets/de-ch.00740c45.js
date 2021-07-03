import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var deCh$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [number + " Tage", number + " Tagen"],
        w: ["eine Woche", "einer Woche"],
        M: ["ein Monat", "einem Monat"],
        MM: [number + " Monate", number + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [number + " Jahre", number + " Jahren"]
      };
      return withoutSuffix ? format[key][0] : format[key][1];
    }
    var deCh2 = moment2.defineLocale("de-ch", {
      months: "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: true,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: processRelativeTime,
        mm: "%d Minuten",
        h: processRelativeTime,
        hh: "%d Stunden",
        d: processRelativeTime,
        dd: processRelativeTime,
        w: processRelativeTime,
        ww: "%d Wochen",
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return deCh2;
  });
})();
var deCh = deCh$2.exports;
var deCh$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), deCh$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": deCh
}));
export { deCh$1 as d };
