//Add
function add(){
  let Num1 = parseInt(document.getElementById('n1').value)
  let Num2 = parseInt(document.getElementById('n2').value)
  let Addition = Num1 + Num2
  document.getElementById('result').innerHTML= `Result : ${Addition}`
}

// sub
function sub(){
    let Num1 = document.getElementById('n1').value
    let Num2 =  document.getElementById('n2').value
    let Sub = Num1 - Num2
    document.getElementById('result').innerHTML= `Result : ${Sub}`
  }

  // Mult
  function Mul(){
    let Num1 =  document.getElementById('n1').value
    let Num2 =  document.getElementById('n2').value
    let Mul = Num1 * Num2
    document.getElementById('result').innerHTML= `Result : ${Mul}`
  }
  
// div 
function Div(){
    let Num1 =  document.getElementById('n1').value
    let Num2 =  document.getElementById('n2').value
    let Div = Num1 % Num2
    document.getElementById('result').innerHTML= `Result : ${Div}`
  }
  

  