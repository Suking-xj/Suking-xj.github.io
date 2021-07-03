import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var tr$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var suffixes = {
      1: "'inci",
      5: "'inci",
      8: "'inci",
      70: "'inci",
      80: "'inci",
      2: "'nci",
      7: "'nci",
      20: "'nci",
      50: "'nci",
      3: "'\xFCnc\xFC",
      4: "'\xFCnc\xFC",
      100: "'\xFCnc\xFC",
      6: "'nc\u0131",
      9: "'uncu",
      10: "'uncu",
      30: "'uncu",
      60: "'\u0131nc\u0131",
      90: "'\u0131nc\u0131"
    };
    var tr2 = moment2.defineLocale("tr", {
      months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
      monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
      weekdays: "Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
      weekdaysShort: "Paz_Pts_Sal_\xC7ar_Per_Cum_Cts".split("_"),
      weekdaysMin: "Pz_Pt_Sa_\xC7a_Pe_Cu_Ct".split("_"),
      meridiem: function(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower ? "\xF6\xF6" : "\xD6\xD6";
        } else {
          return isLower ? "\xF6s" : "\xD6S";
        }
      },
      meridiemParse: /öö|ÖÖ|ös|ÖS/,
      isPM: function(input) {
        return input === "\xF6s" || input === "\xD6S";
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bug\xFCn saat] LT",
        nextDay: "[yar\u0131n saat] LT",
        nextWeek: "[gelecek] dddd [saat] LT",
        lastDay: "[d\xFCn] LT",
        lastWeek: "[ge\xE7en] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s \xF6nce",
        s: "birka\xE7 saniye",
        ss: "%d saniye",
        m: "bir dakika",
        mm: "%d dakika",
        h: "bir saat",
        hh: "%d saat",
        d: "bir g\xFCn",
        dd: "%d g\xFCn",
        w: "bir hafta",
        ww: "%d hafta",
        M: "bir ay",
        MM: "%d ay",
        y: "bir y\u0131l",
        yy: "%d y\u0131l"
      },
      ordinal: function(number, period) {
        switch (period) {
          case "d":
          case "D":
          case "Do":
          case "DD":
            return number;
          default:
            if (number === 0) {
              return number + "'\u0131nc\u0131";
            }
            var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
    return tr2;
  });
})();
var tr = tr$2.exports;
var tr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), tr$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": tr
}));
export { tr$1 as t };
