const grow = require('./util/grow')

module.exports = function wTextComp (accumulator, component,) {
    const { cell, growDir } = accumulator
    cell.value([[ component.label, 'Write here']]).style({ fontSize: 14, fill: 'd9d9d9' })
    return { ...accumulator, cell: cell.relativeCell(...grow(growDir))}
}
