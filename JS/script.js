var solider = document.getElementById("solider");
var bombe = document.getElementById("bombe");
var counter=0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
  /*
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(3000);
      console.log(i);
    }
  }
  */


function jump(){
    if(solider.classList == "animate"){return}
    solider.classList.add("animate");
    setTimeout(function(){
        solider.classList.remove("animate");
    },300);
}

document.addEventListener("keydown", event => {

    if (event.key === 'Enter' ||event.key === 'a' || event.key === 'z') {
       jump();
      }
    
    
});


async function animatebomb(){
    await sleep(500);
    console.log('Two seconds later, showing sleep in a loop...');
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
        alert("Game Over, Score: "+Math.floor(counter/100));
        counter=0;
        score.style.display="none";
        //bombe.style.animation = "bombe 1s infinite linear";
        bombe.classList.remove("animatebomb");
      
    }else{
        counter++;
        //alert(counter);
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
    
}, 10);
