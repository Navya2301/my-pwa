
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
menu.addEventListener('click', function() {
    //class has 4 methods , namely add(), remove(),replace, toggle()
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// This is handling the work__container div functionality 
$(document).ready(function() {
    $('.company__btn').on('click', function(e) {
        let $btn = $(e.target).closest('.company__btn').addClass('active');
        $btn.siblings().removeClass('active');
        
        let selector = $btn.data('target');
        $('.description').removeClass('active'); // Ensure all descriptions are not marked as active
        $(selector).addClass('active'); // Only mark the selected target as active
    });
});
