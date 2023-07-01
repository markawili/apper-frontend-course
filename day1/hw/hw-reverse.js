function reverse(word) {
    let reversedWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }
    return reversedWord
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord)