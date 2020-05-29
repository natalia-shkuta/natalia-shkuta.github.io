$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:3.1,
        infinite:false,
        touchMove:true,
        touchThreshold:30,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                   slidesToShow:2 
                }
            },
            {
                breakpoint: 769,
                settings: {
                   slidesToShow:1.4 
                }
            },
             {
                breakpoint: 668,
                settings: {
                   slidesToShow:2 
                }
            },
            {
                breakpoint: 376,
                settings: {
                   slidesToShow:1.1 
                }
            }
        ],
    });
});