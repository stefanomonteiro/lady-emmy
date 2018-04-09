$( document ).ready(function() {
   $('div.social-hover').on( "click", function() {
        $('social-hover').addClass('hide');
    });

//FOOTER SOCIAL MEDIA MOUSE OVER
//TWITTER
    $( "#twitter-footer" ).mouseover(function(){
        $(this).attr("src", "img/socialicons/twittergoldhover.png");
    });
    $( "#twitter-footer" ).mouseout(function(){
        $(this).attr("src", "img/socialicons/twittergold.png");
    });
//FACEBOOK
    $( "#facebook-footer" ).mouseover(function(){
        $(this).attr("src", "img/socialicons/facebookgoldhover.png");
    });
    $( "#facebook-footer" ).mouseout(function(){
        $(this).attr("src", "img/socialicons/facebookgold.png");
    });
//INSTAGRAM
    $( "#instagram-footer" ).mouseover(function(){
        $(this).attr("src", "img/socialicons/instagramgoldhover.png");
    });
    $( "#instagram-footer" ).mouseout(function(){
        $(this).attr("src", "img/socialicons/instagramgold.png");
    });
//PINTEREST
    $( "#pinterest-footer" ).mouseover(function(){
        $(this).attr("src", "img/socialicons/pinterestgoldhover.png");
    });
    $( "#pinterest-footer" ).mouseout(function(){
        $(this).attr("src", "img/socialicons/pinterestgold.png");
    });
//EMAIL
    $( "#mail-footer" ).mouseover(function(){
        $(this).attr("src", "img/socialicons/mailgoldhover.png");
    });
    $( "#mail-footer" ).mouseout(function(){
        $(this).attr("src", "img/socialicons/mailgold.png");
    });
});

//// END JQUERY ////


var slider = new MasterSlider();
slider.setup('masterslider' , {
        width:800,    // slider standard width
        height:350,   // slider standard height
        space:5,
        loop: true,
        fullwidth: true,
        autoplay: true,
        view:"parallaxMask"
        // more slider options goes here...
        // check slider options section in documentation for more options.
    });
// adds Arrows navigation control to the slider.
slider.control('arrows');
slider.control('bullets' , {
        autohide:false,
        dir:"h",
        align:"bottom",
    });

//slider.control('circletimer' , {
//        color:"#FFDD00" ,
//        stroke:20
//    });



/*
//Social Media Hover Image Change
var socialImage = document.getElementById('social-nohover');
var socialImageRollover = document.getElementById('social-hover');
socialImage.addEventListener('mouseover', function () {
    socialImage.className = 'hide';
    socialImageRollover.className = 'show';
});
socialImageRollover.addEventListener('mouseleave', function () {
    socialImageRollover.className = 'hide';
    socialImage.className = 'show';
});

var socialImage1 = document.getElementById('social-nohover1');
var socialImageRollover1 = document.getElementById('social-hover1');
socialImage1.addEventListener('mouseover', function () {
    socialImage1.className = 'hide';
    socialImageRollover1.className = 'show';
});
socialImageRollover1.addEventListener('mouseleave', function () {
    socialImageRollover1.className = 'hide';
    socialImage1.className = 'show';
});

var socialImage2 = document.getElementById('social-nohover2');
var socialImageRollover2 = document.getElementById('social-hover2');
socialImage2.addEventListener('mouseover', function () {
    socialImage2.className = 'hide';
    socialImageRollover2.className = 'show';
});
socialImageRollover2.addEventListener('mouseleave', function () {
    socialImageRollover2.className = 'hide';
    socialImage2.className = 'show';
});

var socialImage3 = document.getElementById('social-nohover3');
var socialImageRollover3 = document.getElementById('social-hover3');
socialImage3.addEventListener('mouseover', function () {
    socialImage3.className = 'hide';
    socialImageRollover3.className = 'show';
});
socialImageRollover3.addEventListener('mouseleave', function () {
    socialImageRollover3.className = 'hide';
    socialImage3.className = 'show';
});

var socialImage4 = document.getElementById('social-nohover4');
var socialImageRollover4 = document.getElementById('social-hover4');
socialImage3.addEventListener('mouseover', function () {
    socialImage4.className = 'hide';
    socialImageRollover4.className = 'show';
});
socialImageRollover4.addEventListener('mouseleave', function () {
    socialImageRollover4.className = 'hide';
    socialImage4.className = 'show';
});*/
