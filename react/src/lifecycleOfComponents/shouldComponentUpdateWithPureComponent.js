// Todos los componentes se extiende de la clase Component de React 
// está clase implementa un método shouldComponentUpdate, devuelve true por defecto si no esta implementado
// PureComponent implementa un shoudComponentUpdate diferente, su shouldComponentUpdate devuelve false
// por defecto si no detecta cambios superficialmente en sus props o state
// si las props o state son objetos complejos con + de un nivel pueden devolver false positivo
// solo usar PureComponent con shouldComponentUpdate cuando son objetos simples las props o state

import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends PureComponent {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps (nextProps) {
        console.log('1. componentWillReceiveProps');
        console.log(nextProps);
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
    }

    // Con PureComponent no es necesario definir shouldComponentUpdate

    render() {
        console.log('3. -> render');
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class ShouldComponentUpdateWithPureComponent extends Component {
    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
        return (
            <button 
                // disabled={animal === this.state.animal}
                key={animal}
                onClick={() => this.setState({ animal })}>
                {animal}
            </button>
        )
    }
    render() {
        return (
            <div>
                <h4>Ciclo de Actualización, Ejemplo de: ShouldComponentUpdate with PureComponent</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}

export default ShouldComponentUpdateWithPureComponent;