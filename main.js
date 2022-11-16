let num1= document.getElementById('n1')
let num2 = document.getElementById('n2')
let colcBtn= document.getElementById('calculate')
let res = document.getElementById('result')

colcBtn.onclick = function() {
    
    // let total = (num1.value*num1.value) + (num2.value*num2.value)
    
    let total = Math.pow( Number(num1.value) ,2) +  Math.pow(Number(num2.value) ,2)
    res.innerHTML= total
}


