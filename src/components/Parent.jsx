import React, { Component } from 'react';
import Enfant from './Enfant'

class Parent extends Component {
    state = {MaValeurTransiter: "blablablalba"}

    useProps = (e) => {console.log(e); this.setState({MaValeurTransiter: e})}

    render() {
        return (
            <div>
                <p>{this.state.MaValeurTransiter}</p>
                <Enfant transit={(e) =>this.useProps(e)}/>
            </div>
        );
    }
}

export default Parent;