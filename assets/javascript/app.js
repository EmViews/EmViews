$(document).ready(function() {

        // UI modification
        // $("#navbar-top").hide();
        // $("#search-results-first").hide();
        // $("#search-results-second").hide();
        // $("#main-body").hide();
        // $("#videos").hide();
        // $("#reddit-row").hide();
        // $("#youtubes").hide();

        $(document).on('click', "#submit-button2", function() {
            $("#navbar-start").hide(1000);
            $("#navbar-top").show(1000);
            $("#search-results-first").show(1000);
        });

        $(document).on('click', '#search-results-first', function() {
            event.preventDefault();
            $("#search-results-first").hide(750);
            $("#search-results-second").show(750);
            $("#main-body").show(1000);
            $("#videos").show(1000);
        });

        $(document).on('click', '#submit-button1', function() {
            event.preventDefault();
            $("#search-results-second").hide(1000);
            $("#main-body").hide(750);
            $("#videos").hide(750);
            $("#search-results-first").show(1000);
        });
        $(document).on("click", "#product-btn", function() {

            event.preventDefault();
            $("#picture-div").show(1000);
            $("#specs-div").show(1000);
            $("#reddit-row").hide(1000);
            $("#comments").show(1000);
            $("#youtubes").hide(1000);
            $("#product-btn").addClass("active");
            $("#reddit-btn").removeClass("active")
            $("#youtube-btn").removeClass("active");
        })
        $(document).on("click", "#reddit-btn", function() {
            event.preventDefault();
            $("#picture-div").hide(1000);
            $("#specs-div").hide(1000);
            $("#reddit-row").show(1000);
            $("#comments").hide(1000);
            $("#youtubes").hide(750);
            $("#product-btn").removeClass("active");
            $("#reddit-btn").addClass("active")
            $("#youtube-btn").removeClass("active");
        });
        $(document).on("click", "#youtube-btn", function() {
            event.preventDefault();
            $("#picture-div").hide(1000);
            $("#specs-div").hide(1000);
            $("#reddit-row").hide(750);
            $("#comments").hide(1000);
            $("#youtubes").show(1000);
            $("#product-btn").removeClass("active");
            $("#reddit-btn").removeClass("active")
            $("#youtube-btn").addClass("active");
        });
    })
    // -----------------END OF DOCUMENT READY ---------------
