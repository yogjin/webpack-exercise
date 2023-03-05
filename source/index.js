import hello_word from './source/hello.js';
import world_word from './source/world.js';

document.querySelector('#root').innerHTML = `${hello_word} ${world_word}`;
