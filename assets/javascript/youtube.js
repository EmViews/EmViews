function tplawesome(e, t) { res = e;
    for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) {
            return t[n][r] }) }
    return res }

$(function() {
    $(document).on("click", ".btn", function() {
        event.preventDefault();
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#product-input").val()+"review").replace(/%20/g, "+"),
            maxResults: 5,
            order: "viewCount",
            publishedAfter: "2000-01-01T00:00:00Z"
        });

        request.execute(function(response) {
            var results = response.result;
            $.each(results.items, function(index, item) {
                $.get("tpl/item.html", function(data) {
                    $("#youtube-results").append(tplawesome(data, [{ "title": item.snippet.title, "videoid": item.id.videoId }]));
                });
            });
        })
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyDgExUpyuvNlKbGk8O27hoNQISlT_9huuk");
    gapi.client.load("youtube", "v3", function() {
    });
};

// search= 
// queryURLforMobile= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q="+ search+"&type=video&videoDefinition=standard&key={AIzaSyDgExUpyuvNlKbGk8O27hoNQISlT_9huuk}"
// queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=puppy&type=video&videoDefinition=high&key={AIzaSyDgExUpyuvNlKbGk8O27hoNQISlT_9huuk}"
 


// $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         // After the data comes back from the API
//         .done(function(response) {