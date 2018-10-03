const GlobalContext = require('./GlobalContext')
const grow = require('../util/grow')

class ColumnContext extends GlobalContext {
    constructor (cell, parent) {
        super(cell)
        this.parent = parent
    }
    next () {

        this._cell = this.sheet.cell(this.y.min.rowNumber(), this.x.max.columnNumber()).relativeCell(...grow('H_BREAK'))
    
        this._update(this._cell)
        return this._cell
    }
    _update (cell) {
        this.parent._update(cell)
        const current = this.x.max.columnNumber()
        const possibleMax = cell.columnNumber() 
        if (possibleMax > current) this.x.max = cell
    }
}

module.exports = ColumnContext