let treat2 = document.getElementById('dogTreat2');
let sadDogs1 = document.getElementById('sadDog2');
let sadDogs2 = document.getElementById('sadDog3');
let sadDogs3 = document.getElementById('sadDog4');
let happyDogs1 = document.getElementById('happyDog2');
let happyDogs2 = document.getElementById('happyDog3');
let happyDogs3 = document.getElementById('happyDog4');
let t1 = document.getElementById('treats1');
let t2 = document.getElementById('treats2');
let t3 = document.getElementById('treats3');
let pageButton = document.getElementById('changePage');


window.addEventListener("mousemove", function(event) {
    treat2.style.left = (event.clientX - 250) + "px";
    treat2.style.top = (event.clientY - 250) + "px";
});

happyDogs1.addEventListener("click", function(){
    t1.style.opacity = '1';
    sadDogs1.src = "images/imagehappy.jpg";
});

happyDogs2.addEventListener("click", function(){
    t2.style.opacity = '1';
    sadDogs2.src = "images/imagehappy.jpg";
});

happyDogs3.addEventListener("click", function(){
    t3.style.opacity = '1';
    sadDogs3.src = "images/imagehappy.jpg";
});

pageButton.addEventListener("click", function() {
    window.location.href = "index.html";
});