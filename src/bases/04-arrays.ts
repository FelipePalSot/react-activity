const myArray: number[] = [1,2,3,4,5,6];

// const myArray = myArray2; /* paso por referencia */
const myArray2 = [...myArray]; /* aca se crea un nuevo arreglo, con spread */
// const myArray2 = structuredClone(myArray)/* Forma de clonar un objeto*/

myArray2.push(7);

console.log({myArray,myArray2})