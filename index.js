const fs = require('fs-extra')
const XlsxPopulate = require('xlsx-populate')
const get = require('lodash.get')
const fetch = require('node-fetch')

const handleComponentType = require('./handleComponentType')

const URL = 'https://tlobzrztlyxicim.form.io/user/login'


main()

async function main () {
    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet(0).name('Form')
    const json = await fetchJson(URL)
    parseJson(json, sheet)
    sheet.column('A').width(25)
    workbook.toFileAsync('./outputs/test.xlsx')
}

async function fetchJson(url) {
    const response = await fetch(url)
    return response.json()
}

function parseJson(json, sheet) {
    const { title, components } = json
    if (!components) throw console.error('No components')
    const initialCell = sheet.cell('A1').value(title).style({bold: true, fontSize: 18})
    components.reduce(
        (accumulator, component, i, array) => handleComponentType(accumulator, component),
        { cell: initialCell.relativeCell(1,0), growDir: 'row' }
    )
}