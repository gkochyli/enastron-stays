/* =============================================
   ENASTRON STAYS — Centralized Reviews
   Edit all reviews here — listing pages and
   landing page update automatically.
   Mark featured: true for landing page showcase.
   ============================================= */

var ENASTRON_REVIEWS = {
  'mulberry': {
    rating: 4.96,
    count: 26,
    items: [
      {
        name: 'James',
        date: 'September 2025',
        stars: 4,
        text: "There are three traditional cottages on Pipitsa\u2019s 3 hectare property providing a get away from it all experience while being only 10/15 minutes by car from beaches with tavernas. Each cottage has its own plunge pool. The cottages all have a similar rustic charm with quality outside furniture providing locations with both sun and shade. If you are looking for a rural retreat with absolute peace and quiet, then this is the place!"
      },
      {
        name: 'Maria',
        date: 'August 2025',
        stars: 5,
        featured: true,
        text: "The restored 1905 stone cottage is absolutely charming. The traditional Skopelitian platform bed, the exposed wooden beams, and the flagstone floors all combine to create a truly authentic Greek island experience. The pool is lovely, and Pipitsa and Giannis are wonderful hosts who make you feel right at home."
      },
      {
        name: 'Lisa',
        date: 'September 2025',
        stars: 5,
        text: "We spent 2 weeks at Mulberry Tree and it was wonderful. Peaceful location with fabulous views, 10 mins in the car to restaurants and beaches. The pool is great to cool off. Our hosts Giannis and Pipitsa were fabulous. Car hire was organised by Pipitsa for us. All in all a fabulous stay \u2014 we will plan to return. Highly recommend."
      }
    ]
  },
  'daphne': {
    rating: 5.0,
    count: 17,
    items: [
      {
        name: 'James',
        date: 'September 2025',
        stars: 4,
        text: "There are three traditional cottages on Pipitsa\u2019s 3 hectare property providing a get away from it all experience while being only 10/15 minutes by car from beaches with tavernas. Each cottage has its own plunge pool. The cottages all have a similar rustic charm with quality outside furniture providing locations with both sun and shade. If you are looking for a rural retreat with absolute peace and quiet, then this is the place!"
      },
      {
        name: 'Lisa',
        date: 'September 2025',
        stars: 5,
        text: "Peaceful location with fabulous views, 10 mins in the car to the restaurants and beaches. If you want privacy, peace and quiet and beautiful views, this is your place. The pool is great to cool off in the hotter months, but the beaches are beautiful, turquoise sea, calm sheltered swimming. Our hosts Giannis and Pipitsa were fabulous. Highly recommend."
      },
      {
        name: 'Sarah',
        date: 'August 2025',
        stars: 5,
        featured: true,
        text: "Daphne Cottage is a beautiful two-storey hideaway with a spacious terrace on two sides and wonderful valley views. The fireplace downstairs and the air-conditioned bedroom upstairs with its large veranda made it perfect for our September stay. The private pool surrounded by gardens was idyllic. Pipitsa was so helpful with everything."
      }
    ]
  },
  'chestnut': {
    rating: 4.9,
    count: 29,
    items: [
      {
        name: 'Guest',
        date: '2025',
        stars: 5,
        featured: true,
        text: "Had a fantastic week at Chestnut cottage, was given a warm welcome on arrival by hosts Pipitsa & Giannis. The cottage was a perfect hideaway in the hills amongst olive trees and lush vegetation giving total privacy yet only a 10 minute drive from some beautiful beaches with crystal clear waters, nearby are also a good selection of tavernas."
      },
      {
        name: 'James',
        date: 'September 2025',
        stars: 4,
        text: "There are three traditional cottages on Pipitsa\u2019s 3 hectare property providing a get away from it all experience while being only 10/15 minutes by car from beaches with tavernas. Each cottage has its own plunge pool. The cottages all have a similar rustic charm with quality outside furniture providing locations with both sun and shade. It is perhaps worth checking with Pipitsa which cottage you would prefer. Chestnut Tree has a different access via an unmade track \u2014 a 4x4 is recommended."
      },
      {
        name: 'Rachel',
        date: 'July 2025',
        stars: 5,
        text: "Chestnut Tree Cottage is a perfect hideaway. Set in the hills amongst olive trees and lush vegetation, it offers total privacy yet is only a 10-minute drive from beautiful beaches with crystal clear waters. The fully equipped kitchen and air conditioning made it very comfortable. A good selection of tavernas are nearby too."
      }
    ]
  },
  'enastron-guesthouse': {
    rating: 4.97,
    count: 30,
    items: [
      {
        name: 'Guest',
        date: '2025',
        stars: 5,
        featured: true,
        text: "A spacious and comfortable apartment designed with light and space in mind. Very peaceful location with no traffic, yet just 5 minutes from the port and beach. The views are wonderful and the hosts are welcoming and attentive. Perfect base for exploring Skopelos."
      },
      {
        name: 'Mark',
        date: 'August 2025',
        stars: 5,
        text: "Great location in Skopelos Town \u2014 walking distance to restaurants, shops and the harbour. The apartment was spotlessly clean and well maintained. Pipitsa greeted us warmly and gave us fantastic recommendations for the island. The balcony views over the town rooftops to the sea were lovely in the evenings."
      },
      {
        name: 'Anna',
        date: 'July 2025',
        stars: 5,
        text: "Exactly what we needed for our Skopelos holiday. The guesthouse is modern and comfortable with everything you could want. The location is perfect \u2014 quiet enough to relax but close to all the charm of Skopelos Town. Pipitsa even arranged airport transfers and car hire for us. Would definitely return."
      }
    ]
  },
  'enastron-guest-room': {
    rating: 4.96,
    count: 26,
    items: [
      {
        name: 'Guest',
        date: '2025',
        stars: 5,
        featured: true,
        text: "A wonderful guest room in a perfect location \u2014 quiet and peaceful, yet just minutes from Skopelos port and the beach. The room is clean, cozy, and well-equipped. Pipitsa was a fantastic host, very welcoming and helpful. Highly recommend for couples visiting Skopelos."
      },
      {
        name: 'Tom',
        date: 'August 2025',
        stars: 5,
        text: "Simple, clean, and perfectly located for exploring Skopelos on foot. We could walk to the port, the beach, and all the best restaurants. The room had everything we needed and Pipitsa made us feel very welcome. Excellent value for the location and quality."
      },
      {
        name: 'Elena',
        date: 'June 2025',
        stars: 5,
        text: "Cozy and charming room in a lovely setting. The host Pipitsa was incredibly kind, she picked us up from the port and gave us a local guide to the island. Everything was spotless and the bed was very comfortable. A great budget-friendly option on beautiful Skopelos."
      }
    ]
  }
};

