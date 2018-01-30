document.write("Hello PHP11");
document.getElementById("innerContent").innerHTML = "Hello Word";
//alert("Hello alert");
console.log("Hello console");
var i = 10;

console.log(i);
//alert(i);
i+=20;
 /*
  * This is debug
  * Console
 */
 /*
   This is debug
   Console
 */
console.log(i);
//alert(i);
// This x, y, z variable
var x, y, z; 
var x,y,z;
x=5;
x = 5;
var name, old, birthday, city, email;
var name = "Canh", old, birthday, city, 
	email = "apple.luong1905@gmail.com";
console.log(email);



var x = 10, y = 6;
document.write("<br/>");
document.write("Gia tri cua x cong y la: ");
document.write(x % y);
document.write("<br/>");




var x = 10, y = 6;
var z;
var m = "Demo";
var arr = ["PHP10", "PHP11", "PHP12"];
var person = {firstName:"John", 
			  lastName:"Doe",
			  age:50, 
			  eyeColor:"blue"};
console.log(person.age);
console.log(typeof person);
console.log(typeof arr);
console.log(typeof z);
console.log(typeof x);
console.log(typeof m);
z = ++x + ++y - ++x + x++ - y--;
document.write(z); //11
document.write("<br/>");
document.write(x); //13
document.write("<br/>");
document.write(y); //6
// Dau ++ dat truoc thi tang gia tri len 1 truoc khi thuc hien bieu thuc
// Dau ++ dat sau thi tang gia tri len 1 sau khi thuc hien bieu thuc
// Dau -- dat truoc thi giam gia tri xuong 1 truoc khi thuc hien bieu thuc
// Dau -- dat sau thi giam gia tri xuong 1 sau khi thuc hien bieu thuc

/*
* Name: add number
* Create by Canhlh
* Created 25/01/2018
*/
function add(a = 6, b = 8){
	return a + b;
}
document.write("<br/>");
document.write(add(66,9));
document.write("<br/>");
document.write(add());
document.write("<br/>");
document.write(add(99));
document.write("<br/>");
//Bai tap 1
var old, gender;
old = 31;
gender = "Nam";
function checkOld(old, gender){
	if(old > 21){
		return gender + " tren 21 tuoi";
	}else{
		return gender + " duoi 21 tuoi";
	}
}
document.write(checkOld(old, gender));
