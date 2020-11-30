import jQuery from "jquery";
const $ = jQuery;
window.$ = $;



function getStationsInfo() {
    var stations
    $.ajax({
        // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
        url: "https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations",
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function(json) {
            stations = json;
        },
    });
    return stations
}

function date2string(year, month, day, hour, minute) {
    return year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00Z";
}

function getDateValuesFromDate(date) {
    var year = String(date.getUTCFullYear());
    var month = String(date.getUTCMonth() + 1).padStart(2, "0");
    var day = String(date.getUTCDate()).padStart(2, "0");
    var hour = String(date.getUTCHours()).padStart(2, "0");
    var minute = String(date.getUTCMinutes()).padStart(2, "0");
    return date2string(year, month, day, hour, minute)
}

function getStationAttributes(date, stationAttributes) {

    var timeStart = getDateValuesFromDate(date.dateMin)
    var timeNow = getDateValuesFromDate(date.dateNow)
    var timeEndPrediction = getDateValuesFromDate(date.dateMax)
        // Get last observation if possible
    if (stationAttributes.color === "wlo") {
        var data;
        $.ajax({
            // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
            url: "https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/" +
                stationAttributes.id +
                "/data?time-series-code=wlo&from=" +
                timeStart +
                "&to=" +
                timeNow +
                "",
            type: "GET",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function(json) {
                data = json;
            },
        });

        stationAttributes.lastDate = data[data.length - 1]["eventDate"];
        stationAttributes.lastWlo = data[data.length - 1]["value"];
    }

    // Get last prediction
    var prediction;
    $.ajax({
        // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
        url: "https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/" +
            stationAttributes.id +
            "/data?time-series-code=wlp&from=" +
            timeStart +
            "&to=" +
            timeEndPrediction +
            "",
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function(json) {
            prediction = json;
        },
    });
    stationAttributes.lastDateWlp =
        prediction[prediction.length - 1]["eventDate"];
    stationAttributes.lastWlp =
        prediction[prediction.length - 1]["value"];
    stationAttributes.predictions = prediction;
    stationAttributes.timeNow = timeNow;
    //console.log("predictions", stationAttributes.timeNow);
}

function dateRoundedArrayHours(startDateDate, endDateDate) {
    var listDate = [];
    var startDate = startDateDate.toISOString().slice(0, 19) + "Z";
    var endDate = endDateDate.toISOString().slice(0, 19) + "Z";
    var dateMove = new Date(startDate);
    var strDate = startDate;
    while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 19) + "Z";
        //strDate = roundMinutes(dateMove);
        listDate.push(strDate);

        dateMove.setTime(dateMove.getTime() + 60 * 60 * 1000)
    }

    /*function roundMinutes(date) {

        date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
        date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

        return date;
    }*/
    for (let i = 0; i < listDate.length; i++) {
        listDate[i] = new Date(listDate[i])
        listDate[i].setHours(listDate[i].getHours() + Math.round(listDate[i].getMinutes() / 60));
        listDate[i].setMinutes(0, 0, 0); // Resets also seconds and milliseconds
    }
    return listDate
}

function getTimeAvailable(layerName) {
    var get = [];
    $.ajax({ // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
        url: "https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=" + layerName,
        type: "GET",
        async: false,
        contentType: 'application/json; charset=utf-8',
        success: function(json) {
            get = json;
        }
    });
    //console.log("station", get)
    return get.getElementsByTagName('Dimension')[0].innerHTML.split("/")
        //var startTime = timeExtent[0]
        //var EndTime = timeExtent[1]
}

function nearestTimeToShow(time, layerName) {
    var coeff;
    var rounded;
    var dateUTCClicked;
    var timeInterval = getTimeAvailable(layerName)[2];
    if (timeInterval === "PT10M") {
        coeff = 1000 * 60 * 10;
        rounded = new Date(
            Math.round(time.getTime() / coeff) * coeff
        );

        dateUTCClicked = getDateValuesFromDate(rounded);
    } else if (timeInterval === "PT1H") {
        coeff = 1000 * 60 * 60;
        rounded = new Date(
            Math.round(time.getTime() / coeff) * coeff
        );

        dateUTCClicked = getDateValuesFromDate(rounded);

    } else if (timeInterval === "PT3H") {
        coeff = 1000 * 60 * 60 * 3;
        rounded = new Date(
            Math.round(time.getTime() / coeff) * coeff
        );

        dateUTCClicked = getDateValuesFromDate(rounded);
    }
    return dateUTCClicked
}




export { getStationAttributes, getStationsInfo, getDateValuesFromDate, dateRoundedArrayHours, nearestTimeToShow, getTimeAvailable }