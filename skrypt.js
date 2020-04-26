var zmiana=false;
window.scrollBy(0,5);

window.addEventListener("scroll", function(){
    if(window.scrollY < 50 && zmiana){
    document.getElementById("navi").style.animationName = "changeback";
    document.getElementById("navi").style.animationDuration = "0.4s";
    document.getElementById("navi").style.animationFillMode = "forwards";
    zmiana = false;
    console.log("zmiana powrotna");
    } 
    // document.getElementById("navi").style.backgroundColor = "#f3b1fc";
    //document.getElementById("navi").style.zIndex = "1";
    if(!zmiana && window.scrollY > 50){
    document.getElementById("navi").style.animationName = "changebg";
    document.getElementById("navi").style.animationDuration = "1.5s";
    document.getElementById("navi").style.animationFillMode = "forwards";
    zmiana = true;
    console.log("zmiana dobra");
    }
    
});