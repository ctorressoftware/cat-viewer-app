import { Component } from 'react';

export default class Cat extends Component {

    state = {
        avatar: ""
    }

    componentDidMount(){
        
        fetch(process.env.REACT_APP_API)
        .then(response => response.json())
        .then(data => {
            this.setState({ avatar: data.webpurl });
        });
    }

    render(){
        return (
            <>
                <figure>
                    <img width={ 700 } src={ this.state.avatar } alt="Gaturro" />
                </figure>
            </>
        );
    }
}