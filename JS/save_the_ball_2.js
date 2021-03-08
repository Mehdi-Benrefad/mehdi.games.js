var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var st=false;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0 && st==true){
        character.style.top = (characterTop+2)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        
            alert("Game over. Score: "+(counter));
           // character.style.top = "2px";
            st=false;
            block.style.animation="";
            hole.style.animation="";
            block.classList.remove('animate');
            hole.classList.remove('animate');
            character.style.top = 200 + "px";
            counter=0;
           
        
       
    }else if(counter>10){
        block.style.animation="block 1.8s infinite linear";
        hole.style.animation="block 1.8s infinite linear";
    }else if(counter>18){
        block.style.animation="block 1.5s infinite linear";
        hole.style.animation="block 1.5s infinite linear";
    }else if(counter>26){
        block.style.animation="block 1s infinite linear";
        hole.style.animation="block 1s infinite linear";
    }
},10);

function start(){
    block.classList.add('animate');
    hole.classList.add('animate');
    st=true;
    character.style.top = 200 + "px";
   
   
}



function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}