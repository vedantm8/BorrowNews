
var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var mediumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

var Medium = mongoose.model('Medium', mediumSchema);
//icle model
module.exports = Medium;
// // Make a request call to grab the HTML body from the site of your choice
// request("https://medium.com/", function(error, response, html) {

//   // Load the HTML into cheerio and save it to a variable
//   // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//   var $ = cheerio.load(html);

//   // An empty array to save the data that we'll scrape
//   var results = [];

//   // Select each element in the HTML body from which you want information.
//   // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//   // but be sure to visit the package's npm page to see how it works
//   $("div.extremeHero-titleClamp").each(function(i, element) {
    
//     var title = $(element).children().text();
//     var summary = $(element).children("a.ds-link--stylePointer").children("div.ui-summary").text();
//     var link = $(element).children().attr("href");

//     // Save these results in an object that we'll push into the results array we defined earlier
//     results.push({
//       title: title,
//       link: link,
//       summary: summary
//     });
//   });

//   // Log the results once you've looped through each of the elements found with cheerio
//   console.log(results);
// });