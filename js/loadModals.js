


var pageLoads = 0;
var scriptLoads = 0;

function addSlick(modal_id, slider_class, slider_nav_class)
{
    $(modal_id).on('show.bs.modal', function (e) {
        //console.log('shown');

        $(slider_class).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            asNavFor: slider_nav_class,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });

        $(slider_nav_class).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: slider_class,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
        });

        $(slider_class).slick('slickNext');
        $(slider_nav_class).slick('slickNext');

    });
    $(modal_id).on('hide.bs.modal', function (e) {
        //console.log('hide');
        $(slider_class).slick('unslick');
        $(slider_nav_class).slick('unslick');

    });
}


/* Load Portfolio Modals*/
$(window).load(function(){

	var pageLoaded = function(){
		if (++pageLoads == 7){
			$.getScript("js/freelancer.js", scriptsLoaded);
			console.log("pageLoaded");
		}
	};

	var scriptsLoaded = function(){
		if (++scriptLoads == 1){
			// Animate loader off screen
			$(".se-pre-con").fadeOut("slow");;
			//$.getScript("js/carouselscripts.js", sayso);
			console.log("scriptsLoaded");
		}
	};

	var sayso = function(){
		console.log("sayso");
	};

	$("#pf1").load("OPERS.html", pageLoaded);

	$("#pf2").load("bitmesh.html", pageLoaded);

	$("#pf3").load("recreation.html", pageLoaded);

	$("#pf4").load("grapevine.html", pageLoaded);

	$("#pf5").load("orbix.html", pageLoaded);

	$("#pf6").load("art.html", pageLoaded);

	$("#pf7").load("3Drenders.html", pageLoaded);

	$("#pf8").load("brncm.html", pageLoaded);

	$("#pf9").load("vrappswitch.html", pageLoaded);



	
	
});

