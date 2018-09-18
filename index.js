const fs = require('fs-extra')
const XlsxPopulate = require('xlsx-populate')
const get = require('lodash.get')
const fetch = require('node-fetch')

const URL = 'https://tlobzrztlyxicim.form.io/user/login'

main()

async function main () {
    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet(0).name('Form')
    const json = await fetchJson(URL)
    parseJson(json, sheet)
    sheet.column("A").width(25)
    const range = sheet.cell("A1").style({bold: true, fontSize: 18})
    console.log(range)
    workbook.toFileAsync("./outputs/test.xlsx")
}

async function fetchJson(url) {
    const response = await fetch(url)
    return response.json()
}

function parseJson(json, sheet) {
    const { title, components } = json
    if (!components) throw console.error('No components')
    sheet.cell("A1").value(title)
    components.reduce(
        (accumulator, component, i, array) => handleComponentType(accumulator, component, sheet),
        { row: 2, column: 1 }
    )
}

function handleComponentType (accumulator, component, sheet){
    switch (component.type) {
        case 'button':
            return accumulator
        case 'email':
        case 'password':
        case 'textfield':
            return wTextComp(accumulator, component, sheet)
        case 'radio':
            return wRadioComp(accumulator, component, sheet)
        default:
            return accumulator
    }
}

function wTextComp ({ row, column }, component, sheet) {
    const { _maxRowNumber } = sheet.row(row).cell(column)
    .value([[ component.label, 'Write here']])
    .style({ fontSize: 14, fill: 'd9d9d9' })
    console.log('hola desde', component.label)
    return { row: _maxRowNumber+2, column:1 }
}
function wRadioComp ({ row, column }, component, sheet) {
    const values = '"' + component.values.map(({value}) => value).toString() + '"'
    console.log(values)
    const { _maxRowNumber } = sheet.row(row).cell(column)
    .value([[ component.label, '']])
    .style({ fontSize: 14, fill: 'd9d9d9' })
    sheet.row(row).cell(column+1)
    .dataValidation(values)
    return { row: _maxRowNumber+2, column:1 }
}