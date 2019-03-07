function weather() {
    
    var ciutat = document.getElementById("ciutats").value;

    $.getJSON("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+ciutat+"?apikey=pdjxEIPtWE2tmrCA8sJ0H5NXh7zOEl5s&language=es&metric=true",function(data) {

    var diallarg = data["DailyForecasts"]["0"]["Date"];
    var dia = diallarg.substring(0,9);
    var min = data["DailyForecasts"]["0"]["Temperature"]["Minimum"]["Value"];
    var max = data["DailyForecasts"]["0"]["Temperature"]["Maximum"]["Value"];
    var estatdia = data["DailyForecasts"]["0"]["Day"]["Icon"];
    var fraseestatdia = data["DailyForecasts"]["0"]["Day"]["IconPhrase"];
    var estatnit = data["DailyForecasts"]["0"]["Night"]["Icon"];
    var fraseestatnit = data["DailyForecasts"]["0"]["Night"]["IconPhrase"];

    console.log(dia + " " +  min + " " + max)

    document.getElementById("numdia0").innerHTML = dia;
    
    document.getElementById("mindia0").innerHTML = min;

    document.getElementById("maxdia0").innerHTML = max;

    document.getElementById("estatdia0").innerHTML = estatdia;

    document.getElementById("fraseestatdia0").innerHTML = fraseestatdia;

    document.getElementById("estatnit0").innerHTML = estatnit;

    document.getElementById("fraseestatnit0").innerHTML = fraseestatnit0;

    });

}