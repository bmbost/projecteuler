function main() {
    var sum = 0; // stores the sum of multiples

    // Loops through numbers before 1000
    for (var i = 1; i < 1000; i++) {
        // If the remainder of i and either 3 or 5 is 0, then append the multiple to the list and add it to the sum of multiples
        if (((i % 3) === 0) || ((i % 5) === 0)) {
            sum += i;
            $("#list").append("<li>" + i + "</li>");
        }
    }
    // Once the iteration is complete, display the sum of multiples
    $("#sum").text(sum);
}

$(document).ready(main);