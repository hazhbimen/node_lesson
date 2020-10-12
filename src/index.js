'use strict'

const Component = require('./Component');
import './reset.css';
import './style.css';

const root = document.getElementById('root');
const div = document.createElement('div');
div.textContent = 'HELLO!';
div.classList.add('block');
root.append(div);


