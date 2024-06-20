let words = ['portocala', 'mere', 'para', 'banana', 'ananas']
let word = words[Math.floor(Math.random() * words.length)]
document.getElementById('letters').innerText = word.length

for (let i = 0; i < word.length; ++i) {
    let letter = document.createElement('span')
    letter.id = i
    letter.innerText = '_'
    document.getElementById('text').append(letter)
}

let cnt = 0;

function check() {
    let letter = document.getElementById('input').value
    let flag = 1
    for (let i = 0; i < word.length; ++i) {
        if (letter == word[i] && document.getElementById(i).innerText != word[i]) {
            document.getElementById(i).innerText = letter
            ++cnt
            flag = 0
            console.log(cnt)
        }
    }
    document.getElementById('input').value = ''
    if (flag == 1) {
        document.getElementById('lives').innerText -= 1
    }
    if (cnt == word.length) {
        let finish = document.createElement('h1')
        finish.innerText = "Congratulation, you win!"
        document.getElementById('mainDiv').append(finish)
    }
    if (document.getElementById('lives').innerText == 0) {
        let finish = document.createElement('h1')
        finish.innerText = "You lose!"
        document.getElementById('mainDiv').append(finish) 
    } 
}
