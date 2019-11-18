import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import House from './components/house.js'

function App(){
    return (
        <div>
        <House/>
        </div>
    )
}


ReactDom.render( <App/>, document.getElementById('root'));
