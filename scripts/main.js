let myheading = document.querySelector("h1");

/*
document.querySelector("html").onclick = function() {
    alert("You have clicked on the html");
};*/

let myparagraph = document.querySelector("p");

myparagraph.onclick = function() {
    alert(myparagraph.textContent);
};

let mybutton = document.querySelector("button");

mybutton.onclick = function() {
    let name = prompt("What is your name?");
    localStorage.setItem('name', name);
    myheading.textContent = "Hello World this is " + localStorage.getItem('name');
};