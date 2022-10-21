//function - character is in the city

function inCity() {

    var index_sprite = 0;
    var standing_sprites = ["../images/character/character_closed.png", "../images/character/character_half_opened.png", "../images/character/character_half_closed.png"];
    var langue = localStorage.getItem('langue'); // français = 1 et english = 2
    if(langue == 0){
        $('img').eq(0).attr('src','../images/city/background_city_eng.png');
    }
    var bg_city_width = Math.round($("#city img").width());

    if( localStorage.getItem('x_saved')!= undefined ){
        $("#character").css('left', localStorage.getItem('x_ch_sav')+"px");
        $("#city img:nth-of-type(1)").css('left', localStorage.getItem('x_bg_sav')+"px");
    }

    $(document).on("keydown", function (e) {
        
        var index_room = 0;
        var left_ch = parseInt($("#character").css('left')) + (bg_city_width / 2) - parseInt($("#city img:nth-of-type(1)").css('left'));
        var nb_room = [[20,22],[24,26],[36,38],[39,41],[55,58],[62,64],[73,75],[79,81]];
        var left_ch_percent = Math.floor((left_ch/bg_city_width)*100);

        if (e.keyCode == "37") {
            interval_bg = setInterval(bg_moveLeft(), 1);
            interval_ch = setInterval(ch_moveLeft(), 1);
            $("#character").css('background-image', 'url("../images/character/character_closed.png")');
        };
        if (e.keyCode == "39") {
            interval_bg = setInterval(bg_moveRight(), 1);
            interval_ch = setInterval(ch_moveRight(), 1);
            $("#character").css('background-image', 'url("../images/character/character_opened.png")');
        };
         if (e.keyCode == "38") {
             
             while(index_room < nb_room.length){

                if( nb_room[index_room][0] <= Math.floor(left_ch_percent) ){


                    if (Math.floor(left_ch_percent) <= nb_room[index_room][1]){
                        var room = -langue+(index_room+1)*2;

                        $(document).off("keydown");
                        $(document).off("keyup");

                        var left_bg_for_save = parseInt($("#city img:nth-of-type(1)").css('left'));
                        var left_ch_for_save = parseInt($("#character").css('left'));

                        localStorage.setItem('x_ch_sav', left_ch_for_save );
                        localStorage.setItem('x_bg_sav', left_bg_for_save);

                        ch_enters();
                        setTimeout(function () {
                            window.location.assign('../room/index.php?metier='+room);
                        }, 1500);

                    }

                }
                index_room++;
             };

        };
    });

    $(document).on("keyup", function () {
        clearInterval(interval_bg);
        clearInterval(interval_ch);
        index_sprite = Math.floor(Math.random() * 3);
        $("#character").css('background-image', "url(" + standing_sprites[index_sprite] + ")");
    })
}




$(document).ready(function () {
    inCity();
})