import React, { Component } from 'react';
// https://www.coindesk.com/coindesk-api

class Fetch extends Component {
    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                const { bpi } = data;
                this.setState({ bpi });
                //console.log('data',data);
            })
    }

    _renderCurrencies () {
        const { bpi } = this.state;
        const currencies = Object.keys(bpi); // ['EUR', 'GBP', 'USD']
        //console.log(bpi);
        return currencies.map(currency => (
            <div key={currency}>
            1 BTC is { bpi[currency].rate }
                <span>{currency}</span>
            </div>    
        ))
    }              

    render() {
        return (
            <>
                <h4>Fetch - Bitcoin Price Index</h4>
                {this._renderCurrencies()}
            </>
        )
    }
}

export default Fetch;
