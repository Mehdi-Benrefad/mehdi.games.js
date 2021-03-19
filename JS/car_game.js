document.addEventListener("keydown", event => {
  if(event.key==="ArrowLeft"){moveLeft();}
  if(event.key==="ArrowRight"){moveRight();}
});


var character = document.getElementById("character");
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    }
}
var block = document.getElementById("block");
block.style.animation = "none";
var counter = 0;

function start(){
    //if(counter<100){}
    
    block.style.animation = "slide 1s infinite linear";
    block.addEventListener('animationiteration', () => {
        var random = Math.floor(Math.random() * 3)+1;
        
            left = random * 100;
        
        block.style.left = left + "px";
        counter++;

        if (counter%50==0 ){
            if(document.getElementById("leftpart").style.backgroundColor=="green"){
                document.getElementById("image1").src="images/car_game/treenight.png";
                document.getElementById("image2").src="images/car_game/treenight.png";
                document.getElementById("image3").src="images/car_game/treenight.png";
                document.getElementById("image4").src="images/car_game/treenight.png";
                document.getElementById("image5").src="images/car_game/treenight.png";
                document.getElementById("image6").src="images/car_game/treenight.png";
                document.getElementById("image7").src="images/car_game/treenight.png";
                document.getElementById("image8").src="images/car_game/treenight.png";
                document.getElementById("image9").src="images/car_game/treenight.png";
                document.getElementById("image10").src="images/car_game/treenight.png";
                document.getElementById("image11").src="images/car_game/treenight.png";
                document.getElementById("image12").src="images/car_game/treenight.png";


                document.getElementById('leftpart').style.backgroundColor="#191970";
                document.getElementById('rightpart').style.backgroundColor="#191970";
            }else{

                document.getElementById("image1").src="images/car_game/tree.png";
                document.getElementById("image2").src="images/car_game/tree.png";
                document.getElementById("image3").src="images/car_game/tree.png";
                document.getElementById("image4").src="images/car_game/tree.png";
                document.getElementById("image5").src="images/car_game/tree.png";
                document.getElementById("image6").src="images/car_game/tree.png";
                document.getElementById("image7").src="images/car_game/tree.png";
                document.getElementById("image8").src="images/car_game/tree.png";
                document.getElementById("image9").src="images/car_game/tree.png";
                document.getElementById("image10").src="images/car_game/tree.png";
                document.getElementById("image11").src="images/car_game/tree.png";
                document.getElementById("image12").src="images/car_game/tree.png";


                document.getElementById('leftpart').style.backgroundColor="green";
                document.getElementById('rightpart').style.backgroundColor="green";
            }
            
        }
        /*
         if (counter%50==0 ){
                    if(document.getElementById("leftpart").style.backgroundColor=="green"){
                        document.getElementById("image1").src="images/car_game/treenight.png";
                        document.getElementById("image2").src="images/car_game/treenight.png";
                        document.getElementById("image3").src="images/car_game/treenight.png";
                        document.getElementById("image4").src="images/car_game/treenight.png";
                        document.getElementById("image5").src="images/car_game/treenight.png";
                        document.getElementById("image6").src="images/car_game/treenight.png";
                        document.getElementById("image7").src="images/car_game/treenight.png";
                        document.getElementById("image8").src="images/car_game/treenight.png";
                        document.getElementById("image9").src="images/car_game/treenight.png";
                        document.getElementById("image10").src="images/car_game/treenight.png";
                        document.getElementById("image11").src="images/car_game/treenight.png";
                        document.getElementById("image12").src="images/car_game/treenight.png";
        
        
                        document.getElementById('leftpart').style.backgroundColor="#191970";
                        document.getElementById('rightpart').style.backgroundColor="#191970";
                    }else{

                        document.getElementById("image1").src="images/car_game/tree.png";
                        document.getElementById("image2").src="images/car_game/tree.png";
                        document.getElementById("image3").src="images/car_game/tree.png";
                        document.getElementById("image4").src="images/car_game/tree.png";
                        document.getElementById("image5").src="images/car_game/tree.png";
                        document.getElementById("image6").src="images/car_game/tree.png";
                        document.getElementById("image7").src="images/car_game/tree.png";
                        document.getElementById("image8").src="images/car_game/tree.png";
                        document.getElementById("image9").src="images/car_game/tree.png";
                        document.getElementById("image10").src="images/car_game/tree.png";
                        document.getElementById("image11").src="images/car_game/tree.png";
                        document.getElementById("image12").src="images/car_game/tree.png";
        
        
                        document.getElementById('leftpart').style.backgroundColor="green";
                        document.getElementById('rightpart').style.backgroundColor="green";
                    }
                    
                }
        */
       /* 
        if(counter<40){
            block.style.animation = "slide 1s infinite linear";
        }
        else if(counter<80){
            block.style.animation = "slide 0.8s infinite linear";
        }
        else if(counter<120){
            block.style.animation = "slide 0.6s infinite linear";
        }
        */
    });
    setInterval(function(){
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        if(characterLeft==blockLeft-100 && blockTop<500 && blockTop>300){
            alert("Game over. Score: " + counter);
            block.style.animation = "none";
            counter=0;
            
        }
        
    },1);


}

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);


















/*
var character = document.getElementById("character");
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    }
}
*/