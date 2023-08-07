/*document.querySelector(".w").addEventListener("click",tom1);
document.querySelector(".a").addEventListener("click",tom2);
document.querySelector(".s").addEventListener("click",tom3);
document.querySelector(".d").addEventListener("click",tom4);
document.querySelector(".j").addEventListener("click",crash);
document.querySelector(".k").addEventListener("click",snare);
document.querySelector(".l").addEventListener("click",kick);
document.addEventListener("keydown",function(event){
    var key=event.key;
    switch(key)
    {
      case "w":
        tom1();
        break;
      case "a":
        tom2();
      case "s":
        tom3();
      case "d":
        tom4();
      case "j":
        crash();
      case "k":
        snare();
      case "l":
        kick();
    }
    
});


function tom1(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/tom-1.mp3");
      } else {
        x.setAttribute("src","./sounds/tom-1.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}
function tom2(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/tom-2.mp3");
      } else {
        x.setAttribute("src","./sounds/tom-2.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}
function tom3(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/tom-3.mp3");
      } else {
        x.setAttribute("src","./sounds/tom-3.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}
function tom4(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/tom-4.mp3");
      } else {
        x.setAttribute("src","./sounds/tom-4.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}
function crash(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/crash.mp3");
      } else {
        x.setAttribute("src","./sounds/crash.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}
function snare(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/snare.mp3");
      } else {
        x.setAttribute("src","./sounds/snare.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}
function kick(){
    var x=document.createElement("AUDIO");
    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","./sounds/kick-bass.mp3");
      } else {
        x.setAttribute("src","./sounds/kick-bass.ogg");
      }
    
      x.setAttribute("autoplay", "autoplay");
      document.body.appendChild(x);
}*/
var numOfButtons=document.querySelectorAll(".img").length;
for(var i=0;i<numOfButtons;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonnum=this.innerHTML;
    shadowbutton(buttonnum);
    playsound(buttonnum);
  });
}
document.addEventListener("keydown",function(event){
  var y=event.key;
  shadowbutton(y);
  playsound(y);
});
function playsound(x)
{
  switch(x)
  {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
   case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
   case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;  
   case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
   case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
   case "k":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
   case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}
function shadowbutton(x)
{
  switch(x)
  {
    case "w":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break;
   case "a":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break;    
    case "s":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break;
   case "d":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break;    
    case "j":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break;
   case "k":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break; 
   case "l":
      document.querySelector("."+x).classList.add("shadow");
      setTimeout(function(){document.querySelector("."+x).classList.remove("shadow");},1000);
      break;        
  }
  
}
