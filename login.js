// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("Logined Successfully");
      var aaaa = success.user.uid;
      localStorage.setItem("uid", aaaa);
      console.log(aaaa);

      window.location.replace("index.html");
      // localStorage.setItem(success,user,uid)
    })
    .catch(function (err) {
      alert("login error" + err);
    });

  console.log(obj);
};
