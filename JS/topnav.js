function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let e= document.getElementById('enable_topnav_link');
  e.preventDefault(); 
  e.returnValue = false;