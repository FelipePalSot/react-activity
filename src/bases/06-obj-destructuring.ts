const person = {
    name: 'Tony',
    age: 45,
    key: 'Iroman',
};/** este objeto cumple con las condiciones del interface */

// const name = person.name;
// const age = person.age;
// const key = person.key;

const { key, name:ironmanNAme, age} = person; /** destrecturacion del objeto de manera mas optima */

console.log({ironmanNAme, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    // rank?: string | undefined;
    rank?: string 
}

const useContext = ({key, name, age, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

/*Primera opcion de desestruracion*/
const context = useContext(person);

console.log(context);

/*Segunda opcion de desestruracion*/
const { rank, keyName, user } = useContext (person);

console.log({rank, keyName, user});

/*Segunda opcion de desestruracion con aninadacion*/

// const { 
//     rank,
//     keyName,
//     user,
//  } = useContext (person);

//  const {name} = user;

//  console.log({rank, keyName, name});

