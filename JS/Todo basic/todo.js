const div = document.querySelector('#main')

let todos = JSON.parse(localStorage.getItem('Lista_Todos')) || []

const lista = document.createElement('ul')


const renderizar = () => {
    lista.innerHTML = ''
    for (todo of todos){
        let iten = document.createElement('li')
        iten.appendChild(document.createTextNode(todo))
        let excluir = document.createElement('a')
        let text = document.createTextNode('   deletar')
        excluir.appendChild(text)
        excluir.setAttribute('href', '#')
        excluir.setAttribute('class', 'text-danger')
        let pos = todos.indexOf(todo)
        excluir.setAttribute('onclick', `excluir(${pos})`)
        iten.appendChild(excluir)
        lista.appendChild(iten)
        
    }
}

renderizar()

const adicionar = () => {
    todos.push(entrada.value)
    entrada.value = ''
    renderizar ()
    save()
}

const excluir = pos => {
    todos.splice(pos, 1)
    renderizar()
    save()
}

const save = () => {
    localStorage.setItem('Lista_Todos', JSON.stringify(todos))
}

const entrada =  document.createElement('input')
const btn =  document.createElement('button')
btn.setAttribute('class', 'btn btn-secondary btn-sm')
btn.setAttribute('onclick', 'adicionar()')
btn.appendChild(document.createTextNode('Add'))

div.appendChild(lista)
div.appendChild(entrada)
div.appendChild(btn)