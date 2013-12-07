function init(){
  clock();
  setInterval(clock,1000);
}

function clock(){
  var now = new Date();
  var size = 1;
  var ctx = document.getElementById('clock').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,300*size,300*size);
  ctx.translate(150*size,150*size);
  ctx.scale(size,size);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 8;
  ctx.lineCap = "butt";
  //ctx.lineCap = "square";
  //ctx.lineCap = "round";

  // background
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = "yellow";  
  ctx.arc(0,0,120,0,Math.PI*2,true);
  ctx.fill();

  // Hour marks
  ctx.fillStyle = "black";
  ctx.save();
  for (i=0;i<12;i++){
    //ctx.lineWidth = 2;
    ctx.beginPath();

    //ctx.translate(56,0);
    ctx.rotate(Math.PI/6);
    ctx.arc(108,0,6,0,Math.PI*2,true);
  
    //ctx.moveTo(100,0);
    //ctx.lineTo(120,0);
    //ctx.stroke();
    ctx.fill(); 
    


  }
  
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 1;
  for (i=0;i<60;i++){
    if (i%5!==0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      //ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr= now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec );
  ctx.strokeStyle = "black";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec );
  ctx.strokeStyle = "black";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(110,0);
  ctx.stroke();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(110,0);
  ctx.stroke();
  ctx.restore();

// Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#FF3300";
  ctx.fillStyle = "#FF3300";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(120,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  //ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "#555";
  //ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000000';
  ctx.arc(0,0,120,0,Math.PI*2,true);
  //ctx.stroke();
  ctx.restore();
}
window.onload = function(e){init()}