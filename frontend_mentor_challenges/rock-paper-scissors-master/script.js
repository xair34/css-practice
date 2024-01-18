$(function(){
    let ruleSheetElement = $('.container-rules');
    let overlayElement = $('.overlay');
    let choiceArray = ['rock','paper','scissors'];
    let imgArray = ['./images/icon-rock.svg','./images/icon-paper.svg','./images/icon-scissors.svg'];
    if(localStorage.getItem('Score') === null){
        localStorage.setItem('Score', 0);
    }
    else{
        $('.score-counter').text(localStorage.getItem('Score'))
    }

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
    $('.step-one .play-option').on('click', function(){
        $('.play-option').removeClass('selected');
        $(this).addClass('selected');
        $('.step-one').addClass('hide');
        $('.step-two').addClass('show');
        $(".step-two").removeClass('hide');
        $(".game-container").addClass('on');
        $(".on").one("animationend webkitAnimationEnd oAnimationEn MSAnimationEnd", function(){
            $(this).removeClass('on');
        });
        let classList = $(this).attr('class').split(/\s+/);
        let imgSrc = $(this).children().eq(0).attr('src');
        let randomNumber = getRandomChoice(choiceArray);
        let comptuerChoice = choiceArray[randomNumber];
        let computerImageSrc = imgArray[randomNumber];
        let playerChoiceClasses = $('.player-choice>div').attr('class').split(/\s+/);
        let computerChoiceClasses = $('.computer-choice>div').attr('class').split(/\s+/);
        if(playerChoiceClasses.length > 1){
            $('.player-choice>div').removeClass(playerChoiceClasses[1]);
        }
        if(computerChoiceClasses.length > 1){
            $('.computer-choice>div').removeClass(computerChoiceClasses[1]);
        }
        $('.player-choice>div').addClass(classList[0]);
        $('.player-choice>div>img').attr('src', imgSrc);

        $('.computer-choice>div').addClass(comptuerChoice);
        $('.computer-choice>div>img').attr('src', computerImageSrc);
        if(determineWinner() == 'player'){
            $('.computer-choice').removeClass('winner');
            $('.player-choice').addClass('winner');
            $('.win-lose-text').text('You win');
            updateScore(1);
        }
        else if(determineWinner() == 'computer'){
            $('.computer-choice').addClass('winner');
            $('.player-choice').removeClass('winner');
            $('.win-lose-text').text('You Lose');
            updateScore(-1);
        }
        else{
            $('.computer-choice').removeClass('winner');
            $('.player-choice').removeClass('winner');
            $('.win-lose-text').text('Game is a tie');
            updateScore(0);
        }
    })
    $('.play-again-btn').on('click', function(){
        $('.step-one').removeClass('hide');
        $('.step-two').removeClass('show')
        $('.step-two').addClass('hide');
        $(".game-container").addClass('on');
        $(".on").one("animationend webkitAnimationEnd oAnimationEn MSAnimationEnd", function(){
            $(this).removeClass('on');
        });

    })
    function getRandomChoice(array){
        let randomN = Math.floor(Math.random() * array.length);
        return randomN;
    }
    function updateScore(number){
        let currentScore = localStorage.getItem('Score');
        let newScoreCalc = Number(currentScore) + number;

        if(newScoreCalc < 0){
            localStorage.setItem('Score', 0);

        }
        else{
        localStorage.setItem('Score', Number(currentScore) + number);

        }

        let newScore = localStorage.getItem('Score'); 
        $('.score-counter').text(newScore)
    }
    function determineWinner(){
        let playerChoice = $('.player-choice>div').attr('class').split(/\s+/)[1];
        let computerChoice = $('.computer-choice>div').attr('class').split(/\s+/)[1];
        let winner = "";
        if(playerChoice == 'paper'){
            if(computerChoice == 'scissors'){
                winner = 'computer';
            }
            else if(computerChoice == 'rock'){
                winner = 'player';
            }
            else{
                winner = 'tie';
            }
        }
        else if(playerChoice == 'rock'){
            if(computerChoice == 'scissors'){
                winner = 'player';
            }
            else if(computerChoice == 'paper'){
                winner = 'computer';
            }
            else{
                winner = 'tie';
            }
        }
        else{
            if(computerChoice == 'paper'){
                winner = 'player';
            }
            else if(computerChoice == 'rock'){
                winner = 'computer';
            }
            else{
                winner = 'tie';
            }
        }
        return winner;
    }
})