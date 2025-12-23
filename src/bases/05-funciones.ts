function greet(name: string): string{
    return `Hola ${name}`;
}

const greet2 = (name: string): string => {
    return `Hola ${name}`
};/*funcion con llave, que no cambia a lo que apunta el this en js*/

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2); //el log es un metodo del objeto console

function getUser(){
    return{
        uid: 'ABC-123',
        username: 'El_Papi23',
    }
}

const getUser2 = () => {
    return{
        uid: 'ABC-123',
        username: 'El_Papi23',
    }
}

const user = getUser();
const user2 = getUser2();
console.log(user, user2);