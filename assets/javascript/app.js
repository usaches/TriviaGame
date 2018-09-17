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



$('#start').on("click", function () {
    $("#start").hide();
    question1();
    console.log("started");
    $('.btn-group-vertical').show();
});

function reset() {

    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i].q);
        $("#question").text(questions[i].q);
        var choices = [];
        for (var j = 0; j < 4; j++) {
            choices.text(questions[i].c[j]);
            choices.addClass("choice");
            $("#answers").append(choices);
        }
    }
}

function question1() {
    $("#question").text(questions[0].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[0].c[0]);
    $("#answer2").text(questions[0].c[1]);
    $("#answer3").text(questions[0].c[2]);
    $("#answer4").text(questions[0].c[3]);
    $("#answer1").on("click", function () {
        console.log("1919 clicked");
        $("#message").text("Yes! Good Job");
        //timer here
        setTimeout(function(){
            question2()
        }, 3000);
        // var countdown = 3;
        // countdown --;
        // $("#countdown").text(countdown)

        // question2();

    });
    $("#answer2").on("click", function () {
        console.log("1929 clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question2()
        }, 3000);
        // question2();

    });
    $("#answer3").on("click", function () {
        console.log("1939 clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question2()
        }, 3000);
        // question2();

    });
    $("#answer4").on("click", function () {
        console.log("1949 clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question2()
        }, 3000);
        // question2();

    });
}

function question2() {
    $("#message").empty();
    $("#question").text(questions[1].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[1].c[0]);
    $("#answer2").text(questions[1].c[1]);
    $("#answer3").text(questions[1].c[2]);
    $("#answer4").text(questions[1].c[3]);
    $("#answer1").on("click", function () {
        console.log("a clicked");
        $("#message").text("Yes! Good Job");
        //timer here
        setTimeout(function(){
            question3()
        }, 3000);
        // question3();

    });
    $("#answer2").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question3()
        }, 3000);
        // question3();

    });
    $("#answer3").on("click", function () {
        console.log("c clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question3()
        }, 3000);
        // question3();

    });
    $("#answer4").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question3()
        }, 3000);
        // question3();

    });

}

function question3() {
    $("#message").empty();
    $("#question").text(questions[2].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[2].c[0]);
    $("#answer2").text(questions[2].c[1]);
    $("#answer3").text(questions[2].c[2]);
    $("#answer4").text(questions[2].c[3]);
    $("#answer1").on("click", function () {
        console.log("a clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question4()
        }, 3000);
        // question4();

    });
    $("#answer2").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question4()
        }, 3000);
        // question4();

    });
    $("#answer3").on("click", function () {
        console.log("c clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question4()
        }, 3000);
        // question4();

    });
    $("#answer4").on("click", function () {
        console.log("d clicked");
        $("#message").text("Yes! Good Job");
        //timer here
        setTimeout(function(){
            question4()
        }, 3000);
        // question4();

    });


}
function question4() {
    $("#message").empty();
    $("#question").text(questions[3].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[3].c[0]);
    $("#answer2").text(questions[3].c[1]);
    $("#answer3").text(questions[3].c[2]);
    $("#answer4").text(questions[3].c[3]);
    $("#answer1").on("click", function () {
        console.log("a clicked");
        $("#message").text("Yes! Good Job");
        //timer here
        setTimeout(function(){
            question5()
        }, 3000);
        // question3();

    });
    $("#answer2").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question5()
        }, 3000);

        // question3();

    });
    $("#answer3").on("click", function () {
        console.log("c clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question5()
        }, 3000);
        // question3();

    });
    $("#answer4").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question5()
        }, 3000);
        // question4();

    });


}
function question5() {
    $("#message").empty();
    $("#question").text(questions[4].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[4].c[0]);
    $("#answer2").text(questions[4].c[1]);
    $("#answer3").text(questions[4].c[2]);
    $("#answer4").text(questions[4].c[3]);
    $("#answer1").on("click", function () {
        console.log("a clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question6()
        }, 3000);
        // question3();

    });
    $("#answer2").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question6()
        }, 3000);
        // question3();

    });
    $("#answer3").on("click", function () {
        console.log("c clicked");
        $("#message").text("Yes! Good Job");
        //timer here
        setTimeout(function(){
            question6()
        }, 3000);
        // question3();

    });
    $("#answer4").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        setTimeout(function(){
            question6()
        }, 3000);
        // question4();

    });

}

function question6() {
    $("#message").empty();
    $("#question").text(questions[5].q);
    // choices.text(questions[0].c[j]);
    $("#answer1").text(questions[5].c[0]);
    $("#answer2").text(questions[5].c[1]);
    $("#answer3").text(questions[5].c[2]);
    $("#answer4").text(questions[5].c[3]);
    $("#answer1").on("click", function () {
        console.log("a clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        // question3();

    });
    $("#answer2").on("click", function () {
        console.log("b clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        // question3();

    });
    $("#answer3").on("click", function () {
        console.log("c clicked");
        $("#message").text("Yes! Good Job");
        //timer here
        // question3();

    });
    $("#answer4").on("click", function () {
        console.log("d clicked");
        $("#message").text("No! You are wrong! :(");
        //timer here
        // question4();

    });

}