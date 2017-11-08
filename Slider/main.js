$(document).ready(function(){
    let speed = 500,
        slideSwitch= true,
        autoSwitchSpeed=1000;
     //Add class 
     $('.slide').first().addClass('active');
    //Hide all Slides
     $('.slide').hide();
     //Show slide
     $('.active').show();
     $('#next').on('click', nextSlide);
     $('#prev').on('click',prevSlide);



    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
         $('.oldActive').removeClass('oldActive');
         $('.slide').fadeOut(speed);
         $('.active').fadeIn(speed);
    };
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
         $('.oldActive').removeClass('oldActive');
         $('.slide').fadeOut(speed);
         $('.active').fadeIn(speed);
    };

    //Auto Slider
    if(slideSwitch == true){
        setInterval(nextSlide,autoSwitchSpeed);
    }
});