function eingabe(zahl) {
    // Holen des ersten Elements mit der Klasse 'Anzeige'
    let element = document.getElementsByClassName('Anzeige')[0];
    element.innerHTML += zahl;
}

function calculateResult() {
    let container = document.getElementsByClassName('Anzeige')[0];
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementsByClassName('Anzeige')[0];
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    }
    else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function deleteAll() {
    let container = document.getElementsByClassName('Anzeige')[0];
    container.innerHTML = ('');
}