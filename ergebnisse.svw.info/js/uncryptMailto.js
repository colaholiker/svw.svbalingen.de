// credits to: http://www.users.fh-salzburg.ac.at/~fhs14817/mailcrypt.htm
// Hallo Sebastian Ulbert!
// entschuldige bitte, dass ich Dein Script ohne Nachfrage verwendet habe...
// ich h�tte Dich gerne um Erlaubnis gefragt, aber keine Kontaktm�glichkeit gefunden.
// Dein Skript erf�llt meine Bed�rfnisse voll und ganz, daf�r herzlichen Dank!
function UnCryptMailto(s, shift) {
	var n=0;
	var r="";
	for(var i=0;i<s.length;i++) { 
		n=s.charCodeAt(i); 
		if (n>=8364) {n = 128;}
		r += String.fromCharCode(n-(shift)); 
	}
	return r;
}

function linkTo_UnCryptMailto(s, shift) {
	location.href=UnCryptMailto(s, shift);
}