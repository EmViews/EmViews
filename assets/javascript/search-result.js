$(document).ready(function() {

    console.log(response1);
    console.log(siteResponse);

    $(document).on("click", ".btn", function(event) {
        event.preventDefault();
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

            var title = $("<div class='titleItem canClick'>").html("<h4>" + response1.items[i].title + "</h4>");
            title.attr("title", response1.items[i].title);
            title.attr("upc", response1.items[i].upc);
            title.attr("ean", response1.items[i].ean);

            var image = $("<img class='imageItem canClick'>").attr("src", response1.items[i].images[0]);
            image.attr("title", response1.items[i].title);
            image.attr("upc", response1.items[i].upc);
            image.attr("ean", response1.items[i].ean);

            console.log(response1.items[i].ean);
            //adding all the variables together
            searchItem.append(image).append(title);

            $("#searchResult1").append(searchItem);
            $("#searchResult2").append(searchItem);
        }

        $(document).on("click", ".canClick", function() {

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
