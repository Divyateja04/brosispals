function welcome() {
	var time = new Date().getHours();
	var greeting;
	if (time < 12) {
		greeting = "A Very Warm Good Morning !"
	}else if (time >= 12 && time <= 16) {
		greeting = "A Very Warm Good After Noon !"
	}else if(time > 16){
		greeting = "A Very Warm Good Evening !"
	}else{
		greeting = "";
	}
	document.getElementById("welcomegreet").textContent = greeting;	
}
welcome();


function gettimefunc(tilldate,id){
	// Update the count down every 1 second
	var x =setInterval(function() {
	  // Get todays date and time
	  var now = new Date().getTime();
	  // Find the distance between now an the count down date
	  var tilldatecalc = new Date(tilldate).getTime();

	  var distance = tilldatecalc - now;

	  console.log(tilldatecalc);
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	  // Display the result in the element with id="demo"
	  document.getElementById(id).textContent = "This Opens in " + days + " Days " + hours + " Hours "
	  + minutes + " Minutes " + seconds + " Seconds ";
	  // If the count down is finished, write some text 
	  if (distance < 0) {
	  	clearInterval(x);
	    document.getElementById(id).textContent = "EXPIRED";
	  }
	}, 1000);
}

var countdown = gettimefunc("Dec 31,2018 00:00:00","welcome");//Change Date in the format Month Date , Year HH:MM:SS




