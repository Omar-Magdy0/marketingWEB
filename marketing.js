    var menuButton = document.getElementById("menuButton");
    var menu = document.getElementById("menu");
    var displayed = false;
 
    function toggle(){
        if(!displayed){ menu.style.display = "block" ;menuButton.style.backgroundColor = "rgb(83, 83, 83)";
        displayed = true;}
         else{ menu.style.display = "none";menuButton.style.backgroundColor = "rgba(107, 107, 107, 0.89)"; displayed = false;}
        
        
        
        }  
 
 
        menuButton.addEventListener('click',toggle);




