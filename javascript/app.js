console.log("Page LINKED!");

var cars = ["Subaru", "Mistsubitshi", "Nissan", "Toyota"]

// $("button").on("click", function(){
//     var car = $(this).attr("data-car");

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q="
//     + car + "&api_key=s2qdDx0rIB8CwPFmpuPNNII786TBLPLM&limit=10";

//     // console.log(queryURL);    

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
    
//     .then(function(response) {
//         var results = response.data;

//         console.log(results);

//         for (var i = 0; i < results.length; i++) {

//             // creating a div to hold img and p tags
//             var gifDiv = $("<div class='item'>");

//             // storing gif rating in variable
//             var rating = results[i].rating;

//             console.log(JSON.stringify(rating));

//             // creating a p tag that displays rating
//             var p = $("<p>").text("Rating: " + rating);

//             // creating an img tag 
//             var carImage = $("<img>");

//             // giving img tag an attr to have src
//             carImage.attr("src", results[i].images.fixed_width.url);

//             // prepending p tag and img tag to div tag called gifDiv
//             gifDiv.prepend(p);
//             gifDiv.prepend(carImage);

//             //  prepending gifDiv to gifs appear here
//             $("#gifs-appear-here").prepend(gifDiv);

//         }
//     });

// });

    function renderButtons(){

        $("#buttons-view").empty();

        for (var i = 0; i < cars.length; i++) {

            var newButton = $("<button>");        
        
            newButton.addClass("car-btn");

            newButton.attr("data-name", cars[i]);

            newButton.text(cars[i]);

            $("buttons-view").append(newButton);
        };


    };



