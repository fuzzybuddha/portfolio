


$(document).ready(function(){

    /*!
     * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
     */

    $("#lkdn-btn").hover(
        function () {
            $("#lkdn").toggleClass("hidden");
            $("#spcr").toggleClass("hidden");
        },
        function () {
            $("#lkdn").toggleClass("hidden");
            $("#spcr").toggleClass("hidden");
        }
    );
    $("#gthb-btn").hover(
        function () {
            $("#gthb").toggleClass("hidden");
            $("#spcr").toggleClass("hidden");
        },
        function () {
            $("#gthb").toggleClass("hidden");
            $("#spcr").toggleClass("hidden");
        }
    );
    $("#fb-btn").hover(
        function () {
            $("#fb").toggleClass("hidden");
            $("#spcr").toggleClass("hidden");
        },
        function () {
            $("#fb").toggleClass("hidden");
            $("#spcr").toggleClass("hidden");
        }
    );

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('body').on('click', '.page-scroll a', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


/*
    $('#OPERSbooklet').hide();
    $('#hide_booklet').hide();
    $(function() {
        // run the currently selected effect
        function toggleBooklet() {
            // get effect type from
            var selectedEffect = $( "clip" ).val();

            // most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if ( selectedEffect === "scale" ) {
                options = { percent: 0 };
            } else if ( selectedEffect === "size" ) {
                options = { to: { width: 200, height: 60 } };
            }

            // run the effect
            $( "#OPERSbooklet" ).toggle( "blind", options, 1500 );
            
        };

        // set effect from select menu value
        $( "#show_booklet, #hide_booklet" ).click(function() {
            
            toggleBooklet();
            $( "#show_booklet" ).toggle();
            $( "#hide_booklet" ).toggle();
            $( "#scroll" ).scroll();
            
        });

    });
*/



});