/* --- Render reviews into containers --- */
(function () {
  'use strict';

  var STAR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  var STAR_OUTLINE_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  function buildStars(count) {
    var html = '';
    for (var i = 0; i < count; i++) { html += STAR_SVG; }
    return html;
  }

  function buildReviewCard(review, listingName) {
    var card = '<div class="review-card">';
    card += '<div class="review-card__header"><div>';
    card += '<div class="review-card__name">' + review.name + ' <span class="review-card__stars">' + buildStars(review.stars) + '</span></div>';
    card += '<div class="review-card__date">' + review.date + '</div>';
    card += '</div></div>';
    card += '<p class="review-card__text">' + review.text + '</p>';
    if (listingName) {
      card += '<div class="review-card__listing">\u2014 ' + listingName + '</div>';
    }
    card += '</div>';
    return card;
  }

  // Listing names for the landing page
  var LISTING_NAMES = {
    'mulberry': 'Mulberry Tree Cottage',
    'daphne': 'Daphne Cottage',
    'chestnut': 'Chestnut Tree Cottage',
    'enastron-guesthouse': 'Enastron Guesthouse',
    'enastron-guest-room': 'Enastron Guest Room'
  };

  // Render listing-page reviews (data-reviews="listing-key")
  document.querySelectorAll('[data-reviews]').forEach(function (container) {
    var key = container.getAttribute('data-reviews');
    var listing = ENASTRON_REVIEWS[key];
    if (!listing) return;

    // Render summary
    var summaryEl = container.querySelector('.reviews__summary');
    if (summaryEl) {
      var starSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      summaryEl.innerHTML = starSvg + ' ' + listing.rating + ' <span>\u00b7 ' + listing.count + ' reviews</span>';
    }

    // Render cards
    var grid = container.querySelector('.reviews__grid');
    if (grid) {
      var html = '';
      listing.items.forEach(function (review) {
        html += buildReviewCard(review);
      });
      grid.innerHTML = html;
    }
  });

  // Render landing-page featured reviews (data-reviews-featured)
  document.querySelectorAll('[data-reviews-featured]').forEach(function (grid) {
    var html = '';
    var keys = Object.keys(ENASTRON_REVIEWS);
    keys.forEach(function (key) {
      var listing = ENASTRON_REVIEWS[key];
      listing.items.forEach(function (review) {
        if (review.featured) {
          html += buildReviewCard(review, LISTING_NAMES[key]);
        }
      });
    });
    grid.innerHTML = html;
  });
})();
