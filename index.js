const XlsxPopulate = require('xlsx-populate')

main()

async function main () {
    const workbook = await XlsxPopulate.fromBlankAsync()
    workbook.sheet(0).cell("A1").value([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
    workbook.toFileAsync("./outputs/test.xlsx")
}