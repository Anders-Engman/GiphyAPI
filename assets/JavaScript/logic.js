$( document ).ready(function() {

    var chosenAnimal = "";

    var animals = ["koala", "stingray", "elk", "dog"];

    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + chosenAnimal + "&api_key=UnxzCH0k4bEXW16OVMfrtVK3zpXLG4ZH";
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=UnxzCH0k4bEXW16OVMfrtVK3zpXLG4ZH&tag=" + chosenAnimal;

    function renderButtons() {
        // $("#animalButtons").empty();

        for (var i = 0; i < animals.length; i++)
            console.log("working");

            var a = $("<button>");

            console.log("button added");

            a.addClass("animal");

            a.attr("data-name", animals[i]);

            a.text(animals[i]);

            $("#animalButtons").append(a);

            console.log("complete");

    }

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();

        var chosenAnimal = $("#usr").val().trim();

        animals.push(chosenAnimal);
        
        renderButtons();
    })


    $(".animal").on("click", function(event) {

        $("#animalGifs").empty();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
           
            for (var i = 0; i < 10; i++)
                var imgURL = response.data.url;
                var animalGif = $("<img>");
        
                animalGif.attr("src", imgURL);
                animalGif.attr("alt", "animal image");
        
                $("#animalGifs").prepend(animalGif);
        })
    })


    renderButtons();
    
});

