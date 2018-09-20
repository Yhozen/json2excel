const grow = require('./util/grow')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

const wRowComp = (accumulator, component) => {
    const { cell, growDir } = accumulator
    cell.value(component.label)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const initial = { ...accumulator, cell: cell.relativeCell(...grow(growDir)), growDir: 'row'}
    component.columns.reduce( (acc, column) => {
        return column.components.reduce( (accumulator, component, i, array) => handleComponentType(accumulator, component),
        acc 
        )
    }, initial )
    return { ...accumulator, cell: initial.cell.relativeCell(...grow(growDir)) }
}

module.exports = wRowComp