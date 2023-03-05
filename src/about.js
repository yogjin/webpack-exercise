import style from './style/index.css';
import hello_word from './hello.js';
import world_word from './world.js';

document.querySelector('#root').innerHTML = `${world_word} ${hello_word}`;
