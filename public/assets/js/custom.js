$("#loader").mousemove(function(e) {
    parallaxIt(e, ".petal-1", -70);
    parallaxIt(e, ".petal-2", 60);
    parallaxIt(e, ".petal-3", -30);
    parallaxIt(e, ".petal-4", 40);
    parallaxIt(e, ".petal-5", -20);
});

function parallaxIt(e, target, movement) {
    var $this = $("#loader");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
};

$("#slider-wrapper").mousemove(function(e) {
    parallaxIt2(e, ".movingImg", -70);
});

function parallaxIt2(e, target, movement) {
    var $this = $("#slider-wrapper");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
};


var loadingTl = new TimelineMax({repeat:-1, yoyo:true});
var tl = new TimelineMax({});




loadingTl.fromTo('#loader .content h1', 1, {y:3}, {y: -5, opacity: 1, ease: Power3.easeOut});

tl.to('#loader', 1, {
	// Loader Animation
	autoAlpha: 0,
	delay: 5,

	// Splash Screen Animation
	onComplete:function(){
		tl.to('#splash', 0, {y: "-100%"}, "-=1")
		  .to('#splash .content h3', .5, {opacity: 1, y: 0}, "+=.5")
		  .staggerTo('#splash .content h2 span', 1, {
		  	css:{
		  		marginLeft:0,
		  		opacity:1,
		  	},
		  }, 0.07)
		  .to('.circle-1', 1, {height: '100%', ease: Power3.easeOut}, "+=.2")
		  .to('.circle-2', .2, {height: '100%', ease: Power3.easeOut}, "-=.2")
		  .to('.circle-1', 1, {y: '-100%', ease: Power3.easeOut}, "-=.7")
		  .to('#splash .content h3', .2, {opacity: 0}, "-=.4")
		  .to('#splash .content h2', .2, {opacity: 0}, "-=.4")
		  .to('#splash', 1, {y: '-200%'}, "+=0")
		  .to('#splash', 0, {autoAlpha: 0})

		  // Slider Wrapper Animation
		  .to('#slider-wrapper', 0, {y: "-200%", height: "100vh"}, "-=2")
		  .to('#slider-wrapper', 2, {opacity: 1}, "-=.5")
		  loadingTl.fromTo('#slider-wrapper #slide-1 .movingImg', 25, {scale:.9}, {scale: 1.1}, "ease: Power2.easeInOut")
		  loadingTl.fromTo('#slider-wrapper #slide-2 .movingImg', 25, {scale:.9}, {scale: 1.1}, "ease: Power2.easeInOut", "+=5")
		  loadingTl.fromTo('#slider-wrapper #slide-3 .movingImg', 25, {scale:.9}, {scale: 1.2}, "ease: Power2.easeInOut")
		  loadingTl.fromTo('#slider-wrapper #slide-4 .movingImg', 25, {scale:.9}, {scale: 1.1}, "ease: Power2.easeInOut")

	}
});
$(document).ready(function() {
	if($('#slides').length){
			$('#slides').pagepiling({
				direction: 'horizontal',
				setAllowScrolling: true,
				sectionsColor: ['white', 'white', '#0a1143', 'white'],
				navigation: false,
		});
	}
});