import React, { Component } from 'react';

export default class Lista extends Component {
    render() {
        const numbers = [1, 1, 7, 11, 13];

        return (
            <>
                <h2>Trabajando con listas</h2>
                {
                    numbers.map((item, index) => {
                        return <p key={index}>Soy el número {item}</p>
                    })
                }
            </>
        )
    }
}