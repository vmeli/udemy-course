import React, { Component } from 'react';

class Constructor extends Component {
    /* constructor por defecto
        constructor (...args) {
            super(...arg)
        }*/
    constructor(props) {
        //console.log("constructor");
        super(props); // este método llama al constructor de Component
        this.state = { mensajeInicial: 'mensaje inicial' } // inicializamos el state de nuestro componente
        // bindeamos el contexto al método
        // this.handleClick = this.handleClick.bind(this);
    }
    // declaramos este método de esta forma si bindeamos el contexto 
    // handleClick() {
    //    this.setState({ mensajeInicial: 'mensaje cambiado' });
    // }

    handleClick = ()=> {
       this.setState({ mensajeInicial: 'mensaje cambiado' });
    }

    render() {
        //console.log("render");
        return (
            <>
                <div>
                    <h4>Ciclo de Montaje: Constructor</h4> 
                    {this.state.mensajeInicial} 
                </div>
                <button onClick={this.handleClick}>
                    Cambiar mensaje
                </button>
            </>
        )
    }
}

export default Constructor;