var solider = document.getElementById("solider");
var bombe = document.getElementById("bombe");
var counter=0;

function jump(){
    if(solider.classList == "animate"){return}
    solider.classList.add("animate");
    setTimeout(function(){
        solider.classList.remove("animate");
    },300);
}


function animatebomb(){
    bombe.classList.add("animatebomb");
    bombe.style.animation = "bombe 1s infinite linear";
    counter=0;
    const score=document.getElementById("score");
    score.style.display="inline";
}


/*
    var gameover = setInterval(function() {
        let soliderTop = parseInt(window.getComputedStyle(solider).getPropertyValue("top"));
        let bombeLeft = parseInt(window.getComputedStyle(bombe).getPropertyValue("left"));
        if(bombeLeft<20 && bombeLeft>-20 && soliderTop>=130){
            bombe.style.animation = "none";
            alert("Game Over. score: "+Math.floor(counter));
            counter=0;
            score.style.display="none";
            bombe.classList.remove("animatebomb");
            
        }else{
            counter++;
            document.getElementById("score").innerHTML = Math.floor(counter);
        }
    }, 10);
*/


var gameover = setInterval(function() {
    let soliderTop = parseInt(window.getComputedStyle(solider).getPropertyValue("top"));
    let bombeLeft = parseInt(window.getComputedStyle(bombe).getPropertyValue("left"));
    if(bombeLeft<50 && bombeLeft>10 && soliderTop>=130){
        bombe.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        score.style.display="none";
        //bombe.style.animation = "bombe 1s infinite linear";
        bombe.classList.remove("animatebomb");
      
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
    
}, 10);
