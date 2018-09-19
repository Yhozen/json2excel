module.exports = function wTextComp (cell, component,) {
    cell.value([[ component.label, 'Write here']]).style({ fontSize: 14, fill: 'd9d9d9' })
    return cell.relativeCell(2,0)
}
