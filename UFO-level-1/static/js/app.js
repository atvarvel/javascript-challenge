// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("#target-table");
var filterButton = d3.select("#filter-btn");

tableData.forEach(obj => {
    var row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
        var data = row.append("td");
        data.text(value);
    });
});

filterButton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    var input = d3.select("#datetime");
    var inputValue = input.property("value");

    var inputType = tableData.filter(one => one.datetime === inputValue);
    inputType.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});