module.exports = wTextComp
function wTextComp ({ row, column }, component, sheet) {
    const { _maxRowNumber } = sheet.row(row).cell(column)
    .value([[ component.label, 'Write here']])
    .style({ fontSize: 14, fill: 'd9d9d9' })
    return { row: _maxRowNumber+2, column:1 }
}
