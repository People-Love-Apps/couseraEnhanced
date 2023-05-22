console.log('hello from coursera Enhanced ');
console.log('*******gang gang*******');

let nav = document.getElementsByClassName('rc-PreviousAndNextItem');

console.log('*******NAV*******');
console.log(nav);
console.log('*******NAV*******');

let enhance = document.createElement('a');
enhance.setAttribute('class', 'nav-btn complete');
enhance.setAttribute('role', 'button');
enhance.setAttribute('href', '#');
enhance.setAttribute('id', 'Left_menu_toggle');

let span = document.createElement('span');
span.setAttribute('class', 'nav-txt');

nav.prepend(enhance);
enhance.appendChild(span);
enhance.innerHTML = 'Toggle Sidebar';
