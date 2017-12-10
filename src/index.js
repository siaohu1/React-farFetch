import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom'
import App from "./components/App";
import './pubComponents/style/reset.css'


render(
    <App/>,
    document.querySelector('#root')
);