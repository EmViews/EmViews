$(document).ready(function() {
        // -----------------FIREBASE KEY ------------------------
        var config = {
			apiKey: "AIzaSyD5_w1GE5wacfN-yQrtBI5XVPlzqT01v1w",
		    authDomain: "emviews-c41e8.firebaseapp.com",
		    databaseURL: "https://emviews-c41e8.firebaseio.com",
		    projectId: "emviews-c41e8",
		    storageBucket: "emviews-c41e8.appspot.com",
		    messagingSenderId: "530771491172"
		};
		  
		firebase.initializeApp(config);
        // -----------------END OF FIREBASE KEY------------------

        // UI modification
        $("#navbarTop").hide();
        $("#searchResultsFirst").hide();
        $("#searchResultsSecond").hide();
        $("#mainBody").hide();
        $("#videos").hide();
        $("#reddit-row").hide();
        $("#youtubes").hide();

        $(document).on('click', "#submit-button2", function() {
            $("#navbarStart").hide();
            $("#navbarTop").show();
            $("#searchResultsFirst").show();
        });

        $(document).on('click', '#searchResultsFirst', function() {
            event.preventDefault();
            $("#searchResultsFirst").hide();
            $("#searchResultsSecond").show();
            $("#mainBody").show();
            $("#videos").show();
        });

        $(document).on('click', '#submit-button1', function() {
            event.preventDefault();
            $("#searchResultsSecond").hide();
            $("#mainBody").hide();
            $("#videos").hide();
            $("#searchResultsFirst").show();
        });
        $(document).on("click", "#productBtn", function() {

            event.preventDefault();
            $("#pictures").show();
            $("#specifications").show();
            $("#reddit-row").hide();
            $("#comments").show();
            $("#youtubes").hide();
        })
        $(document).on("click", "#redditBtn", function() {
            event.preventDefault();
            $("#pictures").hide();
            $("#specifications").hide();
            $("#reddit-row").show();
            $("#comments").hide();
            $("#youtubes").hide();
        })
        $(document).on("click", "#youtubeBtn", function() {
            event.preventDefault();
            $("#pictures").hide();
            $("#specifications").hide();
            $("#reddit-row").hide();
            $("#comments").hide();
            $("#youtubes").show();
        })


    })
    // -----------------END OF DOCUMENT READY ---------------
