import { a as moment, c as commonjsGlobal } from "./moment.399d2139.js";
var itCh$2 = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    typeof require === "function" ? factory(moment.exports) : factory(global.moment);
  })(commonjsGlobal, function(moment2) {
    //! moment.js locale configuration
    var itCh2 = moment2.defineLocale("it-ch", {
      months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
      monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
      weekdays: "domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato".split("_"),
      weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
      weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Oggi alle] LT",
        nextDay: "[Domani alle] LT",
        nextWeek: "dddd [alle] LT",
        lastDay: "[Ieri alle] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[la scorsa] dddd [alle] LT";
            default:
              return "[lo scorso] dddd [alle] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: function(s) {
          return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s;
        },
        past: "%s fa",
        s: "alcuni secondi",
        ss: "%d secondi",
        m: "un minuto",
        mm: "%d minuti",
        h: "un'ora",
        hh: "%d ore",
        d: "un giorno",
        dd: "%d giorni",
        M: "un mese",
        MM: "%d mesi",
        y: "un anno",
        yy: "%d anni"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%d\xBA",
      week: {
        dow: 1,
        doy: 4
      }
    });
    return itCh2;
  });
})();
var itCh = itCh$2.exports;
var itCh$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), itCh$2.exports, {
  [Symbol.toStringTag]: "Module",
  "default": itCh
}));
export { itCh$1 as i };
