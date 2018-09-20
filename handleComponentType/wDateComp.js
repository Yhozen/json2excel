module.exports = function wDateComp ({cell, growDir}, component) {
    cell.value(component.label)
        .style({ fontSize: 14, fill: 'd9d9d9' })

    cell.relativeCell(0,1).value(new Date(2000,1,1)).style('numberFormat', "M/D/YY")
        .style({ fontSize: 14, fill: 'd9d9d9' })
    return cell.relativeCell(2,0)
}
