import { Component } from 'react';

export default class CatCounter extends Component {

    render(){
        return (
            <>
                <input readOnly id="counter" value={ this.props.counter } />
            </>
        );
    }
}