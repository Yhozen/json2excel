const grow = require('./util/grow')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

module.exports = function wFieldsetComp  (accumulator, {components, legend}) {
    const { cell: lastCell, growDir } = accumulator
    const cell = lastCell.relativeCell(...grow(growDir))
    cell.value(legend)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const initial = { ...accumulator, cell: cell.relativeCell(1,0)}
    const { cell: newCell } = components.reduce( handleComponentType,
    initial 
    )
    return { ...accumulator, cell }
}