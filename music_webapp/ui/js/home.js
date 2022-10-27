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


//REGISTRATION

function registration()
{

  var username= document.getElementById("t1").value;
  var password= document.getElementById("t2").value;
  var confirm_password = document.getElementById("t3").value;
  var name= document.getElementById("t4").value;
  var surname= document.getElementById("t5").value;			
  var email= document.getElementById("t6").value;
  var dob= document.getElementById("t7").value;
  var pic= document.getElementById("t8").value;
  
      //email id expression code
  var username_expression = /^[a-zA-Z0-9]*$/;
  var password_expression = /^[a-z0-9]*$/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(username==''){
    alert('Please enter a username');
  }
  else if(password==''){
    alert('Please enter a password');
  }
  else if(name==''){
    alert('Please enter your name');
  }
  else if(surname==''){
    alert('Please enter your surname(s)');
  }
  else if(email==''){
    alert('Please enter your email');
  }
  else if(dob==''){
    alert('Please enter your date of birth');
  }

  else if(!username_expression.test(name))
  {
    alert('Your username must be letters and numbers only!');
  }
  else if(!password_expression.test(name))
  {
    alert('Your password must be lowercase letters and numbers only!');
  }
  else if (!filter.test(email))
  {
    alert('Invalid email');
  }
  else if(!letters.test(name))
  {
    alert('Your name must only include letters.');
  }
  else if(document.getElementById("t2").value.length > 8)
  {
    alert ('Password maximum length is 8');
  }
  else if(password != confirm_password)
  {
    alert ('Passwords do not match');
  }
  else
  {				                            
       alert('You are registered! We are redirecting you to the home page.');
       // Redirecting to other page or webste code. 
       window.location = "home-page.html"; 
  }
}
function clearFunc()
{
  document.getElementById("t1").value="";
  document.getElementById("t2").value="";
  document.getElementById("t3").value="";
  document.getElementById("t4").value="";
  document.getElementById("t5").value="";
  document.getElementById("t6").value="";
  document.getElementById("t7").value="";
  document.getElementById("t8").value="";
}


