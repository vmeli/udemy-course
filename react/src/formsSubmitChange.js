import React, { PureComponent } from 'react';

export default class FormsSubmitChange extends PureComponent {
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("this.inputName", this.inputName);
        const name = this.inputName.value;
        const email = this.inputTwitter.value;
        console.log({name, email});
    }

    handleChange (e) {
        console.log("handleChange");
        console.log(e.target.checked);
    }

    render() {
        return <div>
            <h4>Formularios - Refs</h4>
            <form onSubmit={this.handleSubmit}>
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
                <p>
                    <label>
                        <input onChange={this.handleChange} type='checkbox'/>
                        Accepted terms
                    </label>
                </p>
                <button>Enviar</button>
            </form>
        </div>
    }
}