screen.orientation.lock('landscape');

const keyElements = document.querySelectorAll('.key');


// Oggetto letterale (Objects): lo definisco dentro a parentesi graffe composte da vari "nome:valore", a valore posso assegnare anche una valore, si chiamano "metodi" in questo caso. Per accedere, basta fare oggetto.nome o oggetto[nome]. Ricapitolando: variabili -> singolo valore, oggetti -> più valori

const notes = {
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3'
};

function playSound(key) {
    const audioElement = new Audio();
    const note = notes[key];
    // creo il path dinamicamente concatenando le stringhe
    audioElement.src = 'sounds/' + note;
    audioElement.play();
}

// foreach consente di iterare tutti gli elementi di una collection
keyElements.forEach(function (keyElement) {
    keyElement.addEventListener('touchend', function () {
        const key = keyElement.id;
        playSound(key);
    });
    keyElement.addEventListener('click', function () {
        const key = keyElement.id;
        playSound(key);
    });
});