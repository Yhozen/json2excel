module.exports = wRadioComp
function wRadioComp ({ row, column }, component, sheet) {
    const { _maxRowNumber } = sheet.row(row).cell(column)
        .value([[ component.label, '']])
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const valuesArray = component.values || component.data.values // to handle both radio and select with one function
    const values = '"' + valuesArray.map(({value}) => value).toString() + '"'
    sheet.row(row).cell(column+1).dataValidation(values)
    return { row: _maxRowNumber+2, column:1 }
}
