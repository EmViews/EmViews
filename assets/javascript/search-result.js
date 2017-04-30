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

        //var productQuery = "nintendo switch";
        var productQuery = $("#product-input").val().trim().replace(/ /g, "+");
        console.log("You submit: "+productQuery);
        var querySearch = "https://api.upcitemdb.com/prod/trial/search?s=" + productQuery + "&match_mode=0&type=product";
        $.ajax({
                url: querySearch,
                method: "GET"
            })
            .done(function(response) {
                console.log(response);
                for (var i = 0; i < response.items.length; i++) {
                    //need to grab UPC, image, title
                    //searchItem div have Title link,
                    var searchItem = $("<div class='search-item' id='item'>");

                    //create div with Class titleItem, with title,upc, ean, and value attributes
                    var title = $("<div class='title-item canClick'>").html("<h4>" + response.items[i].title + "</h4>");
                    // console.log(title)
                    title.attr("title", response.items[i].title);
                    title.attr("upc", response.items[i].upc);
                    title.attr("ean", response.items[i].ean);
                    title.attr("value", i);
                    $('.title-item').css('cursor', 'pointer');


                    //create div with Class imageItem and canClick, with title, upc, ean, and value attributes
                    var image = $("<img class='image-item canClick'>").attr("src", response.items[i].images[0]);
                    image.attr("title", response.items[i].title);
                    image.attr("upc", response.items[i].upc);
                    image.attr("ean", response.items[i].ean);
                    image.attr("value", i);
                    $('.image-item').css('cursor', 'pointer');

                    console.log(response.items[i].ean);
                    //adding all the variables together
                    searchItem.append(image).append(title);

                    searchItem.appendTo("#search-result-1, #search-result-2");

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
            //When someone decided to be mischevous 
            .fail(function(){
                console.log("Submit error")
                alert("You failed");
            });

    });
});
