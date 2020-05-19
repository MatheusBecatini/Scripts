//Desafio 1
console.log(`DESAFIO 1`)
const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };
   
console.log(`Ele mora na rua ${endereco.rua}, numero ${endereco.numero} no ${endereco.bairro} de ${endereco.cidade} / ${endereco.uf}`)

//Desafio 2
console.log(`DESAFIO 2`)
 for (i=32; i<=321; i++){
     if(i % 2 === 0){
         console.log(i)
     }
 }

 //Desafio 3
console.log(`DESAFIO 3`)
const temHabilidade = skill => {
    retorno = -1
    retorno = skill.indexOf(`Javascript`)
    console.log((retorno !== -1) ? true : false)
}
temHabilidade(["Javascript", "ReactJS", "React Native"])

 //Desafio 4
 console.log(`DESAFIO 4`)
const xp = anos => {
        if (anos>0 && anos<=1)
            console.log(`Iniciante`)
        else if (1<anos && anos<=3)
            console.log(`Intermediario`)
        else if (3<anos && anos<=6)
            console.log(`Avançado`)
        else if (6<anos)
            console.log(`Jedi`)
        else
            console.log(`Valor inválido`)
    }
xp(7)

//Desavio 5
console.log('DESAFIO 5')
const usuarios = [
    {
    nome: "Jão",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
const text = array => {
    for (item of array){
        console.log(`O ${item.nome} possui as seguintes habilidades: ${item.habilidades.join(', ')}`)
    }
}
text(usuarios)
   