import api from './api'
import "regenerator-runtime/runtime.js";

class App {
    constructor(){
        this.repos = [];

        this.form = document.getElementById("formulario")
        this.lista = document.getElementById("lista")
        this.entrada = document.getElementById('entrada')

        this.render();
    }

    render(){
        this.form.onsubmit = event => this.addRepo(event)
    }

    async addRepo(event){
        event.preventDefault();

        const texto = this.entrada.value;

        if (texto.length === 0)
            return
        
        this.setLoading()
        try{
            const response = await api.get(`/repos/${texto}`)
            const {name, description, html_url, owner: { avatar_url }} = response.data
    
            this.repos.push({
            name,
            avatar_url,
            description,
            html_url
            })
    
            this.add()
        }catch{
            this.entrada.value = ''
            alert('Repositório inválido')
        }
        this.setLoading(true)
    }

    add(){
        this.entrada.value = "";
        this.lista.innerHTML = "";

        this.repos.forEach(repo => {
            let img = document.createElement('img')
            img.setAttribute('src', repo.avatar_url);

            let title = document.createElement('h3')
            title.appendChild(document.createTextNode(repo.name))

            let desc = document.createElement('p')
            desc.appendChild(document.createTextNode(repo.description))

            let link = document.createElement('a')
            link.setAttribute('href', repo.html_url)
            link.appendChild(document.createTextNode('Go'))

            let elemento = document.createElement('li')
            elemento.appendChild(img)
            elemento.appendChild(title)
            elemento.appendChild(desc)
            elemento.appendChild(link)

            this.lista.appendChild(elemento)
        })
    }

    setLoading(load = false){
        if (load === false){
            let loading = document.getElementById('load')
            loading.appendChild(document.createTextNode('Carregando...'))

            this.lista.appendChild(loading)
        }
        else
            document.getElementById('load').remove();
    }
}

new App();