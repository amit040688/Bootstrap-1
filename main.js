
$('.slide').owlCarousel({
     margin:50,
     autoplay:true,
     autoplayTime:300,
    loop:true,
    responsive:{
       0:{
           items:1,
           nav:false,
       },
       600:{
        items:1,
        nav:false,
    },
    1000:{
        items:1,
        nav:false,
    },
    
    }
    
    });

    $(document).ready(function() {
     // toggle menu/navbar script
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});
