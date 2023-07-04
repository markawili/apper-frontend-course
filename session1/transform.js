function transform(arr) {
    return arr.sort((a,b) => a - b).map(num => Math.pow(num,2))
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)