//var request = require('request');
//request.post({
//  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  //url:     'http://www.google.com',
 // body:	"?gfe_rd=cr&dcr=0&ei=4fScWsHdEoHY8gfGqYa4Bg"
//}, function(error, response, body){
 // console.log(body);
//});

//const request = require('request');
 
//request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  //if (err) { return console.log(err); }
  //console.log(body.url);
 // console.log(body.explanation);
//});

//curl http://www.mapcollaborator.org/cpad/search/by_agency -d "agency_type=State&agency_name=University of California"
var request = require('request');

const url = "http://www.mapcollaborator.org" 

//const url = "http://www.mapcollaborator.org/cpad/search/by_agency" 
var headers = {
		'agency_type':	'State',
		'agency_name': 	'University+of+California',
		'Content-Type': 'application/x-www-form-urlencoded'
		'Accept-Encoding' : 'gzip'

request({
	url: url,
	method: "POST",
	//json: true,   // <--Very important!!!
	gzip: true,
	headers: headers
	body:'/cpad/search/by_agency HTTP/1.1'

	}, function (error, response, body){
	console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
      console.log('the decoded data is: ' + body)

	//	console.log(response);
});
