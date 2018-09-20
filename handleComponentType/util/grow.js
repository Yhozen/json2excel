const spaces = 2

module.exports = function grow (growDir) {
    if (growDir == 'row') return [spaces, 0] 
    if (growDir == 'column') return [0, spaces + 1]
}