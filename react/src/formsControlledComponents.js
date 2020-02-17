import React, { PureComponent } from 'react';

export default class FormsControlledComponents extends PureComponent {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        console.log("handleChange");
        console.log(e.target.checked);
        this.setState({
            inputTerms: e.target.checked
        })
    }

    render() {
        return <div>
            <h4>Formularios - Componentes Controlados</h4>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input 
                        id='name'
                        name='userName'
                        onChange={e => this.setState({ inputName: e.target.value })}
                        placeholder='Introduce el nombre' 
                        ref={inputElement => this.inputName = inputElement}
                        value={this.state.inputName} />
                </p>
                <p>
                    <label htmlFor='twitter'>Twitter: </label>
                    <input 
                        id='twitter'
                        name='twitterAccount'
                        onChange={e => this.setState({ inputTwitter: e.target.value })}
                        placeholder='Introduce tu Twitter' 
                        ref={inputElement => this.inputTwitter = inputElement}
                        value={this.state.inputTwitter} />
                </p>
                <p>
                    <label>
                        <input
                            checked={this.state.inputTerms} 
                            onChange={this.handleChange} 
                            type='checkbox' />
                        Accepted terms
                    </label>
                </p>
                <button>Enviar</button>
            </form>
        </div>
    }
}