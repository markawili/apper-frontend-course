function checkPalindrome(word) {
    let reversedWord = word.split('').reverse().join('')
    return word == reversedWord
}

const word = 'racecar'
const word2 = 'notapalindrome'

console.log(`${word} is a palindrome: ${checkPalindrome(word)}`)
console.log(`${word2} is a palindrome: ${checkPalindrome(word2)}`)
