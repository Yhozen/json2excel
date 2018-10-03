const grow = require('./util/grow')
const ColumnContext = require('./context/ColumnContext')
const ColCompContext = require('./context/ColCompContext')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

const wColumnsComp = (context, { label, columns }) => {
    let columnContext = new ColumnContext(context.next, context)
    const cell = columnContext._cell
    cell.value(label)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    columns.reduce( columnReduce, columnContext )
    return columnContext.parent
}

function columnReduce (context, { components }, i ) {
    let colCompContext
    if (i == 0) {
        colCompContext = new ColCompContext(context._cell, context)
    } else {
        colCompContext = new ColCompContext(context.next(), context)
    }
    return components.reduce( handleComponentType, colCompContext ).parent
}

module.exports = wColumnsComp
