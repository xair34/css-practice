$(function(){
    let ruleSheetElement = $('.container-rules');
    let overlayElement = $('.overlay');
    $('.button-rules').on('click',function(){
        if(!ruleSheetElement.hasClass('visible-rules')){
            ruleSheetElement.addClass('visible-rules');
            overlayElement.addClass('overlay-visible')
        }
        else{
            overlayElement.removeClass('overlay-visible');
            ruleSheetElement.removeClass('visible-rules');
        }
    })
    $('.close-rule-sheet').on('click', function(){
        ruleSheetElement.removeClass('visible-rules');
        overlayElement.removeClass('overlay-visible');
    })
    $('.play-option').on('click', function(){
        $('.play-option').removeClass('selected');
        $(this).addClass('selected')
    })
})