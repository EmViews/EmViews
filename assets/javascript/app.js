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
        // $("#navbarTop").hide();
        // $("#searchResultsFirst").hide();
        // $("#searchResultsSecond").hide();
        // $("#mainBody").hide();
        // $("#videos").hide();
        // $("#reddit-row").hide();
        // $("#youtubes").hide();

        $(document).on('click', "#submit-button2", function() {
            $("#navbarStart").hide(800);
            // document.getElementById("navbarTop").style.display="block";
            $("#navbarTop").show(800);
            $("#searchResultsFirst").show(800);
        });

        $(document).on('click', '#searchResultsFirst', function() {
            event.preventDefault();
            $("#searchResultsFirst").hide(800);
            $("#searchResultsSecond").show(800);
            $("#mainBody").show(800);
            $("#videos").show(800);
        });

        $(document).on('click', '#submit-button1', function() {
            event.preventDefault();
            $("#searchResultsSecond").hide(800);
            $("#mainBody").hide(750);
            $("#videos").hide(750);
            $("#searchResultsFirst").show(800);
        });
        $(document).on("click", "#productBtn", function() {

            event.preventDefault();
            $("#pictures").show(800);
            $("#specifications").show(800);
            $("#reddit-row").hide(800);
            $("#comments").show(800);
            $("#youtubes").hide(800);
            $("#productBtn").addClass("active");
            $("#redditBtn").removeClass("active")
            $("#youtubeBtn").removeClass("active");
        })
        $(document).on("click", "#redditBtn", function() {
            event.preventDefault();
            $("#pictures").hide(800);
            $("#specifications").hide(800);
            $("#reddit-row").show(750);
            $("#comments").hide(800);
            $("#youtubes").hide(750);
            $("#productBtn").removeClass("active");
            $("#redditBtn").addClass("active")
            $("#youtubeBtn").removeClass("active");
        });
        $(document).on("click", "#youtubeBtn", function() {
            event.preventDefault();
            $("#pictures").hide(800);
            $("#specifications").hide(800);
            $("#reddit-row").hide(750);
            $("#comments").hide(800);
            $("#youtubes").show(900);
            $("#productBtn").removeClass("active");
            $("#redditBtn").removeClass("active")
            $("#youtubeBtn").addClass("active");
        });
    })
    // -----------------END OF DOCUMENT READY ---------------
