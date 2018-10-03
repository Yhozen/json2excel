const GlobalContext = require('./GlobalContext')

class ColCompContext extends GlobalContext {
    constructor (cell, parent) {
        super(cell)
        this.parent = parent
    }

    _update (cell) {
        this.parent._update(cell)
        const current = this.y.max.rowNumber()
        const possibleMax = cell.rowNumber() 
        if (possibleMax > current) this.y.max = cell
    }
}

module.exports = ColCompContext