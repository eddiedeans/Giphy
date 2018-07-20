console.log("LINKED!!!")

var cars = ["Subaru", "Mitsubishi", "Toyota", "Nissan"];

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

$.ajax({
    url: queryURL,
    method: "GET"
  })

//render buttons
function addButtons() {
    $("#button-view").empty();

    for (var i = 0; i < cars.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("car");
        // Adding a data-attribute
        a.attr("data-name", cars[i]);
        // Providing the initial button text
        a.text(cars[i]);
        // Adding the button to the HTML
        $("#button-view").append(a);

      }
}

addButtons();

$("#add-car").on("click", function(event){
    event.preventDefault();

    var userInput = $("#user-input").val().trim();

    cars.push(userInput);

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + userInput;

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var carImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        carImage.attr("src", imageUrl);
        carImage.attr("alt", "car image");

        // Prepending the catImage to the images div
        $("#gifs-appear-here").prepend(carImage);
      });
});



