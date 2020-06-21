"use strict";

console.log("On google page!");
const searchTerm = document.querySelector("input[class]").value;
let content = document.createElement("p");
content.innerHTML = "searching: " + searchTerm;
document.querySelector("#appbar").insertBefore(content, undefined);
