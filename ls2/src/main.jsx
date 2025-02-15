
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';

console.log(App());
const n1 = 222;
function a() {
  console.log('fff');
};
function b() {
  return 3434;
};
const MyClass = 'My class';
const randomID = 'ID-' + Math.random();
const El = React.createElement('section', {d: 111}, <h2>Hello</h2>)
createRoot(document.getElementById('root')).render(
  <div>
    <h1>Task 2</h1>
    <div className='bg-red'>Red text</div>
    <App></App>
    <App />
    {App()}
    {n1}
    {a()}
    <div className='My class'>
      {b()}
    </div>
    <div>
      {React.createElement('div', {className: 1}, <div> 1212 </div>)}
    </div>

    <div>
      {El}
    </div>
    <div id={randomID}> {randomID} </div>
  </div>
)
