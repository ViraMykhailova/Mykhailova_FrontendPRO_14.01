const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    let min = 0;
    let max = characters.length;
    let key = '';

    for(let i=0; i < length; i++) {
    let randomEl = Math.floor(
        Math.random() * (max - min + 1) + min);
    key += characters[randomEl];
    }
    return key;
}

const key = generateKey(8, characters);
console.log(key);

