import React, { Component } from "react"
import api from '../../../services/api'
import { Link } from 'react-router-dom'

import '../style.css'

export default class Main extends Component {
    state = {
        repos: []
    }

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/${id}/repos`)
        this.setState({ repos: response.data })
    }

    render(){
        return (
            <div className='repos_list'>
            {this.state.repos.map(repo => (
                <article key={repo.id}>
                <h3>{repo.name}</h3>
                <p><strong>Owner: </strong>{repo.owner.login}</p>
                <p>{repo.description}</p>
                <a href={repo.html_url} target='_blank'>Mais Informações</a>
                </article>
            ))}
                <div className='repos_list'>
                    <Link to={'/'}><button style={{marginBottom: 20, marginTop: -5}}>Nova Consulta</button></Link>
                </div>
            </div>
        )
    }
}