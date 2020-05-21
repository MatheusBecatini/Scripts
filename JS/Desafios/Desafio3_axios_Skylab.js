const corpo = document.querySelector('body')

const entrada = document.createElement('input')
entrada.setAttribute('style', 'margin: 10px')
corpo.appendChild(entrada)

const btn = document.createElement('button')
btn.setAttribute('class', 'btn btn-sm btn-warning')
btn.appendChild(document.createTextNode('Buscar'))
btn.setAttribute('onclick', 'buscarUser()')
corpo.appendChild(btn)

const div = document.createElement('div')
const buscarUser = async () => {
    const p = document.createElement('p').appendChild(document.createTextNode('Carregando ...'))
    div.appendChild(p)
    corpo.appendChild(div)
    try {
        const user = await axios.get(`https://api.github.com/users/${entrada.value}`)
        console.log(user)
        entrada.value = ''
    
        const url = user.data.avatar_url
        
        const foto = document.createElement('img')
        foto.setAttribute('src', url)
        div.innerHTML=''
        div.appendChild(foto)
        corpo.removeChild(div)
        corpo.appendChild(div)

        await renderRepos(user.data.repos_url)
    } catch (error) {
        alert('User inválido')       
    }
}

const renderRepos = async url => {
    const repos = await axios.get(url)
    console.log(repos)

    const lista = document.createElement('ul')
    lista.setAttribute('style', 'margin: 10px')

    for (repo of repos.data){
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(repo.name))
        lista.appendChild(item)
    }
    div.appendChild(lista)
}