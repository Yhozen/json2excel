const grow = require('./util/grow')
const ColCompContext = require('./context/ColCompContext')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

module.exports = function wFieldsetComp  (context, {components, legend}) {
    if (legend) { 
        let cell = context.next()
        cell.value(legend)
            .style({ fontSize: 14, fill: 'd9d9d9' })
    } 
    const fieldSetContext = new ColCompContext(context.current(), context)
    components.reduce( handleComponentType,
        fieldSetContext 
    )
    console.log(fieldSetContext._cell.rowNumber(),fieldSetContext._cell.columnNumber())
    return fieldSetContext.parent
}