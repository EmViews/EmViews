var config = {
    apiKey: "AIzaSyD5_w1GE5wacfN-yQrtBI5XVPlzqT01v1w",
    authDomain: "emviews-c41e8.firebaseapp.com",
    databaseURL: "https://emviews-c41e8.firebaseio.com",
    projectId: "emviews-c41e8",
    storageBucket: "emviews-c41e8.appspot.com",
    messagingSenderId: "530771491172"
};

firebase.initializeApp(config);

var user = firebase.auth().currentUser;
var populateFavorites;

$('#logInLogIn').on('click', function() {
    firebase.auth().signInWithEmailAndPassword($('#logInEmail').val().trim(), $('#logInPassword').val().trim()).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode.length) {
            $('#logInErrors').html(`${errorCode}: ${errorMessage}`);
        } else {
            $('#logInErrors').empty();
        }
        // ...
    });
});

$('#logInGoogleButton').on('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...});
        if (errorCode.length) {
            $('#logInErrors').html(`${errorCode}: ${errorMessage}`);
        } else {
            $('#logInErrors').empty();
        }
        console.log(email);
        console.log(credential);
    });
});

$('#signUpLogIn').on('click', function() {
    firebase.auth().createUserWithEmailAndPassword($('#registerEmail').val().trim(), $('#registerPassword1').val().trim()).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode.length) {
            $('#signUpErrors').html(`${errorCode}: ${errorMessage}`);
        } else {
            $('#signUpErrors').empty();
        }
        // ...
    });
});

$('#signUpGoogleButton').on('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...});
        if (errorCode.length) {
            $('#signUpErrors').html(`${errorCode}: ${errorMessage}`);
        } else {
            $('#signUpErrors').empty();
        }
        console.log(email);
        console.log(credential);
    });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $('#logInModal').modal('hide');
        $('#signUpModal').modal('hide');
        $('#authButtons').html(`
            <button id="logOut" type="button" class="btn btn-default navbar-btn navbar-right">Log Out</button>
            <button id="favorites" type="button" class="btn btn-default navbar-btn navbar-right">Favorites</button>
        `);
    } else {
        // No user is signed in.
        $('#authButtons').html(`
            <button id="sign-up-button" type="button" class="btn btn-default navbar-btn navbar-right" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
            <button id="sign-in-button" type="button" class="btn btn-default navbar-btn navbar-right" data-toggle="modal" data-target="#logInModal">Log In</button>
        `);
    }
});

$(document).on('click', '#logOut', function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
});

$(document).on('click', '#addToFavorites', function() {
    if (user) {
        // User is signed in.
        firebase.database().ref('/users').child(user.uid).child('favorites').$add({
            "upcFirebase": $(this).attr('upcAdd')
        });
    } else {
        // No user is signed in.
        $('#favoriteError-div').html(`&nbsp Must be logged in.`)
    }
});

