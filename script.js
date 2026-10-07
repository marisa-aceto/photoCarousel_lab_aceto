let sadImg = document.getElementById('sadDog');
let treat = document.getElementById('dogTreat');
let txtOne = document.getElementById('firstText');
let txtTwo = document.getElementById('secondText');
let pageButton = document.getElementById('changePage');

treat.addEventListener("click", function() {
    sadImg.src = "images/imagehappy.jpg";
    treat.style.height = '0px';
    treat.style.width = '0px';
    treat.style.padding = '0px';
    txtOne.style.opacity = '0';
    txtOne.style.fontSize = '0px';
    txtTwo.style.opacity = '1';
});

pageButton.addEventListener("click", function() {
    window.location.href = "second.html";
});
