$(document).ready(function(){
    $(".nav-link").click(function(e){
        var linkHref = $(this).attr('href');  
        $('html, body').animate({scrollTop: $(linkHref).offset().top}, 400);     
        e.preventDefault();
    });
});
