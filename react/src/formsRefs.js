import React, { PureComponent } from 'react';

export default class FormsRefs extends PureComponent {
    
    handleClick = (e) => {
        e.preventDefault();
        console.log("this.inputName", this.inputName);
        const name = this.inputName.value;
        const email = document.getElementById('twitter').value;
        console.log({name, email});
    }

    render() {
        return <div>
            <h4>Formularios - Refs</h4>
            <form>
                <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input 
                        id='name'
                        name='userName'
                        placeholder='Introduce el nombre' 
                        ref={inputElement => this.inputName = inputElement}/>
                </p>
                <p>
                    <label htmlFor='twitter'>Twitter: </label>
                    <input 
                        id='twitter'
                        name='twitterAccount'
                        placeholder='Introduce tu Twitter' 
                        ref={inputElement => this.inputTwitter = inputElement}/>
                </p>
                <button onClick={this.handleClick}>Enviar</button>
            </form>
        </div>
    }
}