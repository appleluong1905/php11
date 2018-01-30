// cau 1
var myName = "Luong Hoai Canh";
var myMiddleName = "Hoai";
var myNameLength = 0;
	myNameLength = myName.length;

document.write("1/ Ten toi la: " + myName);
document.write("<br>");

// cau 2
document.write("2/ Ten cua toi dai: " + myNameLength + " ky tu<br>");

// cau 3
var nInMyName = 0;
	nInMyName = myName.indexOf("n");
if(nInMyName != -1){
	document.write("3/ Chu n dung thu " + nInMyName + " trong ten cua ban <br>");	
}else{
	document.write("3/ Khong co chu n trong ten cua ban <br>");
}

//cau 4
document.write("4/ In hoa ten lot cua ban: ");
document.write(myMiddleName.toUpperCase());

//cau 5
document.write("<br> 5/ Cat ten ra khoi ho ten day du cua ban: ");
document.write(myName.replace("Canh", ""));