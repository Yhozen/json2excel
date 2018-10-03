const wTextComp = require('./wTextComp')
const wNumberComp = require('./wNumberComp')
const wRadioComp = require('./wRadioComp')
const wColumnsComp = require('./wColumnsComp')
const wDateComp = require('./wDateComp')
const wFieldsetComp = require('./wFieldsetComp')
const wPassComp = require('./wPassComp')
const wEmailComp = require('./wEmailComp')

module.exports = function handleComponentType (...params) {
    const [ accumulator, { type } ] = params
    switch (type) {
         case 'columns':
            return wColumnsComp(...params)
        case 'fieldset':
            return wFieldsetComp(...params)
        case 'datetime':
            return wDateComp(...params)
        case 'number':
            return wNumberComp(...params)
        case 'password':
            return wPassComp(...params)
        case 'email':
            return wEmailComp(...params)
        case 'textfield':
            return wTextComp(...params)
        case 'select':
        case 'radio':
            return wRadioComp(...params)
        default:
            return accumulator
    }
}
