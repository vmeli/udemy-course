// npm install prop-types -SE para que se instale la versión exacta
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Box extends PureComponent {
    render() {
        return (
            <div style={{ border: '3px solid teal', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends PureComponent {
    // 2da Forma de usar PropTypes, se recomienda usarlo antes del constructor
    static propTypes = {
        author: PropTypes.string.isRequired
    }
    // constructor(props) { //le pasamos props para q se pueda utilizar dentro del constructor
    //    super(props);
    //    if(typeof props.author ==='undefined') {
            //console.warn('author prop is required');
            //throw new Error('author prop is required');
    //    }
    // }
    render() {
        const {
            author,
            children,
            date,
            title   
        } = this.props;

        //console.log("children",children);
        return (
            <section>
                <h2>{title}</h2>
                {author && <p><em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}

// 1era Forma de usar PropTypes
// Article.propTypes = {
//    author: PropTypes.string
// }

export default class ChildrenAndPropTypes extends PureComponent {
    render() {
        return (
            <div className='App'>
                <h4>Children props</h4>
                <Box>Hola! Soy un children!</Box>
                <Box>Otro Box con otro contenido</Box>
                <Article
                    author='Sandor'
                    date={new Date().toLocaleDateString()}
                    title='Artículo sobre la prop children and propTypes'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
                    <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
                </Article>
            </div>
        )
    }
}