$(document).ready(function() {

        $(document).on('click', "#submit-button2", function() {
            event.preventDefault();
            $("#search-results-second").hide();
            $("#main-body").hide();
            $("#videos").hide();
            $("#search-results-first").fadeIn(1000);
            $(".navbar-brand").html("<h1 id='header-top'>EmViews</h1>").fadeIn(750)
            $("#navbar-start").animate({ top: "0px" }, "easing");
            $("#navbar-start").css({
                "position": "relative",
                "border": "1px solid grey",
                "height": "100px",
                "margin": "auto",
                "padding-top": "25px",
            });
            $("#main-logo").fadeOut(250)
            $("#result-heading").html('Showing Results for "' + productQuery + '":')
        });

        $(document).on('click', '#search-results-first', function() {
            event.preventDefault();
            $("#search-results-first").hide();
            $("#search-results-second").fadeIn(500);
            $("#main-body").fadeIn(500);
            $("#videos").fadeIn(500);
            $("#result-heading").html(`Search Results for "${productQuery}":`)
        });

        $(document).on("click", ".search-item", function() {
            event.preventDefault();
            $("#picture-div").fadeIn(750);
            $("#specs-div").fadeIn(750);
            $("#comments").fadeIn(750);
            $("#reddit-row").hide();
            $("#youtubes").hide();
            $("#product-btn").addClass("active");
            $("#reddit-btn").removeClass("active")
            $("#youtube-btn").removeClass("active");
        })

        $(document).on("click", "#product-btn", function() {

            event.preventDefault();
            $("#picture-div").fadeIn(750);
            $("#specs-div").fadeIn(750);
            $("#comments").fadeIn(750);
            $("#reddit-row").hide();
            $("#youtubes").hide();
            $("#product-btn").addClass("active");
            $("#reddit-btn").removeClass("active")
            $("#youtube-btn").removeClass("active");
        })
        
        $(document).on("click", "#reddit-btn", function() {
            event.preventDefault();
            $("#picture-div").hide();
            $("#specs-div").hide();
            $("#comments").hide();
            $("#reddit-row").fadeIn(750);
            $("#youtubes").hide();
            $("#product-btn").removeClass("active");
            $("#reddit-btn").addClass("active")
            $("#youtube-btn").removeClass("active");
        });

        $(document).on("click", "#youtube-btn", function() {
            event.preventDefault();
            $("#picture-div").hide();
            $("#specs-div").hide();
            $("#reddit-row").hide();
            $("#comments").hide();
            $("#youtubes").fadeIn(750);
            $("#product-btn").removeClass("active");
            $("#reddit-btn").removeClass("active")
            $("#youtube-btn").addClass("active");
        });
    })
    // -----------------END OF DOCUMENT READY ---------------
