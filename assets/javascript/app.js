var apiKey = "api-key=12500f997ba043fca26ead8c403c8e7b";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"

var searchTerm = "";
var numRecords = 1;
var startYear = "";
var endYear = "";

// $('#search').on("click", function(){
	// searchTerm = $('#searchTerm').val();
	// numRecords = $('#numRecords').val();
	// startYear = $('#startYear').val();
	// endYear = $('#endYear').val();
alert("test1");

function testURL(){
	searchTerm = "obama";
	console.log(searchTerm);
	numRecords = 0;
	startYear = "2008";
	endYear = "2012";

	alert("testFunction");

	var newQuery = queryURL + "q=" + searchTerm + "&?page=" + numRecords + "&?begin_date=" + startYear + "&?end_date" + endYear + "&" + apiKey;
	console.log(newQuery);


}
testURL();



