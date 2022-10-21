$(document).ready(function () {
    start();
})

function start(){

    var choice = 0;
    setTimeout(function(){
        $('#fr').addClass('select');
    },3000);

    $(document).on('keydown', function (e) {

        if (e.keyCode =="37" || e.keyCode =="38" || e.keyCode =="39" || e.keyCode =="40"){
            $('#fr').toggleClass('select');
            $('#eng').toggleClass('select');
        }

        if (e.keyCode =="13") {
            if( $('#fr').hasClass('select') == true) {
                choice = 1;
            }

            $(window).off("keydown");

            $('.language').css({display:"none"});
            $('img').css({animation: "zoom 4s"});

            localStorage.setItem('langue',choice);

            setTimeout(function(){
                
                window.location.assign("city.html");

            },3000);

            return;
            
        }
           
    });
}