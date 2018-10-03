const XlsxPopulate = require('xlsx-populate')
const fetch = require('node-fetch')

const handleComponentType = require('./handleComponentType')
const GlobalContext = require('./handleComponentType/context/GlobalContext')

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
    const globalContext = new GlobalContext(sheet.cell('A1'))
    const initialCell = globalContext.y.min.value(title).style({bold: true, fontSize: 18})
    components.reduce(handleComponentType,
        globalContext
    )
}