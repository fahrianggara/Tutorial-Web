$(document).ready(function () {
    let love = setInterval(function () {
        let number = Math.floor(Math.random() * 40) + 1;
        let size = Math.floor(Math.random() * 65) + 10;
        let left = Math.floor(Math.random() * 100) + 1;
        let background = Math.floor(Math.random() * 25) + 100;
        let time = Math.floor(Math.random() * 5) + 5;
    
        $('.bg_heart').append("<div class='heart' style='width:" + size + "px;height:" + size + "px;left:" + left + "%;background:rgba(255," + (background - 25) + "," + background + ",1);-webkit-animation:love " + time + "s ease;-moz-animation:love " + time + "s ease;-ms-animation:love " + time + "s ease;animation:love " + time + "s ease'></div>");
    
        $('.bg_heart').append("<div class='heart' style='width:" + (size - 10) + "px;height:" + (size - 10) + "px;left:" + (left + number) + "%;background:rgba(255," + (background - 25) + "," + (background + 25) + ",1);-webkit-animation:love " + (time + 5) + "s ease;-moz-animation:love " + (time + 5) + "s ease;-ms-animation:love " + (time + 5) + "s ease;animation:love " + (time + 5) + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (size - 10) + "px;height:" + (size - 10) + "px;left:" + (left + number) + "%;background:rgba(255," + (background - 25) + "," + (background + 25) + ",1);-webkit-animation:love " + (time + 5) + "s ease;-moz-animation:love " + (time + 5) + "s ease;-ms-animation:love " + (time + 5) + "s ease;animation:love " + (time + 5) + "s ease'></div>");
    
        $('.heart').each(function () {  
            let top = $(this).css("top").replace(/[^-\d\.]/g, '');
            let width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        });
    }, 500);
});