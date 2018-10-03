module.exports = function wTextComp (context, component, i, array) {
    const cell = context.next()
    cell.value([[ component.label, '']]).style({ fontSize: 14, fill: 'd9d9d9' })
    const validationCell = cell.relativeCell(0,1)
    const address = validationCell.address()
    validationCell.dataValidation({
        type: 'custom',
        showErrorMessage: true,
        error: 'Must be a number',
        errorTitle: 'Incorrect type of value',
        formula1: `ISNUMBER(${address})`//Required
    })

    context._update(validationCell)
    return context
}