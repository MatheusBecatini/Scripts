console.log('Desafio 1')
class Usuario {
    constructor (email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin (){
        if (this.admin === true)
            return true
        else 
            return false 
    }
}

class Admin extends Usuario{
    constructor() {
        super()
        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) //false
console.log(Adm1.isAdmin()) // true

console.log('-----------------------------------------------------------\nDesafio 2')

const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
const idades = users.map( item => item.idade)
console.log(idades) //[23, 15, 30]

const funcionarios = users.filter(item => {
    return item.idade >= 18 && item.empresa === 'Rocketseat'
})
funcionarios.map(item => console.log(item)) // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const google = users.find(item => {
    return item.empresa === 'Google'
})
console.log(google) //undefined

const multi = users.map(item => {
    item.idade = item.idade*2
    return item
}).filter(item => item.idade <= 50)
console.log(multi)// object - Diego e Gabriel 

console.log('-----------------------------------------------------------\nDesafio 3')
const promise = () => new Promise((resolve, reject) => resolve())
console.log(promise())

console.log('-----------------------------------------------------------\nDesafio 4')
//4.1
const { nome } = users[1]
const { empresa } = users[1]
console.log(nome, empresa)

//4.2
const mostraInfo = ({nome , idade}) => `${nome} tem ${idade} anos.`
console.log(mostraInfo(users[0]))

console.log('-----------------------------------------------------------\nDesafio 5')
//5.1 Rest 
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr
console.log(`x = ${x}`)
console.log(`y = ${y}`)

//5.2 Spread
const user3 = {...users[0], nome: 'Outro'}
console.log(user3)

//EXTRA Rest e Spread
const sum = (...x) => {
    return x.reduce((acc, next) => acc + next)
}
console.log(sum(...arr))

console.log('-----------------------------------------------------------\nDesafio 6')
console.log(`O cara chamado ${user3.nome} trabalha na ${user3.empresa}`)

console.log('-----------------------------------------------------------\nDesafio 7')
const outroNome = 'Matheus'
const usuario = {
 outroNome,
 cidade: 'BH',
};
console.log(usuario.outroNome, usuario.cidade)