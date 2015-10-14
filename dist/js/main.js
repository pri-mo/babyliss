jQuery(window).load(function($) {
  jQuery(function($) {

    // Set classes to cover images based on dimensions.
    $('.gc__cover-img').each(function() {
      var height = $(this).height();
      var width = $(this).width();
      var ratio = height / width;

      if (ratio >= 0.9 && ratio <= 1.1) {
        $(this).addClass('gc__cover-img--sqr');
      } else if (width > height) {
        $(this).addClass('gc__cover-img--wide');
      } else {
        $(this).addClass('gc__cover-img--tall');
      }
    });

    // Set classes to product images based on dimensions.
    $('.gc__product-image').each(function() {
      var height = $(this).height();
      var width = $(this).width();
      var ratio = height / width;

      if (ratio >= 0.9 && ratio <= 1.1) {
        $(this).addClass('gc__product-img--sqr');
      } else if (width > height) {
        $(this).addClass('gc__product-img--wide');
      } else {
        $(this).addClass('gc__product-img--tall');
      }
    });

    // Put icons and interactions to nested menu items.
    $('.nav__link.nav__link--exp').each(function() {
      $(this).append('<i></i>');
    }).click(function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('nav__section--opened');
    });

    $('#mobileTrigger').click(function(event) {
      event.preventDefault();
      $('body').toggleClass('nav--opened');
    });

    // Prevent transitions on load.
    $('body').removeClass('preload');

    // Older browser placeholder fallback init.
    $('input, textarea').placeholder();

    // Media Query Specific code
    // Event handler
    if (matchMedia) {
      var mq = window.matchMedia('(min-width: 768px)');
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    // Media query change
    function WidthChange(mq) {
      if (mq.matches) {
        // Window width is at least 768px
        $('body').addClass('desktop');
        $('body').removeClass('mobile');

        // Toggle nav class on scrolling
        var docBody = $('body');
        var scroll = $(window).scrollTop();

        if (!docBody.hasClass('page__news, sg')) {

          $(window).scroll(function() {
            scroll = $(window).scrollTop();
            if (scroll >= 400) {
              docBody.addClass('nav--on-scroll');
            } else {
              docBody.removeClass('nav--on-scroll');
            }
          });

          if (scroll >= 400) {
            docBody.addClass('nav--on-scroll');
          } else {
            docBody.removeClass('nav--on-scroll');
          }

        }

      } else {
        // Window width is less than 768px
        $('body').addClass('mobile');
        $('body').removeClass('desktop');
      }
    }

    WidthChange(mq);

    // -----------------------------------------------------------------------------
    // Typeahead Init
    // -----------------------------------------------------------------------------
    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches;
        var substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',];

    $('.layout__page-content .search-form .input').typeahead({
      hint: true,
      highlight: true,
      minLength: 1,
      classNames: {
        input: 'tt-input',
        hint: 'tt-hint',
        selectable: 'tt-selectable',
      },
    },
    {
      name: 'states',
      source: substringMatcher(states),
    });

    // Isotope Gallery init
    var isoGrid = $('.gc__article-gallery');
    if (isoGrid.length > 0) {
      isoGrid.isotope();

      $(window).resize(function() {
        isoGrid.isotope();
      });
    }
  });
});
