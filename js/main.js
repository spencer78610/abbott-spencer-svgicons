const vectorGraphic = document.querySelector('#newbadge')

function logID () {
    console.log('click on this element:', this.id);
}

vectorGraphic.addEventListener('click', logID);
