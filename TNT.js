const TNT = document.getElementById('TNT');
const Drop_zone = document.getElementById('Drop_zone');

/* Dette marker hva det er som blir "Dragga" */ 
TNT.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain','myItem');
});

/* Dette gjør at man kan "Droppe" den i Drop_zone sonen */
Drop_zone.addEventListener('dragover', e => {
e.preventDefault();
Drop_zone.classList.add('active');
});

Drop_zone.addEventListener('dragleave', () => {
Drop_zone.classList.remove('active');
});

/* Denne delen "linker" og navigerer deg til neste side */

Drop_zone.addEventListener('drop', e =>{
e.preventDefault();
alert('BOOOOOOOOM!!')
window.location.href = 'rom3.html';
});