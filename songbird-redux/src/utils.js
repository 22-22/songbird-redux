export const getRandomNumber = (dataLength) => {
    return Math.floor(Math.random() * dataLength);
}

export const createGuessStatusObject = (data, round) => {
    const birdNames = data[round].map(bird => bird.name)
    let guessStatus = {};
    for (let key of birdNames) {
        guessStatus[key] = 'initial';
    }
    return guessStatus;
}

export const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
}
