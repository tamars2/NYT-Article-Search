//partially working, need to fix date format and number of articles requested, among other things..

// set api key
var apiKey = "api-key=12500f997ba043fca26ead8c403c8e7b";
// this is the first portion of url to query
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
// set global vars
var searchTerm = "";
var numRecords = 1;
var startYear = "";
var endYear = "";
//when search button is clicked, do some stuff
$('#search').on("click", function(){
	//get user input and store to vars
	searchTerm = $('#searchTerm').val();
	console.log(searchTerm);
	numRecords = $('#numRecords').val();
	console.log(numRecords);
	startYear = $('#startYear').val();
	console.log(startYear);
	endYear = $('#endYear').val();
	console.log(endYear);

	//build query url
	var newQuery = queryURL + "q=" + searchTerm + "&?begin_date=" + startYear + "&?end_date" + endYear + "&" + apiKey;
	console.log(newQuery);
	//qty of records not working yet
	// "&?page=" + numRecords +

	//make the call and promise
	$.ajax({
		url: newQuery,
		method: "GET"
	}).done(function(NYT) {
		console.log(NYT);
		//stringify the results so we can send it to the DOM
		var articleTitle = JSON.stringify(NYT.response.docs[0].headline.main);
		var articleDate = JSON.stringify(NYT.response.docs[0].pub_date);
		
		//author section is buggy
		// var articleAuthor = JSON.stringify(NYT.response.docs[0].byline.person.firstname);
		// if (articleAuthor == null){
		// 	articleAuthor = "";
		// }
		var articleSection = JSON.stringify(NYT.response.docs[0].section_name);
		//send to DOM
		$('.title').append(articleTitle);
		$('.section').append(articleSection);
		$('.date').append(articleDate);
	})

});




