console.log("kopf")

var card = document.querySelector(".flip-card-inner");
var back = document.querySelector("main");
var button = document.querySelector("header button"); //button voor meer info
var buttonhide = document.querySelector("main button"); //button voor meer info


function showinfo(){
    // button.classList.add("none"); //button weghalen
    card.classList.add("flip");
    // back.classList.add("flip");
}
function hideinfo(){
    card.classList.remove("flip");
}

button.onclick = function() {
    // window.location.href='#info';
    showinfo();
}
buttonhide.onclick = function() {
    hideinfo();
}



/* BRONNEN
https://medium.com/@nagachaitanyakonada/javascript-window-history-pushstate-tutorial-56e2126eaff1
https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent

https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/web/api/eventlistener
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList





*/