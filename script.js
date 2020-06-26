var searchTerm = "something"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=jamED41fcrPlcT7SM6msptcyoLZTGNjL";






$(".btn-primary").on("click", function (event) {
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var result = response.response.docs;
        console.log(result);
        for (i = 0; i < result.length; i++) {
            //set the info into variable
            var title = result[i].headline.main;
            var date = result[i].pub_date;
            date= date.slice(0, 10);

            var summary = result[i].abstract;
            var link = result[i].web_url;
            //create the article box and its components
            var articleEL = $("<div>");
            articleEL.attr("class", "articleBox");
            var titleEL = $("<h2>");
            titleEL.attr("class", "title");
            var dateEL = $("<p>");
            dateEL.attr("class", "date");
            var summaryEL = $("<p>");
            summaryEL.attr("class", "summary");
            var linkEL = $("<a>");
            linkEL.attr("class", "link");
            //adds the apropiate content to the elements
            titleEL.text(title);
            dateEL.text(date);
            summaryEL.text(summary);
            linkEL.attr("src", link);
            //fills in the article box
            articleEL.append(titleEL);
            articleEL.append(dateEL);
            articleEL.append(summaryEL);
            articleEL.append(linkEL);
            //append article box to the HTML
            $("body").append(articleEL);
        }
    });
});