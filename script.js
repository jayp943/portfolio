const text = [
  "Web Developer",
  "AutoCAD Designer",
  "B.Tech Graduate"
];

let index = 0;

setInterval(() => {
    document.getElementById("typing-text").innerHTML =
    text[index];

    index++;

    if(index >= text.length){
        index = 0;
    }
}, 2000);