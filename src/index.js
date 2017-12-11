import React, {Component} from 'react';
import {render} from 'react-dom'
import './pubComponents/style/reset.css'
import routes from './routes'
import './pubComponents/style/index.css'


render(
    routes,
    document.querySelector('#root')
);