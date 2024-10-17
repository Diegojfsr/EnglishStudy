// cosoles
console.log("Hello World!")
console.error("Este é um erro!")
console.warn("Este é um aviso!")

// variaveis

var x = 10;
let y = 15;
const z = 20;

if(1)
{
let y = 55;
console.log(y);
}

console.log(x);
console.log(y);
console.log(z);

y = 25;
console.log(y);


// tipo de dados

const nome = "Diego";
console.log(nome);
console.log(typeof nome);

const shirtsQty = 4;
console.log(shirtsQty);
console.log(typeof shirsQty);

const decimal = 12.4;
console.log(decimal);
console.log(typeof decimal);

const isApproved = false // true or false
console.log(isApproved);
console.log(typeof isApproved);

let surname = null;
console.log(surname);
console.log(typeof surname);

surname = "Jeff";
console.log(surname);
console.log(typeof surname);

let age;
console.log(age);
console.log(typeof age);

const languages = ['JavaScript', 'PHP', 'Python'];
console.log(languages);
console.log(typeof languages);

const user = {
email: 'diego@gmail.com',
password: '123',
age: 25
}

console.log(user);
console.log(typeof user);


// metodo de string

const fullName = "Diego Jeff";
console.log(fullName.length);

const stringToArray = fullName.split(' ');
console.log(stringToArray);
console.log(fullName.toLowercase());
console.log(fullName.toUpperCase());
cosole.log(fullName.indexOf('Jeff'));
console.log('ads'.indexOf('Jeff'));
console.log(fullName.slice(0,7));

// metodo array

const list = ['a', 'b', 'c', 'd', 'e'];
console.log(list.length);
console.log(list[2]);

list[5] = 'f';
console.log(list);

console.log(list[list.length-1]); //pegar utimo elemento da lista.

list.push('g'); //add elemento no final da lista.
console.log(list);


list.pop(); //remove elemento no final da lista.
console.log(list);

list.shift(); // remove elemento no inicio da lista.
console.log(list);

list.unshift('a'); //add elemento no inicio da lista.
console.log(list);


