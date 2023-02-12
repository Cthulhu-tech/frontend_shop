import { KeySringValueString } from "./type"

export const deepEqual: any = (x: KeySringValueString, y: KeySringValueString) => {
    return (x && y && typeof x === 'object' && typeof y === 'object') 
    ?
    (Object.keys(x).length === Object.keys(y).length) 
    && Object.keys(x).reduce((isEqual, key) => isEqual && deepEqual(x[key], y[key]) , true) 
    : (x === y)
}