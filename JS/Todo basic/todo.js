//Selecionando Div principal
const div = document.querySelector('#main')

//Recebe dados do local Storage ou Inicia com uma lista de modelo
let todos = JSON.parse(localStorage.getItem('Lista_Todos')) || ['Tarefa de Exemplo']

const lista = document.createElement('ul')
const renderizar = () => {
    lista.innerHTML = ''
    for (todo of todos){
        let item = document.createElement('li')
        item.appendChild(document.createTextNode(todo))
        let excluir = document.createElement('a')
        excluir.appendChild(document.createTextNode('   apagar'))
        excluir.setAttribute('href', '#')
        excluir.setAttribute('class', 'text-danger')
        let position = todos.indexOf(todo)
        excluir.setAttribute('onclick', `excluir(${position})`)
        item.appendChild(excluir)
        lista.appendChild(item)
    }
}

const adicionar = () => {
    todos.push(entrada.value)
    entrada.value = ''
    renderizar ()
    save()
}

const excluir = pos => {
    todos.splice(pos, 1) //Apaga 1 item a partir da posição indicada
    renderizar()
    save()
}

const save = () => {
    localStorage.setItem('Lista_Todos', JSON.stringify(todos))
    //setItem ('chave', 'valor')
}

//Fluxo da página
renderizar()
const entrada =  document.createElement('input')
    entrada.setAttribute('style', 'margin-left: 10px; margin-right: 10px')
const btn =  document.createElement('button')
    btn.setAttribute('class', 'btn btn-secondary btn-sm')
    btn.setAttribute('onclick', 'adicionar()')
    btn.appendChild(document.createTextNode('Add'))

//Estrutura da página
div.appendChild(lista)
div.appendChild(entrada)
div.appendChild(btn)