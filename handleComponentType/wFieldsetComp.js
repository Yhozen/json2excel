const grow = require('./util/grow')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

module.exports = function wFieldsetComp  (context, {components, legend}) {
    const cell = context.next()
    cell.value(legend)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    context.update(cell.relativeCell(1,0))
    const { cell: newCell } = components.reduce( handleFieldset,
    initial 
    )
    return { ...accumulator, cell }
}


function handleFieldset (...params) {
    console.log(params)
    return handleComponentType(...params)
}