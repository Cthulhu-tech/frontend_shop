import { ObjectValidation } from '../hook/type'

export const validationCreate = (data: ObjectValidation) => {

    const errors:ObjectValidation = {}

    if(!data['title']) errors['title'] = 'Заголовок обязателен для заполнения'
    if(!data['description']) errors['description']  = 'Описание обязательно для заполнения'
    if(!data['city']) errors['city']  = 'Город обязательно для заполнения'
    if(!data['categoryId']) errors['categoryId']  = 'Категория обязательна для заполнения'
    if(Object.keys(errors).length > 0) return {check: false, error: errors}

    return {check: true, error: errors}
}