alert("filestructure?");

var apiKey = "api-key=12500f997ba043fca26ead8c403c8e7b";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"

var searchTerm = "";
var numRecords = 1;
var startYear = "";
var endYear = "";

$('button').on("click", function(){
	alert("search button works");
	searchTerm = $('#searchTerm').val();
	numRecords = $('#numRecords').val();
	startYear = $('#startYear').val();
	endYear = $('#endYear').val();

	var newQuery = queryURL + "q=" + searchTerm + "&?page=" + numRecords + "&?begin_date=" + startYear + "&?end_date" + endYear + "&" + apiKey;
	console.log(newQuery);

}




