$(document).on('click', '.search-button', function() {
    event.preventDefault();
    searchQuery = encodeURIComponent($("#product-input").val() + " review").replace(/%20/g, "+");
    $("#youtube-results").empty();
    queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=" + searchQuery + "&type=video&videoDefinition=high&key=AIzaSyDgExUpyuvNlKbGk8O27hoNQISlT_9huuk"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var items = response.items;
        for (var i = 0; i < items.length; i++) {
            
            var element = $("<div class='items'>")
            var title = $("<h3>").html(items[i].snippet.title);
            var video = $(`<iframe class='video w100' width='854' height='480' src='//www.youtube.com/embed/${items[i].id.videoId}' frameborder='0' allowfullscreen></iframe>`);
            element.append(title);
            element.append(video);
            $("#youtube-results").append(element);
        }
    })
})
