function convertToVowels(word) {
    let vowels = 'aeiou'
    let convertedWord = word.split('').filter(letter => vowels.indexOf(letter) != -1).join('')
    
    return convertedWord
}

const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)