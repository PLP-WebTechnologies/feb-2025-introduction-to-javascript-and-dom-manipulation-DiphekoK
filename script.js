
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been changed dynamically!';
}


function modifyStyle() {
    const textElement = document.getElementById('dynamic-text');
    textElement.style.color = 'blue';
    textElement.style.fontWeight = 'bold';
}


function addElement() {
    const container = document.getElementById('new-element');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'A new paragraph element has been added!';
    container.appendChild(newParagraph);
}


function removeElement() {
    const container = document.getElementById('new-element');
    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
