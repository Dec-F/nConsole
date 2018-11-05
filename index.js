require('./widget/control-panel/index.js');
var css = fs.readFileSync('./dist/index.css'); // <-- The css reader
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);