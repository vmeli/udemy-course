import React, { PureComponent } from 'react';

class Box extends PureComponent {
    render() {
        return (
            <div style={{ border: '1px solid red', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends PureComponent {
    render() {
        return(
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}

export default class PropChildren extends PureComponent {
    render() {
        return (
            <div className='App'>
                <h4>Children props</h4>
                <Box>Hola! Soy un children!</Box>
                <Box>Otro Box con otro contenido</Box>
                <Article
                    author='Sandor'
                    date={new Date().toLocaleDateString()}
                    title='Artículo sobre la prop children'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
                    <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
                </Article>
            </div>
        )
    }
}