module.exports = function wRadioComp (context, component) {
    const cell = context.next()
    cell.value([[ component.label, '']])
        .style({ fontSize: 14, fill: 'd9d9d9' })
    const valuesArray = component.values || component.data.values // to handle both radio and select with one function
    const values = '"' + valuesArray.map(({value}) => value).toString() + '"'
    cell.relativeCell(0,1).dataValidation({
        type: 'list',
        showErrorMessage: true,
        error: 'Must be a member of the list',
        errorTitle: 'Incorrect value',
        formula1: values //Required
    })
    context._update( cell.relativeCell(0,1) )
    return context
}