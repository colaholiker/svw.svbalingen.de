function anfuegenDatumseingabe() {
	a = document.getElementById('datumseingabe').rows;
	var TR1 = document.getElementById('datumseingabe').insertRow(a.length);
	
	var TD1 = document.createElement('td');
	TR1.appendChild(TD1);
	
	var TD2 = document.createElement("td");
	var input1 = document.createElement('input');
	input1.setAttribute('size','10');
	input1.setAttribute('value','')
	input1.name='Datum[]';
	TD2.appendChild(input1);
	TR1.appendChild(TD2);
}

function addTabRow(id) {
	var t = xGetElementById(id);
	var tbody = t.getElementsByTagName('tbody')[0];
	
	var clone=tbody.getElementsByTagName('tr')[1].cloneNode(true);//the clone of the first row
	for (a=0; a<10; a++) {
		if (clone.getElementsByTagName('input')[a]) { clone.getElementsByTagName('input')[a].value=''; }
		if (clone.getElementsByTagName('select')[a]) { clone.getElementsByTagName('select')[a].selectedIndex=0; }
	}
	tbody.appendChild(clone);
	var rows = tbody.rows;
	var inputs = rows[rows.length-1].getElementsByTagName('input');
	inputs[0].focus();
	return false;
}

function markAll(set) {
	for(i=0; i<document.forms[0].elements.length; i++) {
		var chb = document.forms[0].elements[i].className;
		if ((document.forms[0].elements[i].type=='checkbox') && (chb.substring(0,1)=='t')) {
			document.forms[0].elements[i].checked=set;
		}
	}
}