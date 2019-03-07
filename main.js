function weather() {
    
    var ciutat = document.getElementById("ciutats").value;

    $.getJSON("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+ciutat+"?apikey=pdjxEIPtWE2tmrCA8sJ0H5NXh7zOEl5s&language=es&metric=true",function(data) {

    for (i = 0; i < 5; i++) {

        var diallarg = data["DailyForecasts"][i]["Date"];
        var dia = diallarg.substring(0,10);
        var min = data["DailyForecasts"][i]["Temperature"]["Minimum"]["Value"];
        var max = data["DailyForecasts"][i]["Temperature"]["Maximum"]["Value"];
        var estatdia = data["DailyForecasts"][i]["Day"]["Icon"];
        var fraseestatdia = data["DailyForecasts"][i]["Day"]["IconPhrase"];
        var estatnit = data["DailyForecasts"][i]["Night"]["Icon"];
        var fraseestatnit = data["DailyForecasts"][i]["Night"]["IconPhrase"];


        document.getElementById("numdia" + i).innerHTML = dia;
        
        document.getElementById("mindia" + i).innerHTML = min;

        document.getElementById("maxdia" + i).innerHTML = max;

        document.getElementById("estatdia" + i).innerHTML = estatdia;

        document.getElementById("fraseestatdia" + i).innerHTML = fraseestatdia;

        document.getElementById("estatnit" + i).innerHTML = estatnit;

        document.getElementById("fraseestatnit" + i).innerHTML = fraseestatnit;

        }

    });

}