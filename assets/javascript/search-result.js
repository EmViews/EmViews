//If your confuse only edit this serach-result.js :)
$(document).ready(function() {

    // calling this json object from data.js
    //console.log(response);

    $(document).on("click", ".search-button", function() {
        event.preventDefault();
        //empty out the product-input
        $("#product-input").empty();
        $("#search-result-2").empty();
        $("#search-result-1").empty();
        //Submit btn click, searches goes to Ajax to search

        var productQuery = $("#product-input").val().trim().replace(/ /g, "+");
        console.log("You submitted: " + productQuery);
        var querySearch = "https://api.upcitemdb.com/prod/trial/search?s=" + productQuery + "&match_mode=0&type=product";
        $.ajax({
                url: querySearch,
                method: "GET"
            })
            .done(function(response) {
                //check I receive a return
                console.log("Calling response:");
                console.log(response);

                for (var i = 0; i < response.items.length; i++) {
                    //need to grab UPC, image, title
                    //searchItem div have Title link,
                    var searchItem = $("<div class='search-item col-lg-3' id='item'>");

                    //create div with Class titleItem, with title,upc, ean, and value attributes
                    var title = $("<div class='title-item canClick'>").html("<h4>" + response.items[i].title + "</h4>");
                    title.attr("title", response.items[i].title);
                    title.attr("value", i);
                    $('.title-item').css('cursor', 'pointer');

                    //create div with Class imageItem and canClick, with title, upc, ean, and value attributes
                    var image = $("<img class='image-item canClick'>").attr("src", response.items[i].images[0]);
                    image.attr("title", response.items[i].title);
                    image.attr("value", i);
                    $('.image-item').css('cursor', 'pointer');

                    //add image and title into searchItem
                    searchItem.append(image).append(title);

                    searchItem.appendTo("#search-result-1, #search-result-2");
                    $("#search-result-2").children().removeClass("col-lg-3");
                    // $("#search-result-1").append(searchItem);
                    // $("#search-result-2").append(searchItem2);
                }

                //when click any of the image or title... 
                $(document).on("click", ".canClick", function() {

                    //gets value for index when "this" item is clicked
                    var index = $(this).attr("value");

                    //first empties and return new images, if not empty object
                    $("#input-images").empty();
                    if (response.items[index].images[0] == null || response.items[index].images[0] == "") {
                        $("#description").html("Womp Womp..no pretty picture here.. :'(");
                    } else {
                        var imageBox = $("<img class='imageBox'>").attr("src", response.items[index].images[0]);
                        $("#input-images").append(imageBox);
                    }

                    //first empties and return new description, if not empty object
                    $("#description").empty();
                    if (response.items[index].description == null || response.items[index].description == "") {

                        $("#description").html("Womp Womp..no descriptions here.. :'(");
                    } else {

                        $("#description").html(response.items[index].description);
                    }

                    // if ($(this).attr("upc") == null || $(this).attr("upc") == "") {
                    //     console.log("I got ean");
                    //     code = $(this).attr("ean");
                    // } else {
                    //     console.log("I got upc");
                    //     code = $(this).attr("upc");
                    // }
                });
            })
            .fail(function() {
                //say something like search is invalid here
                console.log("Submit error")
                alert("You failed");
            });
    });

});
