const grow = require('./util/grow')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

const wColumnsComp = ({cell, growDir}, component) => {
    cell.value(component.label)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const initial = { cell: cell.relativeCell(...grow(growDir)), growDir: 'column'}
    component.columns.reduce( (acc, column) => {
        return column.components.reduce( (accumulator, component, i, array) => handleComponentType(accumulator, component),
        acc 
        )
    }, initial )
    return { cell: initial.cell.relativeCell(...grow(growDir)), growDir }
}

module.exports = wColumnsComp