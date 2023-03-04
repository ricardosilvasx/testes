
let string = prompt("Digite uma palavra ");
let caracteres = string.split("");


let indice_inicio = 0;
let indice_final = caracteres.length - 1;


while (indice_final > indice_inicio) {
   
    let temp = caracteres[indice_inicio];
    caracteres[indice_inicio] = caracteres[indice_final];
    caracteres[indice_final] = temp;

    indice_inicio++;
    indice_final--;
}


let string_invertida = caracteres.join("");

console.log(string_invertida);
