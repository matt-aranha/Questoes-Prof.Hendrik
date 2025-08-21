const soma = (acc, x) => acc + x     //função para somar

const lista = [100, 80, 60, 120, 90]     //lista

const somaDaLista = (Lista) => Lista.reduce(soma, 0)     //calcula a soma dos itens da lista

const resultado = lista.map(n => somaDaLista(lista))    //cria uma nova lista com o resultado 5x


console.log(somaDaLista(lista))