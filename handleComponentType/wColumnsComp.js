const grow = require('./util/grow')

/* handle recursive depencency */
let handleComponentType = null
process.nextTick( () => handleComponentType = require('./index'))
/* handle recursive depencency */

const wColumnsComp = (accumulator, { label, columns }) => {
    const { cell: lastCell, growDir, context } = accumulator
    context.push('COLUMN')
    const cell = lastCell.relativeCell(...grow(growDir))
    cell.value(label)
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const initial = { ...accumulator, cell, growDir: 'H_BREAK', }
    columns.reduce( columnReduce, initial )
    context.pop()
    return { ...accumulator, cell: initial.cell.relativeCell(...grow(growDir)) }
}

function columnReduce (accumulator, { components, growDir }, i) {
    return components.reduce((middleAcc, elem, j, array) => {
        (i==0 && j==0) ? middleAcc = { ...middleAcc, growDir: 'INIT_COLUMN'} : middleAcc = { ...middleAcc, growDir: 'H_BREAK' } 
        return handleComponentType(middleAcc, elem, j, array)
    }, accumulator)
}

module.exports = wColumnsComp
