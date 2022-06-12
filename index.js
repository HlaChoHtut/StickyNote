let today = document.getElementById('date');
var date = new Date();
var day = date.getDate(); //day (1-31)
var month = date.toLocaleString('default', { month: 'short' }); //months (0-11)
var year = date.getFullYear();

today.textContent = day + ' ' + month + ' ' + year;
