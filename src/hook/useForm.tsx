import { ObjectValidation, useFormCallbackReturn } from './type'
import { ChangeEvent, useState, useEffect } from 'react'
import { updateToken } from '../redux/store/token'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export function useForm(validation: (data: ObjectValidation) => useFormCallbackReturn, url: string) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] =  useState<ObjectValidation>()
    const [data, setData] = useState<ObjectValidation>({})

    useEffect(() => {}, [data])

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const {check, error} = validation(data)
        setErrors(error)

        if(check) axios.post(process.env.REACT_APP_SERVER + url, data, { withCredentials: true })
        .then((data) => {
            if(data.data.accesstoken){
                dispatch(updateToken(data.data.accesstoken))
                setErrors({serverNotError: "Все успешно! Переход на главную страницу"})
                setTimeout(() => navigate('/', { replace: true }), 1000)
                return
            }            
            setTimeout(() => navigate('/auth', { replace: true }), 1000)
            setErrors({serverNotError: "Все успешно! Переход на страницу авторизации"})
        })
        .catch(() => setErrors({serverError: "Логин или пароль имеют ошибку"}))
    }

    const change = (event: ChangeEvent<HTMLInputElement>) => setData({...data, [event.target.name]: event.target.value})

    return { change, submit, data, errors }
}
