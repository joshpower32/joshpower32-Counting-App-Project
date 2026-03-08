$(document).ready(function(){
    let count = 0;
    let goal = null;

    function checkGoal() {
        if (goal !== null && count === goal) {
            $('h2').text(`🎯 Goal Reached! You Hit ${goal}`);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
        });
        }
    }

    $('.subtraction').on('click', () => {
        count--;
        $('.count_label').text(count);
        checkGoal();
    });

    $('.clear').on('click', () => {
        count = 0;
        $('.count_label').text(count);
    });

    $('.addition').on('click', () => {
        count++;
        $('.count_label').text(count);
        checkGoal();
    });

    $('.submit').on('click', () => {
        goal = parseInt($('.goal').val(), 10);
        $('h2').text(`Your Goal Is ${goal}`);
        checkGoal();
    });
});
    
