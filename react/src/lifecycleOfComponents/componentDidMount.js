import React, { Component } from 'react';

class ComponentDidMount extends Component {
    constructor (props) {
        console.log('constructor');
        super(props);
        this.state = { scroll: 0 }
        //debugger
    }

    componentDidMount () {
        console.log('componentDidMount');
        //debugger
        //this.setState({ otroState: '' })
        // utilizar arrow fuctions y no function para el contexto de ejecucion de la funcion que se ejecuta cada vez que se hace scroll, el valor del this no corresponde con el componente
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    render() {
        console.log('render');
        //debugger
        return <div>
            <h4>Ciclo de montaje: componentDidMount</h4>
            <p>El scroll es {this.state.scroll}</p>
            <p>Este componente nos muestra como podemos usar el como usar el componentDidMount</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que la ventana sea lo suficientemente grande como para que tenga que empujar el contenido hacia abajo y haga que no quepa todo el contenido en el alto de la página. De esta forma podremos utilizar el evento para controlar cuando el usuario está moviéndose por el scroll.</p>
        </div>
    }
}

export default ComponentDidMount;