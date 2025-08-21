//RECURSIVIDADE:

//Q1. N-ésimo termo da sequência {3, 6, 12, 24, 48, ...}
const q1 = (n) =>{
    if (n == 1) {return 3}
    else {return q1(n-1) * 2}
}
console.log(q1(5))          //retorna 48


//Q2. N-ésimo termo da sequência {0,1,1,2,3,5,8,13,21,34,55,...}
const fib = (n) =>{
    if (n == 1) {return 0}
    else if (n == 2) {return 1}
    else {return fib(n-1) + fib(n-2)}
}
console.log(fib(8))         //retorna 13


//Q3. Soma dos n primeiros números naturais {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...}
const somaNat = (n) =>{
    if (n == 1) {return 0}
    else if (n == 2) {return 1}
    else {return somaNat(n-1) + n-1}
}

console.log(somaNat(7))     //retorna 21


//Q4. Fatorial de um número natural qualquer
const fatorial = (n) =>{
    if (n == 0 || n == 1) {return 1}
    else {return fatorial(n-1) * n}
}
console.log(fatorial(5))    //retorna 120


//Q5. Potência natural do número 2: 2^n.
const potNat = (n) =>{
    if (n == 0) {return 1}
    else if (n == 1) {return 2}
    else {return potNat(n-1) * 2}
}
console.log(potNat(8))      //retorna 256


//Q6. 