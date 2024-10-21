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


// objetos

const product = {
    name: 'camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
    'Main Color': 'Azul',
}
    
console.log(product.name);
console.log(product['name']);
console.log(product['Main Color']);

    
// destructuring

//object
const {price, inStock} = product;
console.log(price);
console.log(inStock);

// array
const [n1, n2] = list
console.log(n1);
console.log(n2);


// Json-JavaScript Object Notation

const dog = {
    name: 'shark',
    age: 10,
    }
    
const json = JSON.stringfy(dog);
console.log(json); //convert para json

const obj = JSON.parse(json);
console.log(obj); //convert para objeto

const json2 = '{"name":"teste", "name2":"teste2"}'
const obj2 = JSON.parse(json2);
console.log(obj2);

    
// estruturas condicionais
// > ,<, >=, <=
const a = 10;
if(a>8)
{
console.log('A é maior que 8.');
}

const b = 'Diego';

if(b === 'Joao'){
    console.log('O nome e Joao.')
}else if(b === 'Pedro'){
    console.log('O nome e Pedro.')
}else{
    console.log('Nao encontramos o nome.')
}


// if ternario

const someNumber = 14;

let testingNumber = someNumber < 20 ? 'yes' : 'no'
console.log(testingNumber);


// estruturas de repeticao

// while
const myList = [1, 2, 3, 4, 5];
let counter = 0;

while(counter < myList.length){
console.log('Imprimindo:' + myList[counter])
counter++  //counter + 1
}

// for
const mySecondList = ['a', 'b', 'c', 'd', 'e'];

for (let counter = 0; counter < mySecondList.length; counter++){
console.log(`Imprimindo: ${mySecondList[counter]}`) //template literals
}


// metodos de array

// forEach
const names=['Diago', 'Joao', 'Pedro', 'Marcia'];
names.forEach(function(name){
    console.log(`O nome é: ${name}`)
})


// map
const modifedNames=names.map(function(name){
    if (name === 'Diego'){
        return(name='Dr.Diego')
        }else{
        return name
    }
})
console.log(modifiedNames);


//filter
const bigNumbers=[1, 2, 3, 4, 5, 10, 100].filter(function(number){
    return number >= 5
})
console.log(bigNumbers);


// reduce
const sumAll=[10, 20, 30, 40, 50].reduce(function(total, number){
    return total + number
})
console.log(sumAll);



// funcoes

function minhaFuncao(){
    console.log('hello world.')
}

minhaFuncao()
    
    
// funcao com parametros
function nomeCompleto(nome, sobrenome){
    console.log(`O nome completo é: ${nome} ${sobrenome}`)
}
nomeCompleto('Diego', 'Jeff');
nomeCompleto('Joao', 'Azevedo');

// funcao com retorno
function nomeCompleto(nome, sobrenome){
    return `o nome completo e: ${nome} ${sobrenome}`
}

console.log(nomeCompleto('Diego', 'Jef'))

const meuNomecompleto=nomeCompleto('Maria', 'Matos');
console.log(meuNomeCompleto);

const priemiroNome = 'Maria';
const segundoNome = 'Matos';

const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome);
console.log(meuNomeCompleto);


// arrow functions
const myArrowFunction = (a, b) => {
    return a + b 
}

console.log(myArrowFunction(2, 5));


const aumAll = [10,20, 30, 40, 50].reduce((total, number) => {
    return total + number
})
console.log(sumAll);


const mySipleArrowFunction = (a, b) => a + b
console.log(mySipleArrowFunction(5, 5))



// classes

class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

const socks = new Product('Meia branca ', 10.99)
console.log(socks.name)
console.log(socks.price)



class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productDetails(){
        retunr `O nome do produto é: ${this.name} e o preco é: R$${this.price}`
    }
}
const shirt = new Product("Camisa Preta", 22.99)
console.log(shirt.productDetails())


// heranca
class superProduct extends Product{
    constructor(name, price, size){
        super(name, price)
        this.size=size
    }
    showAdjective(adjective){
        return `O ${this.name} é muito ${adjective}`
    }
}

const tenis = new superProduct('Tenis Vermelho', 59.99, "42")
    console.log(tenis.name)
    console.log(tenis.size)
    console.log(tenis.showAdjective('Bom'))



// metodo static
class SuperProduct extends Product{
    constructor(name, price, size){
    super(name, price)
    this.size=size
    }
    //static
    static sayHello(){
        console.log('Hello')
    }
}

SuperProduct.sayHello()

    


