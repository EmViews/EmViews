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
	// 	if ($('#registerPassword1') != $('#registerPassword2')) {

	// 	}
	// }

	$('#signUpSubmit').on('click', function() {
		firebase.auth().createUserWithEmailAndPassword($('#registerEmail').val().trim(), $('#registerPassword1').val().trim()).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorCode);
		  console.log(errorMessage);
		  // ...
		});
	});

	$('#logInSubmit').on('click', function() {
		firebase.auth().signInWithEmailAndPassword($('#logInEmail').val().trim(), $('#logInPassword').val().trim()).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorCode);
		  console.log(errorMessage);
		  // ...
		});
	});

	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	  console.log(errorCode);
	  console.log(errorMessage);
	});

});