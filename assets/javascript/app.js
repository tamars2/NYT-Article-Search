var apiKey = "api-key=12500f997ba043fca26ead8c403c8e7b";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"

var searchTerm = "";
var numRecords = 1;
var startYear = "";
var endYear = "";

$('button').on("click", function(){
	searchTerm = $('#searchTerm').val();
	console.log(searchTerm);
	numRecords = $('#numRecords').val();
	console.log(numRecords);
	startYear = $('#startYear').val();
	console.log(startYear);
	endYear = $('#endYear').val();
	console.log(endYear);

	var newQuery = queryURL + "q=" + searchTerm + "&?begin_date=" + startYear + "&?end_date" + endYear + "&" + apiKey;
	// "&?page=" + numRecords + 

	$.ajax({
		url: newQuery,
		method: "GET"

	}).done(function(NYT) {
	console.log(NYT);
	var articleTitle = JSON.stringify(NYT.response.docs[0].headline.main);
	console.log(articleTitle);
	
	$('#articles').append(articleTitle);
	})

});




