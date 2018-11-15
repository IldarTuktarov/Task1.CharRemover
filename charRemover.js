var separators = ["?", "!", ":", ";", ",", ".", " ", "\t"];

var str, arr, letters = {}, start = 0, words = [], result;

function fillArrayOfWords(string) {
    arr = string.split('');
    arr.forEach(function (letter, i) {
        if (separators.indexOf(letter) != -1) {
            words.push(str.substr(start, i - start));
            start = i + 1;
        }
    });

    words.push(str.substr(start));
}

function findSimilarities() {
    words.forEach(function (word) {
        word.split('').forEach(function (letter, i) {
            if (!letters[letter] && -1 != word.indexOf(letter, i + 1)) {
                letters[letter] = 1;
            }
        });
    });
}
 
function displayResultStr() {
    result = arr.filter(function (check) {
        return !letters[check];
    }).join('');

    document.getElementById('output-string').value = result;
}

document.getElementById('btn').onclick = function () {
    str = document.getElementById('input-string').value;
    fillArrayOfWords(str);
    findSimilarities();
    displayResultStr();
}