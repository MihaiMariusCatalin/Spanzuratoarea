var word

function generate() {
    word = document.getElementById('start-input').value
    document.getElementById("size").innerText = word.length
    for (let i = 0; i < word.length; ++i) {
        let letter = document.createElement("span")
        letter.id = i
        letter.innerText = "_"
        document.getElementById("start-word").append(letter)
    }
    document.getElementById('start-input').value = ""
}

let correct = 0

function guess() {
    let letter = document.getElementById("guess-input").value
    let wrong = 1
    for (let i = 0; i < word.length; ++i) {
        if (letter == word[i]) {
            document.getElementById(i).innerText = letter
            wrong = 0
            ++correct
        }
    }
    if (wrong == 1) {
        document.getElementById('lives').innerText -= 1
    }
    document.getElementById('guess-input').value = ""
    if (document.getElementById('lives').innerText == 0) {
        let finish = document.createElement('h1')
        finish.innerText = "Ai pierdut"
        document.getElementById('start-div').append(finish)
    }
    if (correct == word.length) {
        let finish = document.createElement('h1')
        finish.innerText = "Ai castigat"
        document.getElementById('start-div').append(finish)
    }
}
