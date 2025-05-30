// Q.1 Programa para calcular a área de um retângulo dados os comprimentos de duas arestas:
const areaRetangulo = (a,b) => a * b 

console.log (areaRetangulo(4 , 6))


// Q2. Programa para calcular a área de uma circunferência dado o valor do raio.
const areaCirculo = (r,pi=3.14) => pi * r**2

console.log (areaCirculo (5))


// Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.
const isTriangle = (a,b,c) => ((a + b) > c && (a + c) > b && (b + c) > a)
console.log (isTriangle(3,4,5))


// Q4. Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.
function tipoTriangulo (a,b,c) {
    if ((a === b) && (b === c)) return ('Equilátero')
     else
      if ((a != b) && (a != c) && (b != c)) return ('Escaleno')
       else return ('Isósceles')
}
console.log (tipoTriangulo(3,4,1))


// Q5. Programa para calcular a distância euclidiana entre dois pontos [(x1,y1),(x2,y2)] no plano cartesiano.
const distDeDoisPontos = (x1,x2,y1,y2) => Math.sqrt((x2-x1)**2 + (y2-y1)**2)

const d = distDeDoisPontos

console.log (d(5,2,8,4))


// Q6. Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais.
function quantosIguais (a,b,c){
    if ((a===b) && (b===c)) return ('3')
        else
          if ((a!=b) && (b!=c) && (a!=c)) return ('0')
            else return ('2')
}
console.log (quantosIguais(2,1,7))


// Q7. Programa para retornar o menor valor entre três números quaisquer.
function menorValor (a,b,c){
    if ((a >= c) && (b >= c)) return (c)
        else
          if ((b >= a) && (c >= a)) return (a)
            else
              if ((a >= b) && (c >= b)) return (b)
}
console.log (menorValor(10,5,8))


// Q8. Escrever um programa que calcule o valor de um número elevado à quarta potência. use o sub-problema de calcular o quadrado de um número qualquer.
const quartaPotencia = (x) => aoQuadrado(aoQuadrado(x))
const aoQuadrado = (y) => y**2

console.log (quartaPotencia(4))


// Q9. Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso), dado por a ⊗ b = (a ∨ b) ∧ ¬ (a ∧ b)
//??????


// Q10. Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica
function citacao (a,b) {
return (b + ", " + a)
}
const Nome = "Mateus"
const Sobrenome = "Aranha"

console.log (citacao(Nome,Sobrenome))


//Q.11