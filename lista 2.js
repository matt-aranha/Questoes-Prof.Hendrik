// Q.1 Programa para calcular a área de um retângulo dados os comprimentos de duas arestas:
const areaRetangulo = (a,b) => a * b 

console.log (areaRetangulo(4 , 6))



// Q2. Programa para calcular a área de uma circunferência dado o valor do raio:
const areaCirculo = (r,pi=3.14) => pi * r**2

console.log (areaCirculo (5))



// Q3. Programa para determinar se três valores passados podem representar um triângulo ou não:
const isTriangle = (a,b,c) => ((a + b) > c && (a + c) > b && (b + c) > a)

console.log (isTriangle(3,4,5))



// Q4. Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados:
function tipoTriangulo (a,b,c) {
    if ((a === b) && (b === c)) return ('Equilátero')
     else
      if ((a != b) && (a != c) && (b != c)) return ('Escaleno')
       else return ('Isósceles')
}
console.log (tipoTriangulo(3,4,1))



// Q5. Programa para calcular a distância euclidiana entre dois pontos [(x1,y1),(x2,y2)] no plano cartesiano:
const distDeDoisPontos = (x1,x2,y1,y2) => Math.sqrt((x2-x1)**2 + (y2-y1)**2)

const d = distDeDoisPontos

console.log (d(5,2,8,4))



// Q6. Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais:
function quantosIguais (a,b,c){
    if ((a===b) && (b===c)) return ('3')
        else
          if ((a!=b) && (b!=c) && (a!=c)) return ('0')
            else return ('2')
}
console.log (quantosIguais(2,1,7))



// Q7. Programa para retornar o menor valor entre três números quaisquer:
function menorValor (a,b,c){
    if ((a >= c) && (b >= c)) return (c)
        else
          if ((b >= a) && (c >= a)) return (a)
            else
              if ((a >= b) && (c >= b)) return (b)
}
console.log (menorValor(10,5,8))



// Q8. Escrever um programa que calcule o valor de um número elevado à quarta potência. use o sub-problema de calcular o quadrado de um número qualquer:
const quartaPotencia = (x) => aoQuadrado(aoQuadrado(x))
const aoQuadrado = (y) => y**2

console.log (quartaPotencia(4))



// Q9. Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso), dado por a ⊗ b = (a ∨ b) ∧ ¬ (a ∧ b):
function xor (a,b){
  return ((a || b) && !(a && b))
}  



// Q10. Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica:
function citacao (a,b) {
return (b + ", " + a)
}
const Nome = "Mateus"
const Sobrenome = "Aranha"

console.log (citacao(Nome,Sobrenome))



//Q11. Dados três valores, escreva um programa que retorne quantos desses três valores são maiores que o valor médio entre eles:
const maiorQueMedia = (a,b,c) => {
  const media = (a + b + c)/3
  return (
    (a > media ? 1 : 0) +
    (b > media ? 1 : 0) +
    (c > media ? 1 : 0))
}

console.log (maiorQueMedia(6,5,10))



//Q12. Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau:
const valorX1eX2 = (a,b,c) => {
  const delta = b**2 - 4*a*c
  const x1 = (-b + Math.sqrt(delta)) / 2*a
  const x2 = (-b - Math.sqrt(delta)) / 2*a

   if (delta < 0) return null
     else return (`As raízes são ${x1} e ${x2}.`)
}

console.log (valorX1eX2(1,-3,2))   // [2 e 1]



//Q13. Um móvel com velocidade constante percorre uma trajetória retilínea. Considere T0=0 o instante inicial e S0=500 a posição inicial. Escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x.
const velocidade = (S,T) => {
  const v = (S-500) / (T)
   return (`A velocidadedo móvel é ${v}`)
}

console.log(velocidade(1500,2))



//Q14. Programa que escreva por extenso um determinado algarismo passado como argumento. 
const numeroPorExtenso = (digito) => {
  const extenso = [                                                   //fiz de utilizei "array"
    "zero", "um", "dois", "três", "quatro",
    "cinco", "seis", "sete", "oito", "nove",
    "dez"
  ]

  return (Number.isInteger(digito) && digito >= 0 && digito <= 10)
    ? extenso[digito]
    : "Entrada inválida";
}

console.log(numeroPorExtenso(10))