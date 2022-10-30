const config = {
    apiKey: "AIzaSyBd6vOKfJ6-ZE17rNEvcXBDAnlEB2Ffsb0",
    authDomain: "teste-20566.firebaseapp.com",
    projectId: "teste-20566",
    storageBucket: "teste-20566.appspot.com",
    messagingSenderId: "749638654437",
    appId: "1:749638654437:web:7bfe2a6835f3d461dc770c"
};

firebase.initializeApp(config);

function gravar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    firebase.auth().createUserWithEmailAndPassword(email, senha);
}

function login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    firebase.auth().signInWithEmailAndPassword(email, senha);
}
