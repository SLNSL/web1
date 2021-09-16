var x = undefined;
var y = undefined;
var r = undefined;

$(function (){

    $('#reset_button').click(function () {
        $('.xrad').removeClass("error");
        $('#yval').removeClass("text-error")
        $('.r_button').removeClass("error")
        $('#r_button_1').removeClass('pressed-button')
        $('#r_button_2').removeClass('pressed-button')
        $('#r_button_3').removeClass('pressed-button')
        $('#r_button_4').removeClass('pressed-button')
        $('#r_button_5').removeClass('pressed-button')
        x = undefined;
        y = undefined;
        r = undefined;
    })


    $('#submit_button').click(function () {
        isValidX = validateX(getX());
        isValidY = validateY(getY());
        isValidR = validateR(getR());
        if (isValidX && isValidY && isValidR) {

            $.ajax({
                url: 'php/script.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    x: x,
                    y: y,
                    r: r,
                    time: new Date().getTimezoneOffset()
                }, success: function (data){

                    if (data.valid){
                        var isHit = data.ans ? 'Попал' : 'Мимо';
                        var row = '<tr>';
                        row += '<td>' + data.x + '</td>';
                        row += '<td>' + data.y + '</td>';
                        row += '<td>' + data.r + '</td>';
                        row += '<td>' + data.curtime + '</td>';
                        row += '<td>' + data.exectime + '</td>';
                        row += '<td>' + isHit + '</td>';
                        row += '</tr>';
                        $('#res-table').append(row);
                        // alert(2);
                    }
                }
            })

        };
    })

    $('#r_button_1').click(function () {
        r = 1;
        $('#r_button_1').addClass('pressed-button')
        $('#r_button_2').removeClass('pressed-button')
        $('#r_button_3').removeClass('pressed-button')
        $('#r_button_4').removeClass('pressed-button')
        $('#r_button_5').removeClass('pressed-button')
    })

    $('#r_button_2').click(function () {
        r = 1.5;
        $('#r_button_2').addClass('pressed-button')
        $('#r_button_1').removeClass('pressed-button')
        $('#r_button_3').removeClass('pressed-button')
        $('#r_button_4').removeClass('pressed-button')
        $('#r_button_5').removeClass('pressed-button')
    })

    $('#r_button_3').click(function () {
        r = 2;
        $('#r_button_3').addClass('pressed-button')
        $('#r_button_2').removeClass('pressed-button')
        $('#r_button_1').removeClass('pressed-button')
        $('#r_button_4').removeClass('pressed-button')
        $('#r_button_5').removeClass('pressed-button')
    })

    $('#r_button_4').click(function () {
        r = 2.5;
        $('#r_button_4').addClass('pressed-button')
        $('#r_button_2').removeClass('pressed-button')
        $('#r_button_3').removeClass('pressed-button')
        $('#r_button_1').removeClass('pressed-button')
        $('#r_button_5').removeClass('pressed-button')
    })

    $('#r_button_5').click(function () {
        r = 3;
        $('#r_button_5').addClass('pressed-button')
        $('#r_button_2').removeClass('pressed-button')
        $('#r_button_3').removeClass('pressed-button')
        $('#r_button_4').removeClass('pressed-button')
        $('#r_button_1').removeClass('pressed-button')
    })


    function validateX(x){
        var ans = true;
        if (!x in [-3, -2, -1, 0, 1, 2 , 3, 4, 5] || isNaN(parseInt(x))){
            $('.xrad').addClass("error")
            ans = false;
        } else {
            $('.xrad').removeClass("error");
        }
        return ans;
    }

    function validateY(y){
        var ans = true;
        if (y <= -3 || y >= 3 || isNaN(parseInt(y))) {

            $('#yval').addClass("text-error")
            ans = false;
        } else {
            $('#yval').removeClass("text-error")
        }
        return ans;
    }

    function validateR(r){
        var ans = true;
        if (!r in [1, 1.5, 2, 2.5, 3] || isNaN(parseInt(r))){
            $('.r_button').addClass("error");
            ans = false;
        } else {
            $('.r_button').removeClass("error")
        }
        return ans;
    }

    function getX(){
        if (document.getElementById("x_radio_1").checked) {
            x = document.getElementById("x_radio_1").value;
            return document.getElementById("x_radio_1").value;
        }
        if (document.getElementById("x_radio_2").checked) {
            x = document.getElementById("x_radio_2").value;
            return document.getElementById("x_radio_2").value;
        }
        if (document.getElementById("x_radio_3").checked) {
            x = document.getElementById("x_radio_3").value;
            return document.getElementById("x_radio_3").value;
        }
        if (document.getElementById("x_radio_4").checked) {
            x = document.getElementById("x_radio_4").value;
            return document.getElementById("x_radio_4").value;
        }
        if (document.getElementById("x_radio_5").checked) {
            x = document.getElementById("x_radio_5").value;
            return document.getElementById("x_radio_5").value;
        }
        if (document.getElementById("x_radio_6").checked) {
            x = document.getElementById("x_radio_6").value;
            return document.getElementById("x_radio_6").value;
        }
        if (document.getElementById("x_radio_7").checked) {
            x = document.getElementById("x_radio_7").value;
            return document.getElementById("x_radio_7").value;
        }
        if (document.getElementById("x_radio_8").checked) {
            x = document.getElementById("x_radio_8").value;
            return document.getElementById("x_radio_8").value;
        }
        if (document.getElementById("x_radio_9").checked) {
            x = document.getElementById("x_radio_9").value;
            return document.getElementById("x_radio_9").value;
        }
        return undefined;
    }

    function getY(){
        y = document.getElementById("yval").value;
        return y;
    }

    function getR(){
        return r;
    }

});
