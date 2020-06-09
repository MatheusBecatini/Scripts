import React, { Component } from "react"
import api from '../../../services/api'

import '../style.css'

export default class Main extends Component {
    state = {
        repos: []
    }

    componentDidMount(){
        this.loadUsers('matheusbecatini');
    }

    loadUsers = async (user) => {
        const response = await api.get(`/${user}/repos`)


        this.setState({ repos: response.data })
    }


    render(){
        return (
            <div className='repos_list'>
            {this.state.repos.map(user => (
                <article key={user.id}>
                <h3>{user.name}</h3>
                <p><strong>Owner: </strong>{user.owner.login}</p>
                <p>{user.description}</p>
                <a href={user.html_url} target='_blank'>Mais Informações</a>
                </article>
            ))}
            </div>
        )
    }
}