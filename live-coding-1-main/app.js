// Escribe tu código aquí.

//1 Escribir la funcion
function palabrasLargas(str,arrayStr){
let result =[]; //Aqui guardamos la info
for(let i = 0; i < arrayStr.length; i++){
    if (arrayStr[i].length > str.length){
        result.push(arrayStr[i]);
    }
}
return result;
}
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const result= palabrasLargas ('bocina',myArray);

console.log(result);
