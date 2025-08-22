let evento = 'Jogar video Game';

for(let g =1; g <= 30; g++){

    this.adicionarEvento(g, evento)

}


function adicionarEvento(dia, evento){
    console.log('Quero jogar ' +evento+ ' nos dias ' +dia+ '.')
}

function MaiorNumero(numero1, numero2){
    if(numero1 > numero2){
        return numero1
    }else{
        return numero2
    }
}
console.log(MaiorNumero(2,4))


function buzzFizz(input){
    if(typeof input  == 'string')return 'Not number'
    if(input % 3 == 0 && input % 5 == 0) return 'buzzFizz'
    if(input % 3 == 0) return 'buzz'
    if(input % 5 == 0) return 'fizz'
    else return input
}

console.log(buzzFizz(3))