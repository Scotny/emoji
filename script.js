let names = [
    "Roziya🔥",
    "Durdona🔥",
    "Abdulvoris🔥",
    "Samir🔥",
    "Behruz🔥",
    "Best Mentor🔥",
];

let body = document.querySelector("body");

let text = document.createElement("h1");
text.style.fontWeight = "bold";
for (let i = 0; i < names.length; i++) {
    text.innerHTML += names[i] + "<br>" + "<br>";


}
body.appendChild(text);