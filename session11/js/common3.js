var myName = "Luong Hoai Canh";
myNameUpperCase = myName.toUpperCase();



document.getElementById("demo").innerHTML = myNameUpperCase;
document.getElementsByClassName("class1")[1].innerHTML = myName;
var link_google = "";
link_google = document.getElementById("link_google").href;
console.log(link_google);
document.getElementById("link_google").href = "http://dantri.com.vn";

var image_avatar = "";
image_avatar = document.getElementById("image_avatar").src;
console.log(image_avatar);

document.getElementById("image_avatar").src = "hinh_tin.jpg";

function changeColor(){
	document.getElementById("demo").style.color = "blue";
}

