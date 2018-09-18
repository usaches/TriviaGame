var questions = [{
    q: "In which year were the Green Bay Packers Founded?",
    c: ["1919", "1929", "1939", "1949"],
    a: 0
}, {
    q: "Which Packers player is affectionately known as 'The Golden Boy'?",
    c: ["Paul Hornung", "Brett Favre", "Aaron Rodgers", "Brandon Chillar"],
    a: 0
}, {
    q: "How many NFL Championships were won by Packers Legend Bart Starr?",
    c: ["1", "2", "4", "5"],
    a: 3
}, {
    q: "Which Green Bay Packer has the Widest Smile?",
    c: ["Donald Driver", "Brandon Chillar", "Sterling Sharpe", "Randall Cobb"],
    a: 0
}, {
    q: "Which NFL Team did the Green Bay Packers defeat in Super Bowl XXXI?",
    c: ["Steelers", "Broncos", "Patriots", "Browns"],
    a: 1
}, {
    q: "Who was the only Packers Player to record a sack in Super Bowl XLV?",
    c: ["Clay Matthews", "AJ Hawk", "Frank Zombo", "Mike Daniels"],
    a: 2
}];

$('.btn-group-vertical').hide();



var correct1 = 0;
var correct2 = 0;
var correct3 = 0;
var correct4 = 0;
var correct5 = 0;
var correct6 = 0;
var incorrect = 0;
$('#start').on("click", function () {
    $("#start").hide();
    question1();
    timeLeft = 30;
    console.log("started");
    $('.btn-group-vertical').show();
    $('.vertical2').hide();
    $('.vertical3').hide();
    $('.vertical4').hide();
    $('.vertical5').hide();
    $('.vertical6').hide();
    correct1 = 0;
    correct2 = 0;
    correct3 = 0;
    correct4 = 0;
    correct5 = 0;
    correct6 = 0;
    incorrect = 0;

});

// function reset() {
//
//     for (var i = 0; i < questions.length; i++) {
//         console.log(questions[i].q);
//         $("#question").text(questions[i].q);
//         var choices = [];
//         for (var j = 0; j < 4; j++) {
//             choices.text(questions[i].c[j]);
//             choices.addClass("choice");
//             $("#answers").append(choices);
//         }
//     }
// }

function question1() {
    $("#message").empty();
    var timeLeft = 30;
    var intervalId = setInterval(function () {


        timeLeft--;
        $("#countdown").text("Time Left: " + timeLeft);
        if (timeLeft < 1) {
            clearInterval(intervalId);
            question2();


        }
    }, 1000);
    $('.vertical2').hide();
    $('.vertical3').hide();
    $('.vertical4').hide();
    $('.vertical5').hide();
    $('.vertical6').hide();
    $("#question").text(questions[0].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[0].c[0]);
    $("#answer2").text(questions[0].c[1]);
    $("#answer3").text(questions[0].c[2]);
    $("#answer4").text(questions[0].c[3]);
    $("#answer1").on("click", function () {
        console.log("1919 clicked");
        $("#message").text("Yes! Good Job");
        correct1 = 1;
        clearInterval(intervalId);

        //timer here
        setTimeout(function () {
            question2();


        }, 1800);
        // var countdown = 3;
        // countdown --;
        // $("#countdown").text(countdown)

        // question2();

    });
    $("#answer2").on("click", function () {
        console.log("1929 clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question2()
        }, 1800);
        clearInterval(intervalId);
        // question2();

    });
    $("#answer3").on("click", function () {
        console.log("1939 clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question2()
        }, 1800);
        clearInterval(intervalId);
        // question2();

    });
    $("#answer4").on("click", function () {
        console.log("1949 clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question2()
        }, 1800);
        clearInterval(intervalId);
        // question2();

    });


}

function question2() {
    var timeLeft = 30;

    var intervalId = setInterval(function () {

        timeLeft--;
        $("#countdown").text("Time Left: " + timeLeft);
        if (timeLeft < 1) {
            clearInterval(intervalId);
            question3();

        }
    }, 1000);
    $('.vertical1').hide();
    $('.vertical2').show();
    $('.vertical3').hide();
    $('.vertical4').hide();
    $('.vertical5').hide();
    $('.vertical6').hide();
    $("#message").empty();
    $("#question").text(questions[1].q);
    // choices.text(questions[0].c[j]);

    $("#answer11").text(questions[1].c[0]);
    $("#answer21").text(questions[1].c[1]);
    $("#answer31").text(questions[1].c[2]);
    $("#answer41").text(questions[1].c[3]);
    $("#answer11").on("click", function () {
        console.log("a clicked");
        $("#message").text("Yes! Good Job");
        correct2 = 1;
        //timer here
        setTimeout(function () {
            question3();

        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer21").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question3()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer31").on("click", function () {
        console.log("c clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question3()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer41").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question3()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });

}

function question3() {
    var timeLeft = 30;
    $("#message").empty();
    var intervalId = setInterval(function () {

        timeLeft--;
        $("#countdown").text("Time Left: " + timeLeft);
        if (timeLeft < 1) {
            clearInterval(intervalId);
            question4();

        }
    }, 1000);
    $("#question").text(questions[2].q);
    $('.vertical1').hide();
    $('.vertical2').hide();
    $('.vertical3').show();
    $('.vertical4').hide();
    $('.vertical5').hide();
    $('.vertical6').hide();
    // choices.text(questions[0].c[j]);
    $("#answer111").text(questions[2].c[0]);
    $("#answer211").text(questions[2].c[1]);
    $("#answer311").text(questions[2].c[2]);
    $("#answer411").text(questions[2].c[3]);
    $("#answer111").on("click", function () {
        console.log("a clicked");
        $("#message").text("No! You are wrong! :(            The right answer was D");
        //timer here
        setTimeout(function () {
            question4()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });
    $("#answer211").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(            The right answer was D");
        //timer here
        setTimeout(function () {
            question4()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });
    $("#answer311").on("click", function () {
        console.log("c clicked");
        $("#message").text("No! You are wrong! :(            The right answer was D");
        //timer here
        setTimeout(function () {
            question4()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });
    $("#answer411").on("click", function () {
        console.log("d clicked");
        $("#message").text("Yes! Good Job");
        correct3 = 1;
        //timer here
        setTimeout(function () {
            question4()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });


}

function question4() {
    var timeLeft = 30;
    $('.vertical1').hide();
    $('.vertical2').hide();
    $('.vertical4').show();
    $('.vertical3').hide();
    $('.vertical5').hide();
    $('.vertical6').hide();
    $("#message").empty();
    var intervalId = setInterval(function () {

        timeLeft--;
        $("#countdown").text("Time Left: " + timeLeft);
        if (timeLeft < 1) {
            clearInterval(intervalId);
            question5();

        }
    }, 1000);
    $("#question").text(questions[3].q);
    // choices.text(questions[0].c[j]);
    $("#answer141").text(questions[3].c[0]);
    $("#answer241").text(questions[3].c[1]);
    $("#answer341").text(questions[3].c[2]);
    $("#answer441").text(questions[3].c[3]);
    $("#answer141").on("click", function () {
        console.log("a clicked");
        $("#message").text("Yes! Good Job");
        correct4 = 1;
        //timer here
        setTimeout(function () {
            question5()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer241").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question5()
        }, 1800);
        clearInterval(intervalId);

        // question3();

    });
    $("#answer341").on("click", function () {
        console.log("c clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question5()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer441").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(            The right answer was A");
        //timer here
        setTimeout(function () {
            question5()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });


}

function question5() {
    var timeLeft = 30;
    var intervalId = setInterval(function () {

        timeLeft--;
        $("#countdown").text("Time Left: " + timeLeft);
        if (timeLeft < 1) {
            clearInterval(intervalId);
            question6();

        }
    }, 1000);
    $("#message").empty();
    $('.vertical1').hide();
    $('.vertical2').hide();
    $('.vertical5').show();
    $('.vertical4').hide();
    $('.vertical3').hide();
    $('.vertical6').hide();
    $("#question").text(questions[4].q);
    // choices.text(questions[0].c[j]);
    $("#answer151").text(questions[4].c[0]);
    $("#answer251").text(questions[4].c[1]);
    $("#answer351").text(questions[4].c[2]);
    $("#answer451").text(questions[4].c[3]);
    $("#answer151").on("click", function () {
        console.log("a clicked");
        $("#message").text("No! You are wrong! :(            The right answer was C");
        //timer here
        setTimeout(function () {
            question6()
        }, 1800);
        clearInterval(intervalId);

        // question3();

    });
    $("#answer251").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(            The right answer was C");
        //timer here
        setTimeout(function () {
            question6()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer351").on("click", function () {
        console.log("c clicked");
        $("#message").text("Yes! Good Job");
        correct5 = 1;
        //timer here
        setTimeout(function () {
            question6()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer451").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(            The right answer was C");
        //timer here
        setTimeout(function () {
            question6()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });

}

function question6() {
    var timeLeft = 30;
    $('.vertical1').hide();
    $('.vertical2').hide();
    $('.vertical6').show();
    $('.vertical4').hide();
    $('.vertical5').hide();
    $('.vertical3').hide();
    $("#message").empty();
    var intervalId = setInterval(function () {

        timeLeft--;
        $("#countdown").text("Time Left: " + timeLeft);
        if (timeLeft < 1) {
            clearInterval(intervalId);
            finishedScreen();

        }
    }, 1000);
    $("#question").text(questions[5].q);
    // choices.text(questions[0].c[j]);
    $("#answer116").text(questions[5].c[0]);
    $("#answer216").text(questions[5].c[1]);
    $("#answer316").text(questions[5].c[2]);
    $("#answer416").text(questions[5].c[3]);
    $("#answer116").on("click", function () {
        console.log("a clicked");
        $("#message").text("No! You are wrong! :(            The right answer was C");
        //timer here
        setTimeout(function () {
            finishedScreen()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer216").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(            The right answer was C");
        //timer here
        setTimeout(function () {
            finishedScreen()
        }, 1800);
        clearInterval(intervalId);
        // question3();

    });
    $("#answer316").on("click", function () {
        console.log("c clicked");
        $("#message").text("Yes! Good Job");
        correct6 = 1;
        setTimeout(function () {
            finishedScreen()
        }, 1800);
        clearInterval(intervalId);
        //timer here
        // question3();

    });
    $("#answer416").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(            The right answer was C");
        //timer here
        setTimeout(function () {
            finishedScreen()
        }, 1800);
        clearInterval(intervalId);
        // question4();

    });

    function finishedScreen() {
        $("#start").show();
        clearInterval(intervalId);
        $("#message").text("Do you dare try again?");


        $('.vertical6').hide();
        var correct = correct1 + correct2 + correct3 + correct4 + correct5 + correct6;
        incorrect = 6 - correct;
        $("#question").text("Number Correct: " + correct + "                 Number Incorrect: " + incorrect);

    }
}