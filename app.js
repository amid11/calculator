/**
 * User Story: I can add, subtract, multiply and divide two numbers.
 * User Story: I can clear the input field with a clear button.
 * User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.
 */
var entries = [];
var total = 0;


var input = '';
$("a").on('click', function () {
   var val = $(this).text();
   /*$(".calc-monitor").text(input);
   if (val === 'CE') {
      input = '';
      $(".calc-monitor").text(input);
   }*/
   if (!isNaN(val) || val === '.') {
      input += val;
      $("#answer").text(input.substring(0, 10));
   } else if (val === 'AC') {
      entries = [];
      input = '';
      total = 0;
      $("#answer").text('');

      // Clear last entry
   } else if (val === 'CE') {
      input = '';
      $("#answer").text('');

      // Change multiply symbol to work with eval
   } else if (val === 'x') {
      entries.push(input);
      entries.push('*');
      input = '';

      // Change divide symbol to work with eval
   } else if (val === '÷') {
      entries.push(input);
      entries.push('/');
      input = '';

      // Got the equals sign, perform calculation
   } else if (val === '=') {
      entries.push(input);

      var nt = Number(entries[0]);
      for (var i = 1; i < entries.length; i++) {
         var nextNum = Number(entries[i + 1]);
         var symbol = entries[i];

         if (symbol === '+') {

            nt += nextNum;
         } else if (symbol === '-') {
            nt -= nextNum;
         } else if (symbol === '*') {
            nt *= nextNum;
         } else if (symbol === '/') {
            nt /= nextNum;
         }

         i++;
      }

      // Swap the '-' symbol so text input handles it correctly
      if (nt < 0) {
         nt = Math.abs(nt) + '-';
      }

      $("#answer").text(nt.toFixed(5));
      entries = [];
      input = '';

      // Push number
   } else {
      entries.push(input);
      entries.push(val);
      input = '';
   }
});