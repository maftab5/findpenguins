$(document).ready(function () {
    var count = 0;
    var max_count = 0;
    
    var peng_s = document.getElementById("penguin_voice");
    var yeti_s = document.getElementById("yeti_voice");
    scores(count, max_count);

    var DIV = $("#gameholder").children("div");
    shuffle(DIV);

    $("#yeti").mousedown(function () {
        $("#yeti").css('background-image', 'url("images/yeti.png")');
        $('#yeti_voice').get(0).play();
        document.getElementById('yeti').style.pointerEvents = 'none';
        $("#penguin1").removeClass("active");
        $("#penguin2").removeClass("active");
        $("#penguin3").removeClass("active");
        $("#penguin4").removeClass("active");
        $("#penguin5").removeClass("active");
        $("#penguin6").removeClass("active");
        $("#penguin7").removeClass("active");
        $("#penguin8").removeClass("active");
        penguin_reveal();
        setTimeout(function () {
            alert("Yaaarrrrrr!!!!");
            var again = confirm("Do you want to play again?");

            if (again) {
                $("#yeti").css('background-image', 'url("images/mound_9.png")');
                document.getElementById('yeti').style.pointerEvents = 'auto';
                count = 0;
                yeti_s.play();
                scores(count, max_count);
                shuffle(DIV);
            }else{
                $("#gameholder").html("");
            }
        }, 1000);
    });



    function scores(count, max) {
        if (max < count) {
            max_count = count;
        }
        $("#score").empty();
        $("#score").append("count-" + count + "\nHighScore-" + max_count);
    };

    function penguin_reveal() {
        $(".penguin1").css('pointer-events', 'auto');
        $(".penguin2").css('pointer-events', 'auto');
        $(".penguin3").css('pointer-events', 'auto');
        $(".penguin4").css('pointer-events', 'auto');
        $(".penguin5").css('pointer-events', 'auto');
        $(".penguin6").css('pointer-events', 'auto');
        $(".penguin7").css('pointer-events', 'auto');
        $(".penguin8").css('pointer-events', 'auto');
    }

    $("#penguin1").click(function () {
        peng_s.play();
        $("#penguin1").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin1").css('pointer-events', 'none');
    });

    $("#penguin2").click(function () {
        peng_s.play();
        $("#penguin2").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin2").css('pointer-events', 'none');
    });

    $("#penguin3").click(function () {
       peng_s.play();
        $("#penguin3").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin3").css('pointer-events', 'none');
    });

    $("#penguin4").click(function () {
      peng_s.play();
        $("#penguin4").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin4").css('pointer-events', 'none');
    });

    $("#penguin5").click(function () {
       peng_s.play();
        $("#penguin5").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin5").css('pointer-events', 'none');
    });

    $("#penguin6").click(function () {
       peng_s.play();
        $("#penguin6").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin6").css('pointer-events', 'none');
    });

    $("#penguin7").click(function () {
      peng_s.play();
        $("#penguin7").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin7").css('pointer-events', 'none');
    });

    $("#penguin8").click(function () {
        peng_s.play();
        $("#penguin8").addClass("active");
        count += 1;
        scores(count, max_count);

        $("#penguin8").css('pointer-events', 'none');
    });

    function shuffle(array) { //reference:https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        var scoreCount = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== scoreCount) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * scoreCount);
            scoreCount -= 1;

            // And swap it with the current element.
            temporaryValue = array[scoreCount];
            console.log(temporaryValue);
            array[scoreCount] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        for (var i = 0; i < array.length; i++) {
            $("#gameholder").append(array[i]);
        }
    }


});