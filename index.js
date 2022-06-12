let today = document.getElementById('date');
let noteName = document.getElementById('note');
const through = document.getElementById('delete');
var date = new Date();
var day = date.getDate(); //day (1-31)
var month = date.toLocaleString('default', { month: 'short' }); //months (0-11)
var year = date.getFullYear();

today.textContent = day + ' ' + month + ' ' + year;
through.addEventListener('click', () => {
	if (noteName.style.textDecoration !== 'line-through') {
		noteName.style.textDecoration = 'line-through';
	} else {
		noteName.style.textDecoration !== 'line-through';
	}
});

