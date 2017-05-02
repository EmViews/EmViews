//If your confuse only edit this serach-result.js :)
 var productQuery;
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

        var APIKey = "b7zex42y8vhz2wr56d8jwq5y";
        productQuery = $("#product-input").val().trim()
        // .replace(/ /g, "+");
        var sort= "relevance";
        var categoryId;
        console.log("You submitted: " + productQuery);
        var querySearch = 
        "http://api.walmartlabs.com/v1/search?apiKey=" +APIKey +"&query="+productQuery+ "&responseGroup=full";
        // "http://api.walmartlabs.com/v1/search?apiKey=b7zex42y8vhz2wr56d8jwq5y&query=overwatch&responseGroup=full";

        $.ajax({
                url: querySearch,
                method: "GET"
        })
        .done(function(response) {
            //check I receive a return
            // console.log("Calling response:");
            // console.log(response);

            for (var i = 0; i < response.items.length; i++) {
                //need to grab UPC, image, title
                //searchItem div have Title link,
                var searchItem = $("<div class='search-item col-lg-3' id='item'>");

                //create div with Class titleItem, with title,upc, ean, and value attributes,value is used for indexing
                var title = $("<div class='title-item canClick'>").html("<h4>" + response.items[i].name + "</h4>");
                title.attr("title", response.items[i].name);
                title.attr("value", i);
                title.attr("upcSearch", response.items[i].upc);
                title.attr("ratingSearch", response.items[i].customerRating);
                $('.title-item').css('cursor', 'pointer');

                //create div with Class imageItem and canClick, with title, upc, ean, and value attributes, value is used for indexing
                var image = $("<img class='image-item canClick'>").attr("src", response.items[i].largeImage);
                image.attr("title", response.items[i].name);
                image.attr("value", i);
                image.attr("upcSearch", response.items[i].upc);
                image.attr("ratingSearch", response.items[i].customerRating);
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

                $('#name-div').html(`<h1>${$(this).attr(`title`)}</h1>`);
                $('#rating-div').html(`<p>${$(this).attr(`ratingSearch`)} &nbsp</p>`);
                $('#favorite-div').html(`<button id="addToFavorites" type="button" class="btn btn-danger" upcAdd="${$(this).attr(`upcSearch`)}">Add to Favorites</button>`)

                //first empties and return new images, if not empty object
                $("#input-images").empty();
                if (response.items[index].largeImage == null || response.items[index].largeImage == "") {
                    $("#input-images").html("Womp Womp..no pretty picture here.. :'(");
                } 
                //prepends primary images and appends secondary images by for loop
                else {
                    var imageBox = $("<img class='imageBox' id='primary-image'>").attr("src", response.items[index].largeImage);
                    $("#input-images").prepend(imageBox);

                    for (var i =0; i < response.items[index].imageEntities.length; i++){
                        console.log("response.items[index].imageEntities[i].entityType")
                        if (response.items[index].imageEntities[i].entityType == "SECONDARY"){
                            var imageBox2 = $("<img class='imageBox' id='secondary-image'>").attr("src", response.items[index].imageEntities[i].largeImage);

                            $("#input-images").append(imageBox2);
                        }
                    }
                }

                //first empties and return new description, if not empty object
                $("#description").empty();
                if (response.items[index].longDescription == null || response.items[index].longDescription == "") {

                    $("#description").html("Womp Womp..no descriptions here.. :'(");
                } else {
                    // var formattedHTML = response.items[index].longDescription;
                    // var stringHTML = JSON.stringify(formattedHTML);
                    var decodedHTML = decodeHtml(response.items[index].longDescription);

                    $("#description").prepend(decodedHTML);
                }
            });
        })
        .fail(function() {
            //say something like search is invalid here

            console.log("Submit error")

        });
        
    });

});

//add long and short descriptions
//add specs table
//add comments
