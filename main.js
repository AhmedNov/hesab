let num1= document.getElementById('n1')
let num2 = document.getElementById('n2')
let colcBtn= document.getElementById('calculate')
let res = document.getElementById('result')

colcBtn.onclick = function() {
    if (Number(num1.value)%2==0) {
        let total =Math.pow( Number(num1.value) ,2) +  Math.pow(Number(num2.value) ,2)
    res.innerHTML= total 
    }
    else if(Number(num2.value)%2==0) {
        let total =Math.pow( Number(num1.value) ,2) +  Math.pow(Number(num2.value) ,2)
    res.innerHTML= total 
    }

    else{
        alert('sehv')
    }
    
    // let total = (num1.value*num1.value) + (num2.value*num2.value)
    
   
}


