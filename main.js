const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    let min = 0;
    let max = characters.length;

    let result = Math.floor(
        Math.random() * (max - min + 1) + min
    );
    console.log(characters[result]);

}
const key = generateKey(16, characters);
console.log(key);