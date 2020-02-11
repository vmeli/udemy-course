import React, { PureComponent } from 'react';

class EventosBindeado extends PureComponent {
    constructor() {
        super();
        this.state = { mouseX: 0, mouseY:0 }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        const { clientX, clientY } = e;
        this.setState({
            mouseX: clientX,
            mouseY: clientY
        })
    }
    render() {
        return <div 
                onMouseMove={this.handleMouseMove}
                style={{ border: '1px solid peru',
                        marginTop: 10,
                        padding: 10 }}>
                    <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
    }
}

export default EventosBindeado;