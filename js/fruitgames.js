function checkName() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        alert(`Welcome, ${name} ! Get Ready To Play Fruit Games.🤩`);
        document.getElementById('games').style.display = 'block';
        initializeTrafficSignal();
    } else {
        alert('Please Enter Valid Name To Play Fruit Games.');
    }
}


function countAlphabets() {
    const text = document.getElementById('textInput').value;
    const alphabetsCount = text.replace(/[^a-zA-Z]/g, '').length;

    if (alphabetsCount > 0) {
        document.getElementById('result1').innerText = `The input contains ${alphabetsCount} alphabets. 🤩`;
    } else {
        document.getElementById('result1').innerText = 'No alphabets found in the input! 😥';
    }
}
function resetAlphabetsGame() {
    document.getElementById('textInput').value = '';
    document.getElementById('result1').innerText = '';
}


function countWords() {
    const sentence = document.getElementById('sentenceInput').value.trim();
    if (sentence) {
        const wordsCount = sentence.split(/\s+/).length;
        document.getElementById('result2').innerText = `The input contains ${wordsCount} words. 🤩`;
    } else {
        document.getElementById('result2').innerText = 'No words found in the input! 😥';
    }
}
function resetWordsGame() {
    document.getElementById('sentenceInput').value = '';
    document.getElementById('result2').innerText = '';
}


const fruits = [
    { name: 'Apple', image: '/img/apple.png' },
    { name: 'Banana', image: '/img/banana.png' },
    { name: 'Orange', image: '/img/orange.png' }
];

function initializeFruitGame() {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    document.getElementById('fruit-image').src = randomFruit.image;
    document.getElementById('fruit-image').dataset.name = randomFruit.name;
}

function chooseFruit(name) {
    const fruitName = document.getElementById('fruit-image').dataset.name;

    if (name === fruitName) {
        document.getElementById('resultFruit').innerText = `Correct! The fruit is ${fruitName}.🤩`;
    } else {
        document.getElementById('resultFruit').innerText = `Wrong!😥 The fruit is ${fruitName}.`;
    }
}
function resetFruitGame() {
    initializeFruitGame();
    document.getElementById('resultFruit').innerText = '';
}
