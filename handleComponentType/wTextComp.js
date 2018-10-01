const grow = require('./util/grow')

module.exports = function wTextComp (accumulator, component, i, array) {
    const { cell: lastCell, growDir, context } = accumulator
    const [last] = context.slice(-1)
    //console.log(last, component.label, i, array)
    const cell = lastCell.relativeCell(...grow(growDir))
    cell.value([[ component.label, 'Write here']]).style({ fontSize: 14, fill: 'd9d9d9' })
    return { ...accumulator, cell }
}