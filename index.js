const XlsxPopulate = require('xlsx-populate')

main()

async function main () {
    const workbook = await XlsxPopulate.fromBlankAsync()
    workbook.sheet("Sheet1").cell("A1").value("This is neat!")
    workbook.toFileAsync("./outputs/test.xlsx")
}