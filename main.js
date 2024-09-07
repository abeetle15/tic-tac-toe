import { Board } from "./game.js";
import { Dom } from './site.js'

export const squares = document.querySelectorAll('.grid-item');
export const alertDiv = document.querySelector('#alert-container');
export const alertText = document.querySelector('#alert-text');
export const alertBtn = document.querySelector('#alert-btn');
export const currentDisplay = document.querySelector('#current-display');
export const currentToken = document.querySelector('#token-display');
Dom.addSquareListeners();

console.log(`que me falta:
  -jugador activo;
    `)

