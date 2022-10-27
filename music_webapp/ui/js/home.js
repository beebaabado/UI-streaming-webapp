
function openModal() {
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
    var letter = document.getElementById("letter");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var match = document.getElementById("match");


  myInput.onkeyup = function () {

    var lowerCaseLetters = /[a-z]/g; 
    var numbers = /[0-9]/g; 
    var maxLength = 8;

    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (myInput.value.length <= maxLength) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
  };

  confirmMyInput.onkeyup = function () {
    var passEqualsConfPass = (myInput.value ==confirmMyInput.value); 
    if (passEqualsConfPass) {
      match.classList.remove("invalid");
      match.classList.add("valid");
    } else {
      match.classList.remove("valid");
      match.classList.add("invalid");
    }
    enableButton(letter, number, length, match);
  };
}

  function enableButton(letter, number, length, match) {
    var button = document.getElementById("my_submit_button");
    var condition = (letter.classList.contains("valid") && number.classList.contains("valid") && length.classList.contains("valid") && match.classList.contains("valid"));
    if (condition) {
      button.disabled = false;
    }
  }
  
  function registerSubmit() {
  alert("You're registered!");
}




  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  /*function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }*/






//COUNTDOWN
  var countDownDateSamia = new Date("January 27, 2023 00:00:00").getTime();
  var countDownDateInhaler = new Date("February 17, 2023 00:00:00").getTime();
  var countDownDateGorillaz = new Date("February 24, 2023 00:00:00").getTime();

  // Samia
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distanceSamia = countDownDateSamia - now;
    var daysSamia = Math.floor(distanceSamia / (1000 * 60 * 60 * 24));
    var hoursSamia = Math.floor((distanceSamia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesSamia = Math.floor((distanceSamia % (1000 * 60 * 60)) / (1000 * 60));
    var secondsSamia = Math.floor((distanceSamia % (1000 * 60)) / 1000);
    document.getElementById("countDownSamia").innerHTML = daysSamia + "d " + hoursSamia + "h "
    + minutesSamia + "m " + secondsSamia + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDownSamia").innerHTML = "OUT NOW";
    }
  }, 1000);

  // Inhaler
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distanceInhaler = countDownDateInhaler - now;
    var daysInhaler = Math.floor(distanceInhaler / (1000 * 60 * 60 * 24));
    var hoursInhaler = Math.floor((distanceInhaler % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesInhaler = Math.floor((distanceInhaler % (1000 * 60 * 60)) / (1000 * 60));
    var secondsInhaler = Math.floor((distanceInhaler % (1000 * 60)) / 1000);
    document.getElementById("countDownInhaler").innerHTML = daysInhaler + "d " + hoursInhaler + "h "
    + minutesInhaler + "m " + secondsInhaler + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDownInhaler").innerHTML = "OUT NOW";
    }
  }, 1000);

  // Gorillaz
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distanceGorillaz = countDownDateGorillaz - now;
    var daysGorillaz = Math.floor(distanceGorillaz / (1000 * 60 * 60 * 24));
    var hoursGorillaz = Math.floor((distanceGorillaz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesGorillaz= Math.floor((distanceGorillaz % (1000 * 60 * 60)) / (1000 * 60));
    var secondsGorillaz = Math.floor((distanceGorillaz % (1000 * 60)) / 1000);
    document.getElementById("countDownGorillaz").innerHTML = daysGorillaz + "d " + hoursGorillaz + "h "
    + minutesGorillaz + "m " + secondsGorillaz + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDownGorillaz").innerHTML = "OUT NOW";
    }
  }, 1000);




//PLAYLISTS AND LIKED SONGS
  var myPlaylists = []
  var likedSongs = []


function registration(){

  var name= document.getElementById("t1").value;
  var email= document.getElementById("t2").value;
  var uname= document.getElementById("t3").value;
  var pwd= document.getElementById("t4").value;			
  var cpwd= document.getElementById("t5").value;
  
      //email id expression code
  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(name=='')
  {
    alert('Please enter your name');
  }
  else if(!letters.test(name))
  {
    alert('Name field required only alphabet characters');
  }
  else if(email=='')
  {
    alert('Please enter your user email id');
  }
  else if (!filter.test(email))
  {
    alert('Invalid email');
  }
  else if(uname=='')
  {
    alert('Please enter the user name.');
  }
  else if(!letters.test(uname))
  {
    alert('User name field required only alphabet characters');
  }
  else if(pwd=='')
  {
    alert('Please enter Password');
  }
  else if(cpwd=='')
  {
    alert('Enter Confirm Password');
  }
  else if(!pwd_expression.test(pwd))
  {
    alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  }
  else if(pwd != cpwd)
  {
    alert ('Password not Matched');
  }
  else if(document.getElementById("t5").value.length < 6)
  {
    alert ('Password minimum length is 6');
  }
  else if(document.getElementById("t5").value.length > 12)
  {
    alert ('Password max length is 12');
  }
  else
  {				                            
             alert('Thank You for Login & You are Redirecting to Campuslife Website');
       // Redirecting to other page or webste code. 
       window.location = "http://www.campuslife.co.in"; 
  }
}
function clearFunc()
{
  document.getElementById("t1").value="";
  document.getElementById("t2").value="";
  document.getElementById("t3").value="";
  document.getElementById("t4").value="";
  document.getElementById("t5").value="";
}