import React from 'react';

class Button extends React.Component {
    constructor(props) { // React Props are read-only! You will get an error if you try to change their value.
        super(props);
        this.state = {
            background: "yellow",
            color: "blue",
            padding:"10px",
            margin:"20px"
        };
        // this.changeColor=this.changeColor.bind(this);
    }

    changeColor = (a) => {
        this.setState({
            background: "red"
        });
        alert(a);
    }

    render() {
        return <button type="button" onClick={this.changeColor.bind(this, "Safdari")} style={this.state}>Change color
            {this.props.element.background}
            {this.props.element.color}
            {this.state.background}
        </button>
    }
}

class Counter extends React.Component {
    constructor() {
        super(); // The super() method refers to the parent class.
        this.state = { // In React, component properties should be kept in an object called state.
            counter: 0
        };
    }

    handleDecrement = () => {
        this.setState({
                counter: this.state.counter - 1
            }
        );
    };

    handleIncrement = () => {
        this.setState(val => ({
                counter: val.counter + 1
            })
        );
    };

    render() {
        const div = {
            background: "lightblue",
            color: "white"
        };
        return (
            <div className="d-flex">
                <button type="button" onClick={this.handleIncrement}>Increment</button>
                <p>{this.state.counter}</p>
                <button type="button" onClick={this.handleDecrement}>Decrement</button>
                <Button element={div}/>
            </div>
        );
    }
}

export default Counter;