const grow = require('./util/grow')

module.exports = function wRadioComp (accumulator, component) {
    const { cell: lastCell, growDir } = accumulator
    const cell = lastCell.relativeCell(...grow(growDir))
    cell.value([[ component.label, '']])
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const valuesArray = component.values || component.data.values // to handle both radio and select with one function
    const values = '"' + valuesArray.map(({value}) => value).toString() + '"'
    cell.relativeCell(0,1).dataValidation(values)
    return { ...accumulator, cell }
}