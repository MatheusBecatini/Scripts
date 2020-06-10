import React, { Component } from "react"
import { Link } from "react-router-dom";

import '../style.css'

export default class Input extends Component {
    state = {
        user: ''
    }

    render(){
        const { user } = this.state
        return (
            <div className='repos_list'>
                <h2>Insira um usuário do GitHub e veja seus repositórios públicos</h2>
                <input onInput={e => this.setState({user: e.target.value})}></input>
                <Link to={`/repos/${user}`}><button>Nova Consulta</button></Link>
            </div>
        )
    }
}