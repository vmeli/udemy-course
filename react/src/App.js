import React, { Component } from 'react';
import logo from './logo.svg';
import PropsDefault from './propsDefault';
import State from './state';
import './App.css';
import RenderizadoCondicional from './renderizadoCondicional';
import Listas from './listas';
import ListasObjetos from './listasObjetos';
import Eventos from './eventos';
import EventosBindeado from './eventosBindeado';
import EventosArrowFunction from './eventosArrowFunctionRecommended';
import Forms from './formsFor';
import FormsRefs from './formsRefs';
import FormsSubmitChange from './formsSubmitChange';
import FormsControlledComponents from './formsControlledComponents';
import ChildrenProps from './childrenProps';
import ChildrenAndPropTypes from './childrenAndPropTypes';
import Constructor from './lifecycleOfComponents/constructor';
import Render from './lifecycleOfComponents/render';
import ComponentDidMount from './lifecycleOfComponents/componentDidMount';
import Fetch from './lifecycleOfComponents/fetch';
import ShouldComponentUpdate from './lifecycleOfComponents/shouldComponentUpdate';
import ShouldComponentUpdateWithPureComponent from './lifecycleOfComponents/shouldComponentUpdateWithPureComponent';

//const Hello = (props) => <h2>Bienvenidos a este curso {props.name}</h2>; 

class Hello extends Component {
  render() {
    const { name } = this.props;
    const nameDefault = name ? 'Princesa' : 'Sandor';
    return <h2>Bienvenidos a este curso {nameDefault}</h2>;
  }
}

class Text extends Component {
  render() {
    const { 
      arrayOfNumbers, 
      isActivated, 
      number, 
      multiply, 
      objectWithInfo,
      title
    } = this.props;

    const mappedNumbers = arrayOfNumbers.map(multiply);
    
    return <>
      <h3>Vamos a aprender React</h3>
      <p>Hola mundo, estoy usando React</p>
      <strong>Este es un strong{number}</strong>
      <span>{JSON.stringify(isActivated)}</span>
      <span>{mappedNumbers.join(', ')}</span>
      <span>{objectWithInfo.key}</span>
      {title}
    </>; 
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"/>
        <State />
        <Hello name/>
        <Text
          arrayOfNumbers={[1, 2, 3]} 
          isActivated
          number={3}
          multiply={number => number * 4}
          objectWithInfo={{ key: 'First Value', key2: 'OtherValue'}} 
          title = {<h1>Soy un H1</h1>}
        />
        <PropsDefault />
      </header>
      <RenderizadoCondicional />
      <Listas />
      <ListasObjetos />
      <Eventos />
      <EventosBindeado />
      <EventosArrowFunction />
      <Forms />
      <FormsRefs />
      <FormsSubmitChange />
      <FormsControlledComponents />
      <ChildrenProps />
      <ChildrenAndPropTypes />
      <Constructor />
      <Render />
      <ComponentDidMount />
      <Fetch />
      <ShouldComponentUpdate />
      <ShouldComponentUpdateWithPureComponent />
    </div>
  );
}

export default App;
