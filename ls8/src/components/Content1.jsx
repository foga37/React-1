import { Component } from "react";

export class Content1 extends Component {
    constructor(props) {
        super(props)
        this.state = {content: 'content1'}
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return this.nextState !== this.state.content
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componntWillUnmount');
    }
    render() {
        return (
            <div>
                <h1> {this.state.content} </h1>
            </div>
        )
    }
}