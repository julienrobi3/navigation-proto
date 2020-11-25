import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

function hideMeteoElement(dateNow, dateChosen) {
    if (dateNow - dateChosen <= 0) {
        document.getElementById("panel").style.display = "block";
    } else {
        document.getElementById("panel").style.display = "none";
    }
}

function getMeteo(id) {
    var zone
    if (id === "test_create_shp.1") {
        zone = "m0000198_f"
    } else {
        zone = "m0000199_f"
    }




    var x = new XMLHttpRequest();
    x.open("GET", "https://cors-anywhere.herokuapp.com/https://dd.meteo.gc.ca/marine_weather/xml/st_lawrence/" + zone + ".xml", true); //Is this a good way to fix CORS error?
    x.onreadystatechange = function() {
        if (x.readyState == 4 && x.status == 200) {
            var doc = x.responseText;
            //console.log(doc)

            var parser = new DOMParser(),
                xmlDoc = parser.parseFromString(doc, "text/xml")

            //.log(xmlDoc)
            var removeWarning = document.getElementById("buttonWarning");
            if (removeWarning) {
                removeWarning.remove();
            }
            var removeText = document.getElementById("textWarning");
            if (removeText) {
                removeText.remove();
            }
            document.getElementById("region").innerHTML = xmlDoc.getElementsByTagName('area')[0].innerHTML
            if (!(xmlDoc.getElementsByTagName('warnings').length === 0)) {
                if (xmlDoc.getElementsByTagName('warnings')[0].innerHTML === null) {
                    //console.log(xmlDoc.getElementsByTagName('warnings')[0].innerHTML)
                    var warningTag = xmlDoc.getElementsByTagName('warnings')[0]
                    if (warningTag.getElementsByTagName('event')[0].getAttribute("status") === "EN VIGUEUR") {

                        //insert warning message before headerVent
                        var textWarning = document.createElement("div")
                        textWarning.setAttribute('id', "textWarning")
                        textWarning.innerHTML = warningTag.getElementsByTagName('event')[0].getAttribute("name") + " en vigueur pour cette région. Pour plus de détails, veuillez consulter <a href=https://meteo.gc.ca/marine/region_f.html?mapID=12 target='_blank'>météo maritime Canada</a>."
                        textWarning.style.display = "none"

                        var first = document.getElementById('headerVent');
                        first.insertAdjacentElement('beforebegin', textWarning);

                        var button = document.createElement('BUTTON');
                        button.innerHTML = "Avertissement"
                        button.setAttribute("id", "buttonWarning");
                        button.onclick = function() {
                            var x = document.getElementById("textWarning");
                            if (x.style.display === "none") {
                                x.style.display = "block";
                            } else {
                                x.style.display = "none";
                            }
                        }

                        textWarning.insertAdjacentElement('beforebegin', button);
                    }
                }



            }

            var regularForecast = xmlDoc.getElementsByTagName('regularForecast')[0]
            if (regularForecast) {
                document.getElementById("emis").innerHTML = "Prévisions émises le " + regularForecast.getElementsByTagName('textSummary')[1].innerHTML

                var wind = regularForecast.getElementsByTagName('wind')[0]
                var periodCovRegFor = regularForecast.getElementsByTagName('periodOfCoverage')[0]
                if (wind) {
                    document.getElementById("headerVent").innerHTML = "<tr><td id=header>Vent</td><td id=periode>pour " + periodCovRegFor.innerHTML + "</td></tr>"
                    document.getElementById("vent").innerHTML = wind.innerHTML
                }
                var conditions = regularForecast.getElementsByTagName('weatherVisibility')[0]
                if (conditions) {
                    document.getElementById("headerConditions").innerHTML = "<tr><td id=header>Conditions et visibilité</td><td id=periode>pour " + periodCovRegFor.innerHTML + "</td></tr>"
                    document.getElementById("conditions").innerHTML = conditions.innerHTML
                }
            }
            var waveForecast = xmlDoc.getElementsByTagName('waveForecast')[0]
            if (waveForecast) {
                var weatherConditionWavFor = waveForecast.getElementsByTagName('weatherCondition')[0]
                var waves = weatherConditionWavFor.getElementsByTagName('textSummary')[0]
                var periodCovWavFor = regularForecast.getElementsByTagName('periodOfCoverage')[0]
                    //console.log(waves)
                if (waves) {
                    document.getElementById("headerVagues").innerHTML = "<tr><td id=header>Vagues</td><td id=periode>pour " + periodCovWavFor.innerHTML + "</td></tr>"
                    document.getElementById("vagues").innerHTML = waves.innerHTML
                }
            }



            document.getElementById("longTerme").innerHTML = "<tr><th colspan='2'>Prévisions long terme</th></tr>"
            var extendedForecast = xmlDoc.getElementsByTagName('extendedForecast')[0]
            if (extendedForecast) {

                var weatherConditionExtFor = extendedForecast.getElementsByTagName('weatherCondition')[0]
                var forecastPeriod = weatherConditionExtFor.getElementsByTagName('forecastPeriod')
                for (var i = 0; i < forecastPeriod.length; i++) {
                    document.getElementById("longTerme").insertAdjacentHTML('beforeend', "<tr><td>" + forecastPeriod[i].getAttribute("name") + "</td><td>" + forecastPeriod[i].innerHTML + "</td></tr>")
                }
            } else {
                document.getElementById("longTerme").insertAdjacentHTML('beforeend', "<tr><td>Prévisions long terme non disponibles pour le moment</td></tr>")
            }
            document.getElementById("emisExtent").innerHTML = "Prévisions long terme émises le " + extendedForecast.getElementsByTagName('textSummary')[1].innerHTML
        }
    };
    x.send(null);
}



export { getMeteo, hideMeteoElement }