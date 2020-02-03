import React, { Component } from 'react';
import cars from './data/cars.json';

class CardItem extends Component {
    render() {
        const { car, id } = this.props;
        return (
            <li>
                <p>Key: {id}</p>
                <p><strong>Nombre:</strong>{car.name}</p>
                <p><strong>Marca:</strong>{car.company}</p>
            </li>
        )
    }
}

export default class ListasObjetos extends Component {
    render() {
        return (
            <>
                <h2>Trabajando con listas con objetos</h2>
                <ul>
                    {
                        cars.map(car => {
                            return (
                                <CardItem id={car.id} key={car.id} car={car} />                  
                            )
                        })
                    }
                </ul>
            </>
        ) 
    }
}