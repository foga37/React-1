import { useEffect, useState } from "react";

export function Content2() {
    const [content2, setContent] = useState('content 2');
    useEffect(() => {
        console.log('Content2 componentDidMount');
    }, []);
    useEffect(() => {
        console.log('Content2 content2 changed');
    }, [content2]);
    useEffect(() => {
        return () => {
            console.log('Content2 componentWillUnmount');
        }
    }, []);

    return(
        <div>
            <h1> {content2} </h1>
            <button onClick={() => setContent('Update Content2')}> changed </button>
        </div>
    )
}