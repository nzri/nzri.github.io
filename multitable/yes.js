var table = prompt("Enter number for the table...");
var i = 1;
var msg = '<h2>Multiplication Table</h2>';

while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
