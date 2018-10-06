const XlsxPopulate = require('xlsx-populate')
const fetch = require('node-fetch')

const handleComponentType = require('./handleComponentType')
const GlobalContext = require('./handleComponentType/context/GlobalContext')

const TEST_URL = 'https://tlobzrztlyxicim.form.io/user/login'


module.exports = main

/**
 * @param {String} url - URL to a form.io json form
 * @param {Function} writeCallback - Callback to write data
 */
async function main (url = TEST_URL, writeCallback = output) {
    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet(0).name('Form')
    const json = await fetchJson(url)
    parseJson(json, sheet)
    sheet.column('A').width(25)
    sheet.gridLinesVisible(false) 
    writeCallback(workbook)
}

async function fetchJson(url) {
    const response = await fetch(url)
    return response.json()
}

function parseJson(json, sheet) {
    const { title, components } = json
    if (!components) throw console.error('No components')
    const initialCell = sheet.cell('A1').value(title).style({bold: true, fontSize: 18})
    const globalContext = new GlobalContext(initialCell)
    components.reduce(handleComponentType, globalContext)
}

function output (workbook) {
    workbook.toFileAsync('./outputs/test.xlsx')
}