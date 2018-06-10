// Add page onload run the request for the the page scrape.
// For each title and link, in the array, add data to the each
// handlebars function on the page.
// add an onclick event for clicking the save button that pushes the title
// and link to be pushed to the dbs.


// var request = require("request");
// var cheerio = require("cheerio");


$('#homepage').on('click', function () {
	window.location.href = "/";

});
$('#page2').on('click', function () {
	window.location.href = "/page2";

});

// request("https://www.ksl.com/", function (error, response, html) {


// 	var $ = cheerio.load(html);

// 	console.log("Error: " + error);

// 	var results = [];

// 	$("h2").each(function (i, element) {
// 		var link = $(element).children().attr("href");
// 		var title = $(element).children().text();

// 		results.push({
// 			title: title,
// 			link: link
// 		});

// 	});

// 	for (var i = 0; i < results.length; i++) {

// 		$("#links").append("<h1>Title: " + results[i].title + "</h1><br><h1>Link: https://www.ksl.com/" + results[i].link + "</h1>")
// 		console.log("Title: " + results[i].title);
// 		console.log("Link: https://www.ksl.com/" + results[i].link);
// 		console.log("---------------------------------------")
// 	}
// });

