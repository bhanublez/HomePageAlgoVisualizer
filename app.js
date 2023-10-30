// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqJYo-xSnEwU3A95hOFmcY9I86JEzGVw",
  authDomain: "light-alog-visualizer.firebaseapp.com",
  databaseURL: "https://light-alog-visualizer-default-rtdb.firebaseio.com",
  projectId: "light-alog-visualizer",
  storageBucket: "light-alog-visualizer.appspot.com",
  messagingSenderId: "980976183421",
  appId: "1:980976183421:web:a69ba781e7e4cbabdea914",
  measurementId: "G-ZCQWXVM6R4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var fullName = document.getElementById("fullname");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword");
window.signup = function (e) {
  if (password)
    if (
      fullName.value == "" ||
      contact.value == "" ||
      email.value == "" ||
      password.value == ""
    ) {
      alert("All Field Are Required");
    }
  if (password.value == copassword.value) {
  } else {
    alert("Password Confirmation is Wrong");
    return false;
  }

  e.preventDefault();
  var obj = {
    firstName: fullName.value,
    contact: contact.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
       window.location.replace("./index.html");
      // console.log(success.user.uid)
      alert("signup successfully");
    })
    .catch(function (err) {
      alert("Error in " + err);
    });
  console.log();
  console.log(obj);
};
