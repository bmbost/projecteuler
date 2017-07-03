function main() {
    var sum = 0;
    var numTerms = 0;
    var prevTerm = 0;
    var tempTerm = 0;
    var i = 1;
    while (i <= 4000000) {
        if (i === 1) {
            $("#fibTerms").text("<li>" + i + "</li>");
            numTerms++;
            i += 1;
            sum += i;
            prevTerm = i;
        } else {
            $("#fibTerms").text("<li>" + i + "</li>");
            numTerms++;
            tempTerm = i;
            i += prevTerm;
            prevTerm = i;
        }
    }
}

$(document).ready(main);