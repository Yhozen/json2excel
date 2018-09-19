module.exports = cell => cell.address()

// There is no need for this code

// const BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const mod = (x,n) => (x % n + n) % n // fix mod operator in js

// function cellMapping ({ row, column }) {
//     return columnToLetter(column) + row
// }

// function columnToLetter (column) {
//     let remainder = column % BASE.length
//     let quotient = (column / BASE.length) | 0 // transform to int
//     remainder = mod(remainder-1, BASE.length) 
//     if (remainder == BASE.length-1) quotient -= 1
//     if (quotient == 0) return BASE[remainder]
//     return columnToLetter(quotient) + BASE[remainder]
// }