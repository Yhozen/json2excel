const wTextComp = require('./wTextComp')
const wRadioComp = require('./wRadioComp')
const wColumnsComp = require('./wColumnsComp')
const wDateComp = require('./wDateComp')

module.exports = function handleComponentType (accumulator, component){
    switch (component.type) {
         case 'columns':
            return wColumnsComp(accumulator, component)
        case 'button':
            return accumulator
        case 'email':
        case 'number':
        case 'password':
        case 'textfield':
        case 'datetime':
            return wTextComp(accumulator, component)
        case 'select':
        case 'radio':
            return wRadioComp(accumulator, component)
        default:
            return accumulator
    }
}

