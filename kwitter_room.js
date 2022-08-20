// Your web app's Firebase configuration

var firebaseConfig = { apiKey: "AIzaSyDSMHsJWjsBwnh0Hnqyb6qOAzstzChu0uc",
authDomain: "kwitter-6c22c.firebaseapp.com", 
databaseURL: "https://kwitter-6c22c-default-rtdb.firebaseio.com",
 projectId: "kwitter-6c22c",
  storageBucket: "kwitter-6c22c.appspot.com",
   messagingSenderId: "917005282546",
    appId: "1:917005282546:web:5b0c51a2c6ce901f53f46b" }; 

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}