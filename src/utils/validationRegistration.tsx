import { ObjectValidation } from '../hook/type'
import validator from 'validator'

export const validationRegistration = (data: ObjectValidation) => {

    const errors:ObjectValidation = {}

    if(!validator.isEmail(data['email'] ?? '')) errors['email'] = 'Это поле должно содержать email'

    if(!validator.isMobilePhone(data['phone'] ?? '')) errors['phone'] = 'Это поле должно содержать номер телефона'

    if(!data['firstName'] || (data['firstName'].length <= 0 || data['firstName'].length > 55)) errors['firstName'] = 'Это поле должно иметь длину от 1 до 55 символов'

    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,55}$/.test(data['password'])) errors['password'] = 'Это поле должно иметь длину от 6 до 55 символов и иметь один из спецсимволов @#!$%^&*, буквы  в верхнем и нижнем регистре, а так же цифры'

    if((data['password'] !== data['password_repeat'])) errors['password_repeat'] = 'Пароли должны иметь совпадение'

    if(Object.keys(errors).length > 0) return {check: false, error: errors}

    return {check: true, error: errors}
}