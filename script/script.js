$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = false;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			/*
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "קצת עברית עד השלב הבא!";
			}
			
			note.html(message);
			*/
		}
	});
	
});


/**************************************************/

var canvas = document.getElementById('canvasid'),
    width = canvas.width,
    height = canvas.height,
    ctx = canvas.getContext('2d');

function drawTimer(deg) {
  var x = width / 2, // center x
      y = height / 2, // center y
      radius = 100,
      startAngle = 0,
      endAngle = deg * (Math.PI/180),
      counterClockwise = true;

  ctx.clearRect(0, 0, height, width);
  ctx.save();

  ctx.fillStyle = '#fe6';

  // Set circle orientation
  ctx.translate(x, y);
  ctx.rotate(-90 * Math.PI/180);

  ctx.beginPath();
  ctx.arc(0, 0, radius, startAngle, endAngle, counterClockwise);
  ctx.lineTo(0, 0);
  ctx.fill();
}

setInterval(function() {

  // Determine the amount of time elapsed; converted to degrees
  var deg = (elapsedTime / totalTime) * 360;

  drawTimer(deg);

}, 1000);
