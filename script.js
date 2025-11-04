let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
console.log("clicked");
taskbar.addEventListener("click",()=>{
    const b = parseFloat(getComputedStyle(startmenu).bottom);   // read computed bottom
  startmenu.style.bottom = (b >= 0) ? "-454px" : "50px";  
    
    
});

// --- new Chrome icon feature ---
let chromeIcon = document.getElementById("chromeIcon");

chromeIcon.addEventListener("click", () => {
  window.open("https://www.google.com", "_blank");
});
 


