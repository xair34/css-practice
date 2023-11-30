$(document).ready(function(){
    const nav = $('#menuItemContainer');
    const navToggle = $('.mobileNavToggle');
    $(navToggle).on('click', function(){
        const isVisible = $(nav).attr('data-visible');
        if(isVisible == "false" || !isVisible){
            $(nav).attr('data-visible','true');
            $(navToggle).attr('aria-expanded', 'true');
        }
        else{
            $(nav).attr('data-visible','false');
            $(navToggle.attr('aria-expanded', 'false'));
        }
    })
})