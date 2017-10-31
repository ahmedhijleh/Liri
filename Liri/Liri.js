var Twitter = require("twitter");
var request = require("request");
var keys = require("./key.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: "34e84d93de6a4650815e5420e0361fd3",                                               //it was in the solution,the twitter its in my final project :  ^
  secret: "5162cd8b5cf940f48702dffe096c2acb"
		});
var artists=function(artist)
   {
	return artist.name
   }
	var song= function(songname){}
	 if(songname==undefined){
		songname==="  ";
	   }
	   else
	   {
    return songname();
	   }
var movie=function(movietitle){
		if(movietitle===undefined){
			movietitle=" ";
		}
		var urlHit = "http://www.omdbapi.com/?t=" + movietitle + "&y=&plot=full&tomatoes=true&apikey=40e9cece";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);

      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated); 																//<-- from the the slution 
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);                                                    
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotton Tomatoes URL: " + jsonData.tomatoURL);
			}}
	car tiwtternews=function(){
		var client=Twitter(key);
		var params{screen_name " "};
		client.get("statuses/user_timeline", params, function(error, tweets, response) {
     if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(" ");
        console.log(tweets[i].text);

	}
     }
     	var choice(function(casedata,functionData){

     	switch(casedata){
     	 case "artist":
	     artist.name();
	     break;
	     case "song":
	     songname();
	     break;
	     case "movie":                            
	     movietitle();
	     break;
	     case "twitter-news":
	     tweets(); //?
	     break;

	  }});
	};
var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};



runThis(process.argv[2], process.argv[3]);