firebase.database().ref('/users').child(user.uid).child('favorites').on('value', function(snapshot) {
    // Loop through users in order with the forEach() method. The callback
    // provided to forEach() will be called synchronously with a DataSnapshot
    // for each child:
    var query = firebase.database().ref("users").child(user.uid).child('favorites');
    query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                var key = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();
                var APIKey = "b7zex42y8vhz2wr56d8jwq5y";
                productQuery = childData.upcFirebase
                // .replace(/ /g, "+");
                // var sort= "relevance";
                // var categoryId;
                console.log("The UPC of the requested favorite is: " + productQuery);
                var querySearch = 
                "http://api.walmartlabs.com/v1/search?apiKey=" + APIKey + "&query=" + productQuery + "&responseGroup=full";
                // "http://api.walmartlabs.com/v1/search?apiKey=b7zex42y8vhz2wr56d8jwq5y&query=overwatch&responseGroup=full";

                $.ajax({
                        url: querySearch,
                        method: "GET"
                })
                .done(function(response) {
                    //check I receive a return
                    // console.log("Calling response:");
                    // console.log(response);

                    //need to grab UPC, image, title
                    //searchItem div have Title link,
                    var searchItem = $("<div class='search-item col-lg-3' id='item'>");

                    //create div with Class titleItem, with title,upc, ean, and value attributes,value is used for indexing
                    var title = $("<div class='title-item canClick'>").html("<h4>" + response.items[0].name + "</h4>");
                    title.attr("title", response.items[0].name);
                    title.attr("value", 0);
                    title.attr("upcSearch", response.items[0].upc);
                    title.attr("ratingSearch", response.items[0].customerRating);
                    $('.title-item').css('cursor', 'pointer');

                    //create div with Class imageItem and canClick, with title, upc, ean, and value attributes, value is used for indexing
                    var image = $("<img class='image-item canClick'>").attr("src", response.items[0].largeImage);
                    image.attr("title", response.items[0].name);
                    image.attr("value", 0);
                    image.attr("upcSearch", response.items[0].upc);
                    image.attr("ratingSearch", response.items[0].customerRating);
                    $('.image-item').css('cursor', 'pointer');

                    //add image and title into searchItem
                    searchItem.append(image).append(title);

                    searchItem.appendTo("#favorite-result");
                    $("#favorite-result").children().removeClass("col-lg-3"); // what is the line about?? why don't you just manually remove col-lg-3 from the var searchItem above??
                    // $("#search-result-1").append(searchItem);
                    // $("#search-result-2").append(searchItem2);

                    //when click any of the image or title... 
                    $(document).on("click", ".canClick", function() {

                        //gets value for index when "this" item is clicked
                        var index = $(this).attr("value");

                        $('#name-div').html(`<h1>${$(this).attr(`title`)}</h1>`);
                        $('#rating-div').html(`<p>${$(this).attr(`ratingSearch`)} &nbsp</p>`);
                        $('#favorite-div').html(`<button id="addToFavorites" type="button" class="btn btn-danger" upcAdd="${$(this).attr(`upcSearch`)}">Remove from Favorites</button>`)

                        //first empties and return new images, if not empty object
                        $("#input-images").empty();
                        if (response.items[index].largeImage == null || response.items[index].largeImage == "") {
                            $("#input-images").html("Womp Womp..no pretty picture here.. :'(");
                        } 
                        //prepends primary images and appends secondary images by for loop
                        else {
                            var imageBox = $("<img class='imageBox' id='primary-image'>").attr("src", response.items[index].largeImage);
                            $("#input-images").prepend(imageBox);

                            for (var i =0; i < response.items[index].imageEntities.length; i++){
                                console.log("response.items[index].imageEntities[i].entityType")
                                if (response.items[index].imageEntities[i].entityType == "SECONDARY"){
                                    var imageBox2 = $("<img class='imageBox' id='secondary-image'>").attr("src", response.items[index].imageEntities[i].largeImage);
                                    $("#input-images").append(imageBox2);
                                }
                            }
                        }

                        //first empties and return new description, if not empty object
                        $("#description").empty();
                        if (response.items[index].longDescription == null || response.items[index].longDescription == "") {

                            $("#description").html("Womp Womp..no descriptions here.. :'(");
                        } else {
                            // var formattedHTML = response.items[index].longDescription;
                            // var stringHTML = JSON.stringify(formattedHTML);
                            var decodedHTML = decodeHtml(response.items[index].longDescription);

                            $("#description").prepend(decodedHTML);
                        }
                    });
                })
                .fail(function() {
                    //say something like search is invalid here

                    console.log("Favorites load error")

                });
            });
        });
});

// on favorites button click, hide search results, show favorites again, and replace favorites button with "back to search results" button
$(document).on('click', '#favorites', function() {
    $("#search-results-second").hide();
    $("#favorite-results").fadeIn(500);
    $('#authButtons').html(`
        <button id="logOut" type="button" class="btn btn-default navbar-btn navbar-right">Log Out</button>
        <button id="backToSearch" type="button" class="btn btn-default navbar-btn navbar-right">Back to Search Results</button>
    `);
});

// on "back to search results" button click, hide favorites, show search results again, and replace "back to search results" with favorites
$(document).on('click', '#backToSearch', function() {
    $("#favorite-results").hide();
    $("#search-results-second").fadeIn(500);
    $('#authButtons').html(`
        <button id="logOut" type="button" class="btn btn-default navbar-btn navbar-right">Log Out</button>
        <button id="favorites" type="button" class="btn btn-default navbar-btn navbar-right">Favorites</button>
    `);
});