module.exports = function wDateComp (context, component) {
    const cell = context.next()
    cell.value([[ component.label, '']])
        .style({ fontSize: 14, fill: 'd9d9d9' })
    let val = new Date()
    cell.relativeCell(0,1).value(val).style("numberFormat", "yyyy-mm-dd;@")
    context._update( cell.relativeCell(0,1) )
    return context
}