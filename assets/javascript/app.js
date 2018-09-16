var questions= [{
    q: "In which year were the Green Bay Packers Founded?",
    c: ["1919", "1929", "1939", "1949"],
    a: 0
},{
    q: "Which Packers player is affectionately known as 'The Golden Boy'?",
    c: ["Paul Hornung", "Brett Favre", "Aaron Rodgers", "Brandon Chillar"],
    a: 0
},{
    q: "How many NFL Chanmpionships were won by Packers Legend Bart Starr?",
    c: ["1","2","4","5"],
    a: 3
},{
    q: "Which Green Bay Packer has the Widest Smile?",
    c: ["Donald Driver", "Brandon Chillar", "Sterling Sharpe", "Randall Cobb"],
    a: 0
},{
    q: "Which NFL Team did the Green Bay Packers defeat in Super Bowl XXXI?",
    c: ["Steelers", "Broncos", "Patriots", "Browns"],
    a: 1
},{
    q:"Who was the only Packers Player to record a sack in Super Bowl XLV?",
    c: ["Clay Matthews", "AJ Hawk", "Frank Zombo", "Mike Daniels"],
    a: 2
}]

$('#start').on("click"), function() {
    $(this).hide();
    reset();
    console.log("started");
};

function reset() {

    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i].q);
        $("#question").text(questions[i].q);
        // var choices = $("<div>");
        for (var j = 0; j < 4; j++) {
            choices.text(questions[i].c[j]);
            choices.addClass("choice");
            $("#answers").append(choices);
        }
    }
}