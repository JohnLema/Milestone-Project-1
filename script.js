var player = document.getElementById("player");
var object = document.getElementById("object");
var counter = 0;

function jump(){
    if(player.classList == "animate"){return}
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"));
    if(objectLeft<20 && objectLeft>-20 && playerTop>=130){
        object.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        object.style.animation = "object 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);