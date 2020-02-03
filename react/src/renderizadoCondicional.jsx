import React, { Component } from 'react';

class ComponentA extends Component {
    render() {
        return <p>Componente A</p>
    }
}

class ComponentB extends Component {
    render() {
        return <p>Componente B</p>
    }
}

// const useConditionalRendering = (mostrarA) => {
//     if (mostrarA) {
//         return <ComponentA />
//     }
//     return <ComponentB />
// }

export default class RenderizadoCondicional extends Component {
    constructor() {
        super();
        this.state = {
            mostrarA: false
        }
    }

    render() {
        // const conditionalComponent = this.state.mostrarA ? <ComponentA /> : <ComponentB />;
        return <>
            <p>Renderizado Condicional</p>
            {
                this.state.mostrarA 
                ? <ComponentA /> 
                : <ComponentB />
            }
        </>; 
    }
}