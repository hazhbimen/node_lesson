'use strict'

const Component = require('./Component');
import './reset.css';
import './style.css';
import './component.sass';

const root = document.getElementById('root');
const div = document.createElement('div');
div.textContent = 'HELLO!';
div.classList.add('block');
div.classList.add('component');
root.append(div);

const imageDiv = document.createElement('img');
imageDiv.src = './image.png';
imageDiv.classList.add('image');
root.append(imageDiv);




