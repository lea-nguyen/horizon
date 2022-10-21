// function - character is in a room
function inRoom() {


    $(document).on("keydown", function (e) {


        var index_ch = Math.floor(parseInt($("#character").css('top')) / 60);
        var left_ch = parseInt($("#character").css('left'));
        var top_ch = parseInt($("#character").css('top'));
        var bot_ch = top_ch + 90;
        var index_bottom = Math.floor(bot_ch / 60);

        // $("#character").css('transition', "none");

        //Character can move
        if (plan[index_ch].min <= Math.round(left_ch) && Math.round(left_ch) <= plan[index_ch].max) {

            if (e.keyCode == "37") {
                interval_ch = setInterval(ch_moveLeft(), 1);
            };
            if (e.keyCode == "39") {
                interval_ch = setInterval(ch_moveRight(), 1);
            };
            if (e.keyCode == "38") {
                interval_ch = setInterval(ch_moveTop(), 1);
            }
            if (e.keyCode == "40") {
                interval_ch = setInterval(ch_moveBottom(), 1);
                if (index_ch == 7) {
                    window.open('../city/city.html', '_self');
                }
            }

            //ch meets border bottom

            // if (bot_ch <= plan[index_bottom].min || bot_ch <= plan[index_bottom].max){
            //     $("#character").animate({
            //         top: top_ch - 10 + "px"
            //     }, 700);
            // }

        }

        

        

        //Character meets border left
        if (Math.round(left_ch) <= plan[index_ch].min) {
            $("#character").animate({
                left: left_ch + 20 + "px",
                top: top_ch + 5 + "px",
            }, 700);
        } else if (Math.round(left_ch) <= plan[index_bottom].min) {
            $("#character").animate({
                left: left_ch + 20 + "px",
                top: top_ch + 5 + "px",
            }, 700);
        }
        //Character meets border right
        if (Math.round(left_ch) >= plan[index_ch].max) {
            $("#character").animate({
                left: left_ch - 20 + "px",
                top: top_ch + 5 + "px",
            }, 700);
        } else if (Math.round(left_ch) >= plan[index_bottom].max) {
            $("#character").animate({
                left: left_ch - 20 + "px",
                top: top_ch + 5 + "px",
            }, 700);
        }

        //Character opens book
        if (index_ch <= book["niv"] && book["min"] <= Math.round(left_ch) && Math.round(left_ch) <= book["max"]) {
            $('.livre').css({
                display: "block",
                animation: "fadein 2s"
            });
        } else if (index_ch <= book_2["niv"] && book_2["min"] <= Math.round(left_ch) && Math.round(left_ch) <= book_2["max"]) {
            $('.livre_2').css({
                display: "block",
                animation: "fadein 2s"
            });
        } else {
            $('.livre').css("display", "none");
            $('.livre_2').css("display", "none");
        }
    });

    $(document).on("keyup", function () {
        clearInterval(interval_ch);
    })
}

$(document).ready(function () {
    inRoom();
})