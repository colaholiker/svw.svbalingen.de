/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
jQuery(function($){
	$.datepicker.regional['de'] = {
		clearText: 'löschen',
		clearStatus: 'aktuelles Datum löschen',
		closeText: 'schließen',
		closeStatus: 'ohne Änderungen schließen',
		prevText: '&#x3c;zurück', prevStatus: 'letzten Monat zeigen',
		nextText: 'Vor&#x3e;', nextStatus: 'nächsten Monat zeigen',
		currentText: 'heute', currentStatus: '',
		monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
		monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
		weekHeader: 'KW', weekStatus: 'Woche des Monats',
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'Wähle D, M d',
		dateFormat: 'dd.mm.yy', firstDay: 1, 
		showButtonPanel: true,
		changeYear: true,
		yearRange: "c-80:c+10",
		showOn: "button",
		buttonImage: "/img/icons/calendar.png",
		initStatus: 'Wähle ein Datum', isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['de']);
});