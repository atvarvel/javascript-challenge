// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the table area where the data will be appended
var tbody = d3.select("#target-table");
// Select the filter button
var filterButton = d3.select("#filter-btn");

// Create table in the html file and insert each object from data.js
tableData.forEach(obj => {
    // Create new row for each object
    var row = tbody.append("tr");
    // Each object becomes an array in order to get the value
    Object.entries(obj).forEach(([key, value]) => {
        var data = row.append("td");
        // Add the value to each row
        data.text(value);
    });
});

// Function for the filter button
filterButton.on("click", function() {
    // Clear the data
    tbody.html("");
    // Keep the page from refreshing
    d3.event.preventDefault();
    // Select the input element
    var input = d3.select("#datetime");
    // Select the value property of the input element
    var inputValue = input.property("value");
    // Use the input value to filter the table by the date
    var inputType = tableData.filter(one => one.datetime === inputValue);
    // Function to display the filtered data
    inputType.forEach((selection) => {
        // Create new row for each object
        var row = tbody.append("tr");
        // Each object becomes an array in order to get the value
        Object.entries(selection).forEach(([key, value]) => {
            var cell = row.append("td");
            // Add the value to each row
            cell.text(value);
        });
    });
});