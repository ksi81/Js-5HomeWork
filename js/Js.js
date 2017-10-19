
//Задача 1
document.getElementById('btn1').onclick = function() {
	document.getElementById('outcome').innerHTML = document.getElementById('inp').value.length;
}

//Задача 2
document.getElementById('btn2').onclick = function() {
	var myImage = ["deer", "if_Rudolf_Deer", "if_sunbird", "Rudolf_Deer"];
	for (var i = 0; i < myImage.length; i++) {
		document.getElementsByTagName('output')[0].innerHTML += `<img src="img/${myImage[i]}.png">`;
	}
}
//Задача 3
document.getElementById('btn3').onclick= function() {
	var str = document.getElementById('inp3').value;
	var p = '';

	if (~str.indexOf("https:\/\/")) {
		p = str.replace(/https:\/\//g, "");
	} else if (~str.indexOf("http:\/\/")) {
		p = str.replace(/http:\/\//g, "");
	} else {
		p = str;
	}
	document.getElementById('outcome3').innerHTML = p;
}
//Задача 4
document.getElementById('btn4').onclick = function() {
	var str1 = document.getElementById('inp4').value;
	var s = '';
	if (~str1.indexOf("https:\/\/www.")) {
		s = str1.replace(/https:\/\/www./g, "");
	} else if (~str1.indexOf("http:\/\/www.")) {
		s = str1.replace(/http:\/\/www./g, "");
	} else if (~str1.indexOf("https:\/\/")) {
		s = str1.replace(/https:\/\//g, "");
	} else if (~str1.indexOf("http:\/\/")) {
		s = str1.replace(/http:\/\//g, "");
	} else if (~str1.indexOf("www.")) {
		s = str1.replace(/www./g, "");
	} else {
		s = str1;
	}
	document.getElementById('outcome4').innerHTML = s;
}
//Задача 5
document.getElementById('btn5').onclick = function() {
	var lastName = document.getElementById('surName').value;
	var firstName = document.getElementById('userName').value;
	var password = document.getElementById('userPasword').value;
	var eMail = document.getElementById('userMail').value;
	if (lastName.slice(0,1) == " " || lastName.slice(-1) == " ") {
		lastName = lastName.replace(/ /, "");
	}
	if (firstName.slice(0,1) == " " || firstName.slice(-1) == " ") {
		firstName = firstName.replace(/ /g, "");
	}
	if (~password.indexOf(" ") || (password.length < 5)) {
		alert('Ваш пароль должен быть больше 5 символов и быть без пробелов!');
		return false;
	}
	if (~eMail.indexOf(" ")) {
		alert("Ваш email не должен содержать пробелов!");
		return false;
	} else if (~eMail.indexOf("@")) {
		eMail = eMail;
	} else {
		alert('Ваш email должен содержать символ @!');
		return false;
	}
	
	document.getElementById('outcome5').innerHTML = lastName + '<br>' + firstName + '<br>' + password + '<br>' + eMail;
	return true;
}

//Задача 6
document.getElementById('btn6').onclick = function() {
	var sym = document.getElementById('symbol').value;
	var out = '';
	out = sym.charCodeAt(0);
	document.getElementById('outcome6').innerHTML = 'Код символа: ' + out;
}






