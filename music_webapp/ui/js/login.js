
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
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }