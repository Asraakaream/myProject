 function user1() {    
 var user = document.getElementById('user').value;
 var pass = document.getElementById('pass').value;
 
   if (user == "asraa" && pass == "asraa") {
      window.open("table.html")
      alert ("correct username")
     
   } else {
      alert("incorrect username or password")
   }
} 