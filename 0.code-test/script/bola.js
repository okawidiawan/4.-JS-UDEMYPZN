function vBola(r) {
    const phi = 3.14;
    let result = (4 / 3) * phi * r * r * r;
    return console.info(`Volume Bola dengan Jari-Jari ${r} adalah : ${result}`);
}

function lBola(r) {
    const phi = 3.14;
    let result = 4 * phi * r * r;
    return console.info(`Luas Permukaan Bola dengan Jari-Jari ${r} adalah : ${result}`);
}

export { vBola, lBola };