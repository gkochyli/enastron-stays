/* =============================================
   ENASTRON STAYS — Centralized Pricing
   Edit base prices here — all pages update automatically.
   Format: "From €X / night" using low-season base rates.
   ============================================= */

var PRICES = {
  'mulberry':          185,
  'daphne':            205,
  'chestnut':          190,
  'enastron-guesthouse': 65,
  'enastron-guest-room': 50
};

(function () {
  'use strict';
  document.querySelectorAll('[data-price]').forEach(function (el) {
    var key = el.getAttribute('data-price');
    var price = PRICES[key];
    if (price != null) {
      el.innerHTML = 'From &euro;' + price + ' <span>/ night</span>';
    }
  });
})();
