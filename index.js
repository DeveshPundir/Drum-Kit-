var numberofdrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrums;i++)    
  {  document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var button=this.innerHTML;
        makesound(button);
        
        buttonAnimation(button);
        
      
    });
  }
  document.addEventListener("keypress",function(event)
  {
   makesound(event.key);
   buttonAnimation(event.key);
  }
  );
  function makesound(key)
  {
    switch (key) {
        case "w":
            var audio= new Audio('sounds_tom-1.mp3');
            audio.play();
            
            break;
    
            case "a":
                var audio= new Audio('sounds_tom-2.mp3');
                audio.play();
                
                break;
    
                case "s":
                    var audio= new Audio('sounds_tom-3.mp3');
                    audio.play();
                    
                    break;
    
                    case "d":
                        var audio= new Audio('sounds_tom-4.mp3');
                        audio.play();
                        
                        break;
    
                        case "j":
                            var audio= new Audio('sounds_snare.mp3');
                            audio.play();
                            
                            break;
    
                            case "k":
                                var audio= new Audio('sounds_crash.mp3');
                                audio.play();
                                
                                break;
                                case "l":
                                    var audio= new Audio('sounds_kick-bass.mp3');
                                    audio.play();
                                    
                                    break;
                            
    
                                
        default: console.log(key);
            break;
    }
  }
  function buttonAnimation(currentkey)
  {
     var k= document.querySelector("."+currentkey);
     k.classList.add("pressed");
      setTimeout(function()
      {
           k.classList.remove("pressed");
      },100);

  }