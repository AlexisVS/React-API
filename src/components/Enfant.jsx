import React, { Component } from 'react';

class Enfant extends Component {
    state = {
        MaValeurATransiter: "Je suis passer !!"
    }

    render () {
        return (
            <div>
                <button
                    onClick={() => this.props.transit(this.state.MaValeurATransiter)}>
                    appuie
                </button>
            </div>
        );
    }
}

export default Enfant;