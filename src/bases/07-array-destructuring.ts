const characterNames = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = characterNames;

console.log({p1, p2, p3});

/**para una varible especifica dentro del arreglo */
const [, , n4] = characterNames;

console.log ({n4})

const returnsArrayFn = () =>{
    return ['ABC', 123] as const/** Aseguramos que siempre se pase de esa manera */
}

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers + 100);/** notamos que solo suma al segundo elementos que es un numero  */