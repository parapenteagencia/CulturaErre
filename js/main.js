$(function() {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        video: true
    });
});

$(function() {
    $('.bxslider-miscelanea').bxSlider({
        mode: 'fade',
        pager: false,
        controls: false,
        auto: true
    });
});


AOS.init();


jQuery(document).ready(function($) {

    "use strict";

    $(window).load(function() {
        $(".loader").delay(1000).fadeOut("slow");
        $("#overlayer").delay(1000).fadeOut("slow");
    });


    var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function() {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function() {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function(e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function() {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function(e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();


    var sitePlusMinus = function() {
        $('.js-btn-minus').on('click', function(e) {
            e.preventDefault();
            if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
            } else {
                $(this).closest('.input-group').find('.form-control').val(parseInt(0));
            }
        });
        $('.js-btn-plus').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
        });
    };
    // sitePlusMinus();


    var siteCarousel = function() {
        if ($('.nonloop-block-13').length > 0) {
            $('.nonloop-block-13').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 10,
                autoplay: true,
                margin: 20,
                nav: true,
                smartSpeed: 1000,
                dots: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 20,
                        stagePadding: 10,
                        items: 1
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 10,
                        items: 2
                    },
                    1200: {
                        margin: 20,
                        stagePadding: 10,
                        items: 3
                    }
                }
            });
        }



        if ($('.nonloop-block-14').length > 0) {
            $('.nonloop-block-14').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                autoplay: true,
                margin: 20,
                smartSpeed: 900,
                nav: true,
                dots: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 20,
                        stagePadding: 0,
                        items: 1
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        items: 1
                    }

                }
            });
        }

        if ($('.nonloop-block-15').length > 0) {
            $('.nonloop-block-15').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                autoplay: true,
                margin: 20,

                nav: true,
                dots: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 20,
                        stagePadding: 0,
                        items: 1,
                        nav: false,
                        dots: true
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        items: 2,
                        nav: true,
                        dots: true
                    },
                    1200: {
                        margin: 20,
                        stagePadding: 0,
                        items: 3,
                        nav: true,
                        dots: true
                    }
                }
            });
        }

        if ($('.slide-one-item').length > 0) {
            $('.slide-one-item').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                smartSpeed: 1000,
                margin: 0,
                autoplay: true,
                pauseOnHover: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
            });
        }
    };
    siteCarousel();

    var siteStellar = function() {
        $(window).stellar({
            responsive: false,
            parallaxBackgrounds: true,
            parallaxElements: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            scrollProperty: 'scroll'
        });
    };
    siteStellar();

    var siteCountDown = function() {

        if ($('#date-countdown').length > 0) {
            $('#date-countdown').countdown('2020/10/10', function(event) {
                var $this = $(this).html(event.strftime('' +
                    '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
                    '<span class="countdown-block"><span class="label">%d</span> days </span>' +
                    '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
                    '<span class="countdown-block"><span class="label">%M</span> min </span>' +
                    '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
            });
        }

    };
    siteCountDown();

    var siteDatePicker = function() {

        if ($('.datepicker').length > 0) {
            $('.datepicker').datepicker();
        }

    };
    siteDatePicker();


    var windowScrolled = function() {


        $(window).scroll(function() {

            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.js-site-navbar');

            if (st > 100) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }

        })

    }
    windowScrolled();

    var toolTipInit = function() {
        $('[data-toggle="tooltip"]').tooltip()
    };
    toolTipInit();


    var counter = function() {

        $('.section-counter').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function() {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });

            }

        }, { offset: '95%' });

    }
    counter();

});

/* Layer Slider */
$(document).ready(function() {

    $("#slider").on('sliderDidLoad', function(event, slider) {

        jQuery(this).on('click', '[data-share]', function(e) {

            var url = jQuery(this).data('share');
            url += url.indexOf('facebook.com/') !== -1 ? '&p[url]=' : '&url=';
            url += encodeURI(location.href);

            window.open(url, 'ls-share', 'width=500,height=500');
        });

    });


    $('#slider').layerSlider({
        sliderVersion: '6.6.4',
        type: 'popup',
        skin: 'noskin',
        globalBGSize: 'cover',
        navPrevNext: false,
        hoverPrevNext: false,
        navStartStop: false,
        navButtons: false,
        showCircleTimer: false,
        popupShowOnTimeout: 1,
        popupShowOnce: false,
        popupDisableOverlay: true,
        popupShowCloseButton: false,
        popupOverlayClickToClose: false,
        popupStartSliderImmediately: true,
        popupPositionHorizontal: 'left',
        popupDistanceLeft: 0,
        popupDistanceRight: 0,
        popupDistanceTop: 0,
        popupDistanceBottom: 0,
        popupDelayIn: 0,
        popupTransitionIn: 'slidefromleft',
        popupTransitionOut: 'slidetoleft',
        skinsPath: 'skins/',
        plugins: ["popup"]
    });

    $('#slider-inicio').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullwidth',
        responsiveUnder: 1280,
        layersContainer: 1280,
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        thumbnailNavigation: 'disabled',
        skinsPath: 'skins/'
    });

    $('#slider-tour').layerSlider({
        sliderVersion: '6.5.0b2',
        type: 'fullwidth',
        pauseOnHover: 'disabled',
        skin: 'photogallery',
        globalBGSize: 'cover',
        navStartStop: false,
        hoverBottomNav: true,
        showCircleTimer: false,
        thumbnailNavigation: 'always',
        tnContainerWidth: '100%',
        tnHeight: 70,
        popupShowOnTimeout: 1,
        popupShowOnce: false,
        popupCloseButtonStyle: 'background: rgba(0,0,0,.5); border-radius: 2px; border: 0; left: auto; right: 10px;',
        popupResetOnClose: 'disabled',
        popupDistanceLeft: 20,
        popupDistanceRight: 20,
        popupDistanceTop: 20,
        popupDistanceBottom: 20,
        popupDurationIn: 750,
        popupDelayIn: 500,
        popupTransitionIn: 'scalefromtop',
        popupTransitionOut: 'scaletobottom',
        skinsPath: 'skins/',
    });
});
/* /Layer Slider */