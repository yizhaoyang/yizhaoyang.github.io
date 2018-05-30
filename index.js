console.log("my code is loaded and running ");
setTimeout(function(){
    setInterval(function(){
        document.querySelector("h3").style.color="#c06c84";
        document.querySelector("h3").style.top="100px";
    },3000);
},1500);

setInterval(function(){
    document.querySelector("h3").style.color="#005eff";
    document.querySelector("h3").style.top="200px";
},3000);
