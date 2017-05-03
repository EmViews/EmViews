$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyD5_w1GE5wacfN-yQrtBI5XVPlzqT01v1w",
        authDomain: "emviews-c41e8.firebaseapp.com",
        databaseURL: "https://emviews-c41e8.firebaseio.com",
        projectId: "emviews-c41e8",
        storageBucket: "emviews-c41e8.appspot.com",
        messagingSenderId: "530771491172"
    };

    firebase.initializeApp(config);


    // function confirmPasswords() {
    //  if ($('#registerPassword1') != $('#registerPassword2')) {

    //  }
    // }

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
            console.log('signed in');
            $('#logInModal').modal('hide');
            $('#signUpModal').modal('hide');
            $('#authButtons1').html(`<li id="logOut"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Log Out</a></li>`);
        } else {
            // No user is signed in.
            $('#authButtons1').html(`
                <li id="sign-up-button" data-toggle="modal" data-target="#signUpModal"><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li id="sign-in-button" data-toggle="modal" data-target="#logInModal"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Log In</a></button>
            `);
            //<li id="sign-up-button" data-toggle="modal" data-target="#signUpModal"><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            //<li id="sign-in-button" data-toggle="modal" data-target="#logInModal"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        }
    });

    $(document).on('click', '#logOut', function() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('signed out');
        }).catch(function(error) {
            // An error happened.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    });
});
