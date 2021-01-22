var temp;
var imgUrl;
var commentl

var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Seoul"+"&appid="+"d5281d10950150f7e830fc1e0d5e5d2f";
        $.ajax({
            url: apiURI,
            dataType: "json",
            type: "GET",
            async: "false",
            success: function(resp) {
                temp = Math.floor(resp.main.temp- 273.15);   
                imgUrl = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";         
                comment = resp.weather[0].description;
            }
        })

function checkTemp() {
    if(temp < 30) {
        if(temp > 20)
            return 0;
        else if (temp > 10 && temp < 20)
            return 2;
        else 
            return 3;
    }
    else 
        return 1;
}
