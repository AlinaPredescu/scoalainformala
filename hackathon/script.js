function login(event){
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(
        document.getElementById("username").value, 
        document.getElementById("password").value)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}
