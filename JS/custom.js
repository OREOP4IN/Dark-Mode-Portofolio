var body = document.querySelector("body");
var header = document.querySelector("header")
var footer = document.querySelector("footer")
var h4 = document.querySelector("h4")

var nametag = document.getElementById("nametag");

var button = document.getElementById("button");

function darkMode() {
    if (body.className == "") {
        body.className = "dark";
        header.className = "dark";
        footer.className = "dark";

        nametag.className = "dark";

        button.innerHTML = "LIGHT";
    }else{
        body.className = "";
        header.className = ""; 
        footer.className = "";

        nametag.className = ""; 

        button.innerHTML = "DARK";
    }
}