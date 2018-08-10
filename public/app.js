// Grab the articles as a json
$.get("/articles", function(data) {
  console.log("HI")
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $(".cardTitle").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });