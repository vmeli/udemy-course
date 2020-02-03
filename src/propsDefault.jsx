import React , { Component } from 'react';

export default class PropsDefault extends Component {
    render() {
        const { headline } = this.props;
        return <h2>{headline}</h2>;
    }
}

PropsDefault.defaultProps = {
    headline: 'Título por defecto'
}