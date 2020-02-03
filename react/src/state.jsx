import React, { Component } from 'react';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: this.props.contadorInicial
        }
        setInterval(() => {
            this.setState({ contador: this.state.contador +1 })
        }, 1000);
    }

    render() {
        return <ContadorNumero numero={this.state.contador}/>
    }
}

Contador.defaultProps = {
    contadorInicial: 100
}

class ContadorNumero extends Component {
    render() {
        return <p>{this.props.numero}</p>
    }
}