$(document).ready(function() {

    // calling this json object from data.js
    console.log(response1);


    $(document).on("click", ".search-button", function(event) {
        event.preventDefault();
        //empty out the product-input
        $("#product-input").empty();

        //Submit btn click, searches goes to Ajax to search

        //var productQuery = "nintendo switch";
        //var productQuery = $("#product-input").val().trim().replace(/ /g, "+");
        //var querySearch = "https://api.upcitemdb.com/prod/trial/search?s=" + ProductQuery + "&match_mode=0&type=product";
        // $.ajax({
        //         url: querySearch,
        //         method: "GET"
        //     })
        //     .done(function(response) {

        for (var i = 0; i < response1.items.length; i++) {
            //need to grab UPC, image, title
            //searchItem div have Title link,
            var searchItem = $("<div class='searchItem' id='item'>");

            //create div with Class titleItem, with title,upc, ean, and value attributes
            var title = $("<div class='titleItem canClick'>").html("<h4>" + response1.items[i].title + "</h4>");
            title.attr("title", response1.items[i].title);
            title.attr("upc", response1.items[i].upc);
            title.attr("ean", response1.items[i].ean);
            title.attr("value", i);

            //create div with Class imageItem and canClick, with title, upc, ean, and value attributes
            var image = $("<img class='imageItem canClick'>").attr("src", response1.items[i].images[0]);
            image.attr("title", response1.items[i].title);
            image.attr("upc", response1.items[i].upc);
            image.attr("ean", response1.items[i].ean);
            image.attr("value", i);

            console.log(response1.items[i].ean);
            //adding all the variables together
            searchItem.append(image).append(title);

            $("#searchResult1").append(searchItem);
            $("#searchResult2").append(searchItem);
        }

        $(document).on("click", ".canClick", function() {

            $("#input-images").empty();
            $("#input-specs").empty();
            //gets value for index when "this" item is clicked
            var index = $(this).attr("value");

                //create div with Class imageItem, with title, upc, ean, and value attributes
                var imageBox = $("<img class='imageBox'>").attr("src", response1.items[index].images[0]);
                $("#input-images").append(imageBox);


                //when i click any of the image or title, i get the upc/ean
            $("#input-specs").html(response1.items[index].description);

            if ($(this).attr("upc") == null || $(this).attr("upc") == "") {
                console.log("I got ean");
                code = $(this).attr("ean");
            } else {
                console.log("I got upc");
                code = $(this).attr("upc");
            }
        });
        // });

    });
});
