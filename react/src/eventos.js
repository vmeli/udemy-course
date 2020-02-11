import React, { PureComponent } from "react";

class Eventos extends PureComponent {

    handleClick (e) {
        console.log("Synthetic Event", e); 
        console.log("Native Event", e.nativeEvent);     
        return alert("Princesa");
    }

    render () {
        return <>
            <button onClick={() => alert("Adoptaron a Princesa!!!")}>Princesa</button>
            <button onClick={this.handleClick}>Hi there!</button>
        </> 
    }
}

export default Eventos;