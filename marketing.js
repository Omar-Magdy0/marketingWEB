    var menuButton = document.getElementById("menuButton");
    var menu = document.getElementById("menu");
    var displayed = false;
 
    function toggle(){
        if(!displayed){ menu.style.display = "block" ;menuButton.style.backgroundColor = "rgb(83, 83, 83)";
        displayed = true;}
         else{ menu.style.display = "none";menuButton.style.backgroundColor = "rgba(41, 41, 41, 0.568)"; displayed = false;}
        
        
        
        }  
 
 
        menuButton.addEventListener('click',toggle);




