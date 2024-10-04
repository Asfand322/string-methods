let name1 = "asfand bhai"
console.log(name1[0])

console.log(name1.toUpperCase())

console.log(name1.slice(2,5))

console.log(name1.replace("bhai","bhaiya"))


let name2 = "amaan"
console.log(name1.concat(" is a friend of ",name2))


let amount = "i have got my 2000 rs"
console.log(amount.slice(14,21))
console.log(amount.replace("v","w"))


// result will be 2000rs

for(let i=0;i<=name1.length;i++){
    console.log(name1[i])
}

// result will be
// a
// s
// f
// a
// n
// d