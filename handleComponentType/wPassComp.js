module.exports = function wPassComp (context, component, i, array) {
    const cell = context.next()
    cell.value([[ component.label, 'password']]).style({ fontSize: 14, fill: 'd9d9d9' })
    context._update(cell.relativeCell(0,1).style('numberFormat', ';;;**'))
    return context
}