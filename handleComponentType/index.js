const wTextComp = require('./wTextComp')
const wRadioComp = require('./wRadioComp')
const wDateComp = require('./wDateComp')

module.exports = handleComponentType

function handleComponentType (accumulator, component, sheet){
    switch (component.type) {
        case 'button':
            return accumulator
        case 'email':
        case 'password':
        case 'textfield':
        case 'datetime':
            return wTextComp(accumulator, component, sheet)
        case 'select':
        case 'radio':
            return wRadioComp(accumulator, component, sheet)
        default:
            return accumulator
    }
}

