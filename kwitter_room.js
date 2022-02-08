//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCk1pGaQIScKJojZkmRCcixiTya8_AuUd0",
    authDomain: "kwitterapp-15740.firebaseapp.com",
    databaseURL: "https://kwitterapp-15740-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-15740",
    storageBucket: "kwitterapp-15740.appspot.com",
    messagingSenderId: "726695965180",
    appId: "1:726695965180:web:f138f47d04e69dafd6c279"
  };


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}

function getData()
{  firebase.database().ref("/").on('value',
                                   
function(snapshot)
{ document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
                 
{ childKey  = childSnapshot.key;
 
Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}