$(function () {
    
    $(function() {
        $('.burger').click(function(){
            $(this).toggleClass('open');
        });
    });

    $(".header a").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

$('.burger, .overlay, .header a, .logoimg').on('click', function (e) {
    e.preventDefault()
    $('.header').toggleClass('header--open')
    $('.overlay').toggleClass('overlay--show')
})

})