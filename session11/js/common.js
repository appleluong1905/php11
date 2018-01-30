var a = Math.floor(Math.random() * 10);
var b = 5;
if(a == 1) {
	document.write("A bang 1");
}else if(a == 2 || b == 5) {
	document.write("A bang 2 hoac vi b bang 5");
}else if(a == 3) {
	document.write("A bang 3");
}else{
	document.write("A khac 1 va 2 va 3");
}

document.write("<br>");

switch(a) {
	case 1:
		//
		document.write("A bang 1");
		break;
		//
	case 2:
		document.write("A bang 2");
		break;
	case 3:
		document.write("A bang 3");
		break;
	case 4:
		document.write("A bang 4");
		break;
	case 5:
		document.write("A bang 5");
		break;
	default:
		document.write("A lon hon 5");
		break;


}
document.write("<br>");
//document.write("<select>");
for(var i = 0; i < 100; i++) {

	document.write("Hello world!" + i + " <br>");
	//document.write("<option value ='" + i + "'>" + i + "</option>");

}
//document.write("</select>");
var n = 10;
while(n < 10) {
	document.write(n +"<br>");
	n++;
}

var m = 10;
do{
	document.write(m +"<br>");
	m++;
}while(m < 10);
