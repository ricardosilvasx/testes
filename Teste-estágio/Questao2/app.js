
function Fibonacci(numero) {
    
    let a = 0;
    let b = 1;
  
    
    while (b < numero) {
      let c = a + b;
      a = b;
      b = c;
    }
  
    
    if (b == numero) {
      return true;
    } else {
      return false;
    }
  }
  
  let numero = parseInt(prompt("Digite um número para verificar se ele pertence à sequência de Fibonacci: "));
  if (Fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  