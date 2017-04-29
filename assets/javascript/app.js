$(document).ready(function() {
        // -----------------FIREBASE KEY ------------------------
        var config = {
            apiKey: "AIzaSyDBcUj9XDES0jIESlddtCodAWt8pWCfsLA",
            authDomain: "john-57aba.firebaseapp.com",
            databaseURL: "https://john-57aba.firebaseio.com",
            projectId: "john-57aba",
            storageBucket: "john-57aba.appspot.com",
            messagingSenderId: "309633750648"
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
            $("#navbarStart").hide(1000);
            $("#navbarTop").show(1000);
            $("#searchResultsFirst").show(1000);
        });

        $(document).on('click', '#searchResultsFirst', function() {
            event.preventDefault();
            $("#searchResultsFirst").hide(750);
            $("#searchResultsSecond").show(750);
            $("#mainBody").show(1000);
            $("#videos").show(1000);
        });

        $(document).on('click', '#submit-button1', function() {
            event.preventDefault();
            $("#searchResultsSecond").hide(1000);
            $("#mainBody").hide(750);
            $("#videos").hide(750);
            $("#searchResultsFirst").show(1000);
        });
        $(document).on("click", "#productBtn", function() {

            event.preventDefault();
            $("#pictures").show(1000);
            $("#specifications").show(1000);
            $("#reddit-row").hide(1000);
            $("#comments").show(1000);
            $("#youtubes").hide(1000);
            $("#productBtn").addClass("active");
            $("#redditBtn").removeClass("active")
            $("#youtubeBtn").removeClass("active");
        })
        $(document).on("click", "#redditBtn", function() {
            event.preventDefault();
            $("#pictures").hide(1000);
            $("#specifications").hide(1000);
            $("#reddit-row").show(750);
            $("#comments").hide(1000);
            $("#youtubes").hide(750);
            $("#productBtn").removeClass("active");
            $("#redditBtn").addClass("active")
            $("#youtubeBtn").removeClass("active");
        });
        $(document).on("click", "#youtubeBtn", function() {
            event.preventDefault();
            $("#pictures").hide(1000);
            $("#specifications").hide(1000);
            $("#reddit-row").hide(750);
            $("#comments").hide(1000);
            $("#youtubes").show(900);
            $("#productBtn").removeClass("active");
            $("#redditBtn").removeClass("active")
            $("#youtubeBtn").addClass("active");
        });
    })
    // -----------------END OF DOCUMENT READY ---------------
