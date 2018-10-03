module.exports = function wEmailComp (context, component, i, array) {
    const cell = context.next()
    cell.value([[ component.label, '']]).style({ fontSize: 14, fill: 'd9d9d9' })
    const validationCell = cell.relativeCell(0,1)
    const address = validationCell.address()
    validationCell.dataValidation({
        type: 'custom',
        showErrorMessage: true,
        error: 'Must be a correct email address',
        errorTitle: `Data type didn't match`,
        formula1: `AND(ISNUMBER(SEARCH("@",${address})),ISNUMBER(SEARCH(".",${address})))`
    })

    context._update(validationCell)
    return context
}