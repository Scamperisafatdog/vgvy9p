const firebaseConfig = {
    apiKey: "AIzaSyBbfZFuaBta9KM2QcLK_kpnR0NFv6Hpi8I",
    authDomain: "kwitter-7fa87.firebaseapp.com",
    databaseURL: "https://kwitter-7fa87-default-rtdb.firebaseio.com",
    projectId: "kwitter-7fa87",
    storageBucket: "kwitter-7fa87.appspot.com",
    messagingSenderId: "51934900117",
    appId: "1:51934900117:web:3719f9b9b8e3649d61109c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"

});
}