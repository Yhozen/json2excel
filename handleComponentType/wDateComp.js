module.exports = wDateComp
function wDateComp ({ row, column }, component, sheet) {
    const { _maxRowNumber } = sheet.row(row).cell(column)
        .value(component.label)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    sheet.row(row).cell(column+1).value(new Date(2000,1,1)).style('numberFormat', "M/D/YY")
        .style({ fontSize: 14, fill: 'd9d9d9' })
    return { row: _maxRowNumber+2, column:1 }
}
