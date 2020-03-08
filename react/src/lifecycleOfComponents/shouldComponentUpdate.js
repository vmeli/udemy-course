import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps (nextProps) {
        // nextProps pueden ser las mismas props que tenemos
        // pero entrará igualmente a este método 
        // Nuevas Props no quiere decir que sean distintas
        // a las que teníamos
        console.log('1. componentWillReceiveProps');
        console.log(nextProps);
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
    }

    shouldComponentUpdate (nextProps) {
        //Se ejecuta antes de actualizar el componente 
        // Determina si el componente se debe actualizar
        // Debe devolver  un booleano(por defecto, siempre es true)
        // No se debe llamar a setState 
        console.log('2. shouldComponentUpdate');
        console.log('anterior:', this.props.animal);
        console.log('nuevo:', nextProps.animal);
        // hay que devolver un booleano
        // si este método no existe, se devuelve true por defecto
        return this.props.animal !== nextProps.animal;
    }


    render() {
        console.log('1. al montar 1 | 3. al actualizar -> render');
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

class ShouldComponentUpdate extends Component  {
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
                <h4>Ciclo de Actualización, Ejemplo de: ShouldComponentUpdate</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}

export default ShouldComponentUpdate;