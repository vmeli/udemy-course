import React, { PureComponent } from 'react';

class EventosArrowFunction extends PureComponent {
    constructor() {
        super();
        this.state = { mouseX: 0, mouseY:0 }
    }

    handleMouseMove = (e) => {
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

export default EventosArrowFunction;