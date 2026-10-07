// javascript Animate onscroll Start
    $(function () {
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (reduceMotion.matches) {
            return;
        }

        var mobileViewport = window.matchMedia('(max-width: 767px)');
        $('.banner-video').each(function () {
            var video = this;

            function loadVideo() {
                var videoSource = mobileViewport.matches
                    ? video.getAttribute('data-mobile-src')
                    : video.getAttribute('data-desktop-src');

                if (videoSource && video.getAttribute('src') !== videoSource) {
                    video.setAttribute('src', videoSource);
                    video.load();
                }
            }

            loadVideo();
            if (mobileViewport.addEventListener) {
                mobileViewport.addEventListener('change', loadVideo);
            } else {
                mobileViewport.addListener(loadVideo);
            }
        });
    });

    $(document).ready(function () {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    });

// javascript Top-Onscroll Start
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".banner").offset().top},"1000");return false})})

// javascript viewbox Start
$(function(){
	$('.thumbnail').viewbox();
});