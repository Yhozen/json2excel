const spaces = 2

module.exports = function grow (growtype) {
    switch (growtype) {
        case 'H_BREAK':    
            return [0, spaces + 1]
        case 'V_BREAK':
            return [spaces, 0]
        case 'INIT_COLUMN':
            return [1,0]
        default:
            return [spaces, 0] 
    }
}