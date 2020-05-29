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
        this.setLoading()

        const texto = this.entrada.value;

        if (texto.length === 0)
            return
        
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
        }catch (err){
            this.entrada.value = ''
            alert('Repositório inválido')
            console.log(err)
        }
        this.setLoading(false)
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
            let btn = document.createElement('button')
            btn.appendChild(document.createTextNode('Go to repo'))
            link.appendChild(btn)

            let elemento = document.createElement('li')
            elemento.appendChild(img)
            elemento.appendChild(title)
            elemento.appendChild(desc)
            elemento.appendChild(link)

            this.lista.appendChild(elemento)
        })
    }

    setLoading(load = true){
        if (load === true){
            let loading = document.createElement('span')
            loading.setAttribute('id', 'load')
            loading.appendChild(document.createTextNode('Carregando...'))

            this.form.appendChild(loading)
        }
        else{
            let loading = document.getElementById('load');
            if (loading){
                loading.remove();
            }
        }
    }
}

new App();