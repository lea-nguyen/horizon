var win_width = $(window).width();
var bg_city_width = Math.round($("#city img").width());
var interval_bg, interval_ch;



//function - background (buildings and shadow) moves

function bg_moveLeft() {
    var left_ci = parseInt($("#city img:nth-of-type(1)").css('left'));
    var left_sh = parseInt($("#city img:nth-of-type(2)").css('left'));
    var real_left_c = left_ci - (bg_city_width / 2);
    if (real_left_c < 0) {
        $("#city img:nth-of-type(1)").css('left', left_ci + 4 + "px");
        $("#city img:nth-of-type(2)").css('left', left_sh + 6 + "px");
    }
}

function bg_moveRight() {
    var left_ci = parseInt($("#city img:nth-of-type(1)").css('left'));
    var left_sh = parseInt($("#city img:nth-of-type(2)").css('left'));
    var real_left_c = left_ci - (bg_city_width / 2);
    var right = real_left_c + bg_city_width;
    if (real_left_c > win_width - bg_city_width) {
        $("#city img:nth-of-type(1)").css('left', left_ci - 4 + "px");
        $("#city img:nth-of-type(2)").css('left', left_sh - 6 + "px");
    }
}

//function - character moves

function ch_moveRight() {
    var x_ch = parseInt($("#character").css('left'));
    $("#character").css('left', x_ch + 5 + "px");
}

function ch_moveLeft() {
    var x_ch = parseInt($("#character").css('left'));
    $("#character").css('left', x_ch - 5 + "px");
}

function ch_moveTop() {
    var y_ch = parseInt($("#character").css('top'));
    $("#character").css('top', y_ch - 5 + "px");
}

function ch_moveBottom() {
    var y_ch = parseInt($("#character").css('top'));
    $("#character").css('top', y_ch + 5 + "px");
}

// function - character is going in a room

function ch_enters() {
    var x_ch = parseInt($("#character").css('left'));
    var bottom_ch = parseInt($("#character").css('bottom'));
    $("#character").animate({left : x_ch+10+"px", height : "15%"},700);
}