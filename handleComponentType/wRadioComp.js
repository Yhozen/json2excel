module.exports = function wRadioComp (cell, component) {
    cell.value([[ component.label, '']])
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const valuesArray = component.values || component.data.values // to handle both radio and select with one function
    const values = '"' + valuesArray.map(({value}) => value).toString() + '"'
    cell.relativeCell(0,1).dataValidation(values)
    return cell.relativeCell(2,0)
}
