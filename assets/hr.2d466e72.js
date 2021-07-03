import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var hr$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    function translate(number, withoutSuffix, key) {
      var result = number + " ";
      switch (key) {
        case "ss":
          if (number === 1) {
            result += "sekunda";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "sekunde";
          } else {
            result += "sekundi";
          }
          return result;
        case "m":
          return withoutSuffix ? "jedna minuta" : "jedne minute";
        case "mm":
          if (number === 1) {
            result += "minuta";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "minute";
          } else {
            result += "minuta";
          }
          return result;
        case "h":
          return withoutSuffix ? "jedan sat" : "jednog sata";
        case "hh":
          if (number === 1) {
            result += "sat";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "sata";
          } else {
            result += "sati";
          }
          return result;
        case "dd":
          if (number === 1) {
            result += "dan";
          } else {
            result += "dana";
          }
          return result;
        case "MM":
          if (number === 1) {
            result += "mjesec";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "mjeseca";
          } else {
            result += "mjeseci";
          }
          return result;
        case "yy":
          if (number === 1) {
            result += "godina";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "godine";
          } else {
            result += "godina";
          }
          return result;
      }
    }
    var hr2 = moment2.defineLocale("hr", {
      months: {
        format: "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
        standalone: "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
      },
      monthsShort: "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
      monthsParseExact: true,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM YYYY",
        LLL: "Do MMMM YYYY H:mm",
        LLLL: "dddd, Do MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT";
          }
        },
        lastDay: "[ju\u010Der u] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[pro\u0161lu] [nedjelju] [u] LT";
            case 3:
              return "[pro\u0161lu] [srijedu] [u] LT";
            case 6:
              return "[pro\u0161le] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[pro\u0161li] dddd [u] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: "dan",
        dd: translate,
        M: "mjesec",
        MM: translate,
        y: "godinu",
        yy: translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
    return hr2;
  });
})();
var hr = hr$2.exports;
var hr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), hr$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": hr
}));
export { hr$1 as h };
