import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <>
                <p>Bienvenido, usuario!</p>
                <button>Cerrar Sesión</button>
            </>
        )
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
            isUserLogged: true
        }
    }

    render() {
        // const conditionalComponent = this.state.mostrarA ? <ComponentA /> : <ComponentB />;
        return <>
            <h2>Renderizado Condicional</h2>
            {
                this.state.isUserLogged 
                ? <LogoutButton /> 
                : <LoginButton />
            }
        </>; 
    }
}