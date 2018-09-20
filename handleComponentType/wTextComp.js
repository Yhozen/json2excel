const grow = require('./util/grow')

module.exports = function wTextComp ({cell, growDir}, component,) {
    cell.value([[ component.label, 'Write here']]).style({ fontSize: 14, fill: 'd9d9d9' })
    return { cell: cell.relativeCell(...grow(growDir)), growDir}
}
