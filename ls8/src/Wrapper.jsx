import { useState } from "react";
import { Content1 } from "./components/Content1";
import { Navbar } from "./components/Navbar";
import { Content2 } from "./components/Content2";
import { Footer } from "./components/Footer";

export function Wrapper() {
    const [toRender, setToRender] = useState('navbar');
    const toggle = (component) => {
        setToRender(component);
    }
    return (
        <div>
           <div>
                <button onClick={() => toggle('navbar')}>Navbar</button>
                <button onClick={() => toggle('content1')}>Content1</button>
                <button onClick={() => toggle('content2')}>Content2</button>
                <button onClick={() => toggle('footer')}>Footer</button>
           </div>
           {toRender === 'navbar' && <Navbar/>}
           {toRender === 'content1' && <Content1/>}
           {toRender === 'content2' && <Content2/>}
           {toRender === 'footer' && <Footer/>}
        </div>
    )
}