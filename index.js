const title = document.getElementById("first-id");
const items = document.querySelectorAll("li");

title.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
title.style.color = "blue";

for (i = 0; i < items.length; i++) {
  items[i].style.color = "red";
}

const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);
li.innerText = "Spider Man";

li.classList.add("item");
// console.log(li.classList.contains("item"));
li.remove();

const newP = document.createElement("p");
newP.innerText = "Movies of the year";
document.body.appendChild(newP);

// console.log(ul.parentElement.parentElement);
// console.log(ul.parentNode.parentNode);

const html = document.documentElement;
// console.log(html.parentNode);
// its job is basically getting the parent of html element
// console.log(html.parentElement);

let ulchildren = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ulchildren.firstChild);
ulchildren.childNodes[1].style.color = "blue";

console.log(ulchildren.children);
console.log(ulchildren.lastElementChild);

// Events
