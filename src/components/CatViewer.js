import { Component } from 'react';
import Cat from './Cat';
import CatCounter from './CatCounter';

export default class CatViewer extends Component {
    
    state = {
        cats: [],
        counter: 0
    };

    increment = () => {

        let catList = [...this.state.cats, <Cat key={ this.state.counter } />];

        this.setState({
            counter: this.state.counter + 1,
            cats: catList
        });
    }

    decrement = () => {

        let catList = this.state.cats;
        catList.pop();
        
        if (this.state.counter > 0){
            this.setState({
                counter: this.state.counter - 1,
                cats: catList
            });
        } else {
            alert("No puedes tener gatos negativos.");
        }
    }

    render(){
        return (
            <>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <CatCounter counter = { this.state.counter }  />
                    <button onClick={this.increment}>+</button>
                </div>
                { this.state.cats.length > 0 ? this.state.cats.map(cat => cat) : <p>No hay gatitos :(</p>}
            </>
        );
    }
}