$(function() {

	// Custom JS
        //slick-slider
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            appendDots: $('.goods_descr'),
        });
        //fix navbar
        function fixNavbar() {
            var $fix = $('#fixed');
            if ($(window).scrollTop() > 60)
              $fix.css({
                'position': 'fixed',
                'top': '0px',
                'width': '100%',
                'height': 'inherit',
                'z-index': '50'
              });
            else
              $fix.css({
                'position': 'relative',
              });
          }
          $(window).scroll(fixNavbar);
          fixNavbar();
});
