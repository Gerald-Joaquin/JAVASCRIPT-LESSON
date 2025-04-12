//DOCUMENT OBJECT MODEL

let msg = document.getElementById("message"); //getElementById - will get the elements using id on the html node
console.log(msg);

let btn = document.getElementsByName("language"); //getElementsByName - will get the elements using name on the html node
console.log(btn);

let heading = document.getElementsByTagName("h1"); //getElementsByTagName - will get the elements using tag name like h1,h2,h3,p and more on the html node
console.log(heading);

let message = document.getElementsByClassName("message"); //getElementsByClassName - will get the elements using class name on the html node
console.log(message);

let messages2 = document.querySelector(".message");
console.log(messages2.firstChild);

let messages3 = document.querySelectorAll(".message");
console.log(messages3);
