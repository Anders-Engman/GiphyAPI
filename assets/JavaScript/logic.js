$( document ).ready(function() {

    var chosenAnimal = "";

    var animalArray = ["koala", "stingray", "elk", "dog"];

    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "cow" + "&api_key=UnxzCH0k4bEXW16OVMfrtVK3zpXLG4ZH&limit=10";
    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=UnxzCH0k4bEXW16OVMfrtVK3zpXLG4ZH&tag=" + chosenAnimal + "&limit=10";

    function renderButtons() {
        $("#animalButtons").empty();

        for (var i = 0; i < animalArray.length; i++) {
            console.log("working");

            var a = $("<button>");

            console.log("digital dom created");

            a.addClass("animal");

            a.attr("data-name", animalArray[i]);

            a.text(animalArray[i]);

            $("#animalButtons").append(a);

            console.log(a);

            console.log("button complete");
        }
    }

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();

        var chosenAnimal = $("#usr").val().trim();

        animalArray.push(chosenAnimal);
        
        renderButtons();
    })


    $("#animalButtons").on("click", ".animal", function(event) {
        console.log("onclick functioning");
        $("#animalGifs").empty();

        var animalAttr = $(this).attr("data-name");

        //javascript, jQuery
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + animalAttr + "&api_key=UnxzCH0k4bEXW16OVMfrtVK3zpXLG4ZH&limit=10");
        xhr.done(function(data) { 
        
        // FOR LOOP FOR RESULTS
        for (var i = 0; i < 10;i++) {
            console.log(data);
            console.log("success got data", data); 
           $("#animalGifs").append("  Title: " + data.data[i].title);
           $("#animalGifs").append("<hr>");
           $("#animalGifs").append("<img src=" + data.data[i].images.fixed_height.url + ">");

        }

        var state = $(this).attr("data-state");

        if (state === "still") {
            
        }
    })
});


    renderButtons();
    
});

