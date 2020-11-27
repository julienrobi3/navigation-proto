import * as d3 from "d3";


function graph(data, element, timeNow, timeSlider) {

    var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:00Z");

    for (let i = 0; i < data.length; i++) {
        data[i].date = parseTime(data[i].eventDate);
    }
    var minValue = d3.min(data, (d) => d.value);
    var maxValue = d3.max(data, (d) => d.value);

    var varLimits = 6
        // limits of the visible range on the graph
    var dateMin = new Date();
    dateMin.setHours(dateMin.getHours() - varLimits);

    var dateMax = new Date();
    dateMax.setHours(dateMax.getHours() + varLimits);

    // Max extent of the data
    var extentX = d3.extent(data, d => d.date)

    const width = 200;
    const height = 150;
    const margin = { top: 10, bottom: 35, left: 15, right: 10 };

    const svg = d3
        .select(element)
        .append("svg")
        .attr("height", height)
        .attr("width", width);

    const x = d3
        .scaleTime()
        .domain([dateMin, dateMax])
        .range([margin.left, width - margin.right]);
    //.padding(0.1)

    const y = d3
        .scaleLinear()
        .domain(d3.extent(data, (d) => d.value))
        .range([height - margin.bottom, margin.top]);

    svg.append("g");
    //.attr('transform', 'translate(50,-50)')

    var line = d3
        .line()
        .x(function(d) {
            return x(d.date);
        })
        .y(function(d) {
            return y(d.value);
        });

    svg
        .append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", line)
        .style("stroke-width", 2)
        .style("stroke", "blue")
        .style("fill", "none");

    //var date = new Date
    //console.log(date)
    var date = parseTime(timeNow);
    //console.log(date);

    var todayLine = [{
            date: date,
            yvalue: minValue,
        },
        {
            date: date,
            yvalue: maxValue,
        },
    ];

    var line2 = d3
        .line()
        .x(function(d) {
            return x(d.date);
        })
        .y(function(d) {
            return y(d.yvalue);
        });

    //console.log(todayLine);

    svg
        .append("path")
        .data([todayLine])
        .attr("class", "line")
        .attr("d", line2)
        .style("stroke-width", 2)
        .style("stroke", "red")
        .style("fill", "none");

    const xAxisPosition = height - margin.bottom;
    const format = d3.timeFormat("%d/%m %H:%M");

    var xAxis = d3.axisBottom(x).ticks(10).tickFormat(format)
    svg
        .append("g")
        .attr("class", "xaxis")
        .attr("transform", "translate(0," + xAxisPosition + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)")
        .style("font-size", 10);

    svg
        .append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(" + margin.left + ",0)")
        .call(d3.axisLeft(y).ticks(6));


    // Create the circle that travels along the curve of chart
    var focus = svg
        .append("g")
        .append("circle")
        .style("fill", "none")
        .attr("stroke", "black")
        .attr("r", 8.5)
        .style("opacity", 0);

    // Create the text that travels along the curve of chart
    var focusText = svg
        .append("g")
        .append("text")
        .style("opacity", 0)
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle");

    // Create a rect on top of the svg area: this rectangle recovers mouse position
    var rect = svg
        .append("rect")
        .style("fill", "none")
        .style("pointer-events", "all")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout)
        .on("click", clicked);


    function findDateRelated(event) {

        var x0 = x.invert(d3.pointer(event, event.target)[0]);
        var i = d3.bisect(result, x0);
        selectedData = data[i]
        return selectedData
    }

    function clicked() {
        if (event.defaultPrevented) return;

        var dateClicked = new Date(findDateRelated(event).eventDate)
        timeSlider.values = [dateClicked]
    }

    // What happens when the mouse move -> show the annotations at the right positions.
    function mouseover() {
        focus.style("opacity", 1);
        focusText.style("opacity", 1);
    }

    let result = data.map((a) => a.date);
    var selectedData



    function mousemove() {
        findDateRelated(event)

        focus
            .attr("cx", x(selectedData.date))
            .attr("cy", y(selectedData.value));
        focusText
            .html(selectedData.value)
            .attr("x", x(selectedData.date) + 15)
            .attr("y", y(selectedData.value))
            .style("stroke", "black");
    }

    function mouseout() {
        focus.style("opacity", 0);
        focusText.style("opacity", 0);
    }

    rect.call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded));


    var dragStart

    function dragStarted() {

        findDateRelated(event)
        focus.style("opacity", 0)
        focusText.style("opacity", 0)
        dragStart = selectedData
    }


    function dragged() {

        findDateRelated(event)
        var diff = dragStart.date.getTime() - selectedData.date.getTime()

        dateMin.setTime(dateMin.getTime() + diff)
        dateMax.setTime(dateMax.getTime() + diff)

        if (dateMin < extentX[0]) {
            dateMin = new Date(extentX[0])
            dateMax.setHours(dateMin.getHours() + varLimits * 2)
        }
        if (dateMax > extentX[1]) {
            dateMax = new Date(extentX[1])
            dateMin.setHours(dateMax.getHours() - varLimits * 2)
        }

        x.domain([dateMin, dateMax])
        svg.select(".xaxis")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)")
            .style("font-size", 10)

        svg.selectAll("path").remove()
        svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", line)
            .style("stroke-width", 2)
            .style("stroke", "blue")
            .style("fill", "none");

        svg
            .append("path")
            .data([todayLine])
            .attr("class", "line")
            .attr("d", line2)
            .style("stroke-width", 2)
            .style("stroke", "red")
            .style("fill", "none");



    }

    function dragEnded() {
        //d3.event.subject.active = false
        //console.log(event)
        focus.style("opacity", 1)
        focusText.style("opacity", 1)
    }
}
export default graph