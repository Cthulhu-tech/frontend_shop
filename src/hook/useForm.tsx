import { ObjectValidation, useFormCallbackReturn } from './type'
import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToken } from '../redux/store/token'
import { useNavigate } from 'react-router-dom'
import { ReduxStore } from '../redux/type'
import axios from 'axios'


export function useForm(validation: (data: ObjectValidation) => useFormCallbackReturn, url: string, create = false) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const images = useSelector((store: ReduxStore) => store.ImageStore)
    const type = useSelector((store: ReduxStore) => store.CategoryStore)
    const categoryId = useSelector((store: ReduxStore) => store.CategoryStore)
    const token = useSelector((store: ReduxStore) => store.TokenStore.access)
    const [errors, setErrors] =  useState<ObjectValidation>()
    const [data, setData] = useState<ObjectValidation>({})

    useEffect(() => {console.log(categoryId)}, [data, type, categoryId])

    const submit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        data.categoryId = categoryId
        const {check, error} = validation(data)

        setErrors(error)

        if(create) {
            data['categoryId'] = type
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }
        

        if(check) axios.post(process.env.REACT_APP_SERVER + url, !create ? data : {...data, images}, { withCredentials: true })
        .then((data) => {
            if(data.data.accesstoken){
                dispatch(updateToken(data.data.accesstoken))
                if(!create){
                    setErrors({serverNotError: "Все успешно! Переход на главную страницу"})
                    setTimeout(() => window.location.reload(), 1000)
                }
                return
            }    
            if(!create){
                setTimeout(() => navigate('/auth', { replace: true }), 1000)
                setErrors({serverNotError: "Все успешно! Переход на страницу авторизации"})
            }
            if(create) {
                setTimeout(() => navigate('/user', { replace: true }), 1000)
                setErrors({serverNotError: "Все успешно! Переход на страницу аккаунта"})
            }
        })
        .catch(() => !create ? setErrors({serverError: "Логин или пароль имеют ошибку"}) : setErrors({serverError: "Создания"}))
    }

    const change = (event: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => setData((prevstate) => { return {...prevstate, [event.target.name]: event.target.value}})

    return { change, submit, data, errors }
}
