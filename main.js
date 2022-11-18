let num1= document.getElementById('n1')
let num2 = document.getElementById('n2')
let calcBtn= document.getElementById('calculate')
let res = document.getElementById('result')


calcBtn.onclick = function() {


    if (Number(num1.value)%2==0 & Number(num2.value)%2==0) {
        let total =Math.pow( Number(num1.value) ,2) +  Math.pow(Number(num2.value) ,2)
    res.innerHTML= total 
    }

    else{
        alert(' ENTER EVEN NUMBER ')
        
    }
}

    var inputs = document.querySelectorAll("input,select");
for (var i = 0 ; i < inputs.length; i++) {
   inputs[i].addEventListener("keypress", function(e){
      if (e.which == 13) {
         e.preventDefault();
         var nextInput = document.querySelectorAll('[tabIndex="' + (this.tabIndex + 1) + '"]');
         if (nextInput.length === 0) {
            calcBtn.onclick ();
         }
         nextInput[0].focus();
      }
   })
}