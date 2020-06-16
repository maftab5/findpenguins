$(document).ready(function () {
    var audio = new Audio("sound/pen.mp3");
    var audio1 = new Audio("sound/yeti.mp3");

    var random = function (ar) {
        return (Math.floor(Math.random() * ar.length));
    }

    var pengDivs = $("#gameholder").children("div");

    var ids = [];

    var abr = function () {
        $(".ani").each(function () {
            var id = $(this).attr("id");
            ids.push(id);

        });
        return ids;
    }

    abr();


    var scores = 0;
    var high_score = 0;
    $(".ani").on("click", function () {


        var idD = $(this).attr("id");

        var ind = ids.indexOf(idD);
        $("#" + idD).addClass("active");
        //ids.splice(ind, 1);

        if (idD != "yeti") {
            audio.play();
            scores += 20;
            if (scores >= high_score) {
                high_score = scores;
                $("#high_score").val(high_score);
            }
            $(".score").val(scores);
        } else {
            audio1.play();
            function divShuffle(arr) { //reference:https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
                var count = arr.length,
                    tempValue, rand;

                // While there remain elements to shuffle...
                while (count !== 0) {

                    // Pick a remaining element...
                    rand = Math.floor(Math.random() * count);
                    count -= 1;

                    // And swap it with the current element.
                    tempValue = arr[count];

                    arr[count] = arr[rand];
                    arr[rand] = tempValue;
                }

                //to append the shuffled divs contents
                for (var i = 0; i < arr.length; i++) {
                    $("#gameholder").append(arr[i]);
                }
            }

            scores = 0;
            $(".score").val(scores);

            $(this).siblings().removeClass("active");



            setTimeout(function () {
                $(".ani").removeClass("active");
            alert("Game over");
                //for div shuffel
                divShuffle(pengDivs);

            }, 1000);

        }

        //}
    })

});
