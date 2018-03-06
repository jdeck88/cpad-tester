//curl http://www.mapcollaborator.org/cpad/search/by_agency -d "agency_type=State&agency_name=University of California"

//retrieve specific json
var json = require("./test.json");
var fs = require('fs');
//isolate 'results' array from json file
var results = json.results
//loop through json 'results' array 
for (let i = 0; i < results.length; i++) {

//Prepare data to be stored as wkt file
	//retrieve 'name' value to make .wkt name
	var name = results[i].name;
	//collect multipolygon data to populate .wkt file
	var multipolygon = results[i].wkt;
	//remove white spaces and append .wkt to name
	modifiedName = name.replace(/\s/g,'').concat(".wkt");

//write file with modifiedName as file name, multipolygon data as contents
	//todo: create path to store files in a different directory
	fs.writeFile(modifiedName, multipolygon, (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
	}) 
};



//make a url call
//how do i call a url with post params/ in node, fetch data back and pass in a post param
//pass in those post params and get json back
//then we can do it for california state parks
//paramaters that you can see on the url are called get param (max 2k characters)
//post params are passed in the header
// get fancier: heres my list of agency names , can call 50 different json files
