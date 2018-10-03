module.exports = function wDateComp (context, component) {
    const cell = context.next()
    cell.value([[ component.label, '']])
        .style({ fontSize: 14, fill: 'd9d9d9' })
    let val = new Date()
    cell.relativeCell(0,1).value(val).style("numberFormat", "yyyy-mm-dd;@")
    context._update( cell.relativeCell(0,1) )
    return context
}

// module.exports = function wDateComp ({cell, growDir}, component) {
//     cell.value(component.label)
//         .style({ fontSize: 14, fill: 'd9d9d9' })

//     cell.relativeCell(0,1).value(new Date(2000,1,1)).style('numberFormat', "M/D/YY")
//         .style({ fontSize: 14, fill: 'd9d9d9' })
//     return cell.relativeCell(2,0)
// }
