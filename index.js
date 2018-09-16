const fs = require('fs-extra')
const XlsxPopulate = require('xlsx-populate')
const get = require('lodash.get')
const fetch = require('node-fetch')

const URL = 'https://tlobzrztlyxicim.form.io/user/login'

main()

async function main () {
    const json = await fetchJson(URL)
    const toWrite = parseJson(json)
    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet(0).name('Form')
    sheet.column("A").width(25)
    sheet.cell("A1").style({bold: true, fontSize: 16}).value(toWrite)
    workbook.toFileAsync("./outputs/test.xlsx")
}

async function fetchJson(url) {
    const response = await fetch(url)
    return response.json()
}

function parseJson(json) {
    const { title, components } = json
    if (!components) throw console.error('No components')
    const celdas = components.filter(c => c.type != 'button').map( componente => {
        return [componente.label, '' ]
    })
   return [[title]].concat(celdas)
}