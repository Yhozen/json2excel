const grow = require('../util/grow')

class GlobalContext {
    constructor (initial) {
        this.y = {}
        this.x = {}
        this.y.min = initial
        this.y.max = initial
        this.x.min = initial
        this.x.max = initial
        this._cell = initial
        this.sheet = initial.sheet()
    }
    _update (cell) {
        const current = this.y.max.rowNumber()
        const possibleMax = cell.rowNumber() 
        if (possibleMax > current) this.y.max = cell
    }
    next () {
        this._cell = this.sheet.cell(this.y.max.rowNumber(), this.x.min.columnNumber()).relativeCell(...grow())
        this._update(this._cell)
        return this._cell
    }
}

module.exports = GlobalContext