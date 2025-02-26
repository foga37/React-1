import { Component } from "react";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {navbar: 'navbar'};
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextState.navbar !== this.state.navbar
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');   
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                <h1> {this.state.navbar} </h1>
            </div>
        )
    }
}