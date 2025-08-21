//1ª Questão:
const mudaLista = (lista) =>{
    const c = [...lista]
    c[2] = c[3]
    c[1] = c[2]
    c[0] = c[0] + c[1] + c[2] + c[3]
    return c
}
const exemplo = [-3, 4, 1, 8]

console.log(mudaLista(exemplo))
console.log(exemplo)


//2ª Questão:
const conta = (elem) => (lista) =>{
    const temp1 = lista.map((x) => x.toString())            // transforma cada elemento em uma string
    const temp2 = temp1.reduce((acc, x) => acc+x, '')       // junta cada string em apenas uma
    const temp3 = temp2.split('')                           // separa cada caractere em uma string
    const temp4 = temp3.filter((x) => x==elem)
    return temp4.length
}

console.log(conta('.')([3, 9.5, 999, 0, 1.9, 19.3]))        // imprime 3
console.log(conta('.')([3, 0, 1]))                          // imprime 0


//5ª Questão:
const reduce = (acc) => (lista) => [...lista].reduce((res, ch) =>{
    const next = res.at(-1) + ch
    return [...res, next]
  }, [acc])

console.log(reduce("a")("eiou"))