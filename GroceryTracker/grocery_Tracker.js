let amount1;  
let amount2;
let amount3 ;
function calculateCost(amount1, amount2, amount3){
   amount1 = parseFloat(document.getElementById('grocery1').value);
   amount2 = parseFloat(document.getElementById('grocery2').value);
   amount3 = parseFloat(document.getElementById('grocery3').value);
    let totalExpenditure = amount1 + amount2 + amount3;
    document.getElementById('result').innerText = 'The total amount spent on groceries is:$ ' + totalExpenditure;
}