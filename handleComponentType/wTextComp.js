const grow = require('./util/grow')

module.exports = function wTextComp (context, component, i, array) {
    const cell = context.next()
    cell.value([[ component.label, 'Write here']]).style({ fontSize: 14, fill: 'd9d9d9' })
    context._update(cell.relativeCell(0,1))
    return context
}