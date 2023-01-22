const vectorGraphic = document.querySelector('#download')

function logID () {
    console.log('click on this element:', this.id);
}

vectorGraphic.addEventListener('click', logID);
