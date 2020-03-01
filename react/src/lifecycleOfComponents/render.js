import React, { Component } from 'react';

const HelloRender = (props) => <h1>Hola render!!!</h1>;

class Render extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = { mensaje: 'otro mensaje' }
    }
    render() {
        console.log("render");
        // a veces se utilza return null , ya sea para controlar evento del DOM como el scroll 
        // o para tener un sistema de tracking
        // el método render solo debe dibujar en pantalla la representación del componente
        return [
            <h4 key='A'>Elemento DOM aquí</h4>,
            <HelloRender key='B'/>,
            <p key='C'>Justo debajo de un componente de React</p>,
            this.state.mensaje === 'mensaje inicial' ? 'sí!!!' : null
        ]
    }
}

export default Render;