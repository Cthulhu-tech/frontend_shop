import { ObjectValidation, useFormCallbackReturn } from './type'
import { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateToken } from '../redux/store/token'

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
            if(data.data.accesstoken) dispatch(updateToken(data.data.accesstoken))
            setErrors({serverNotError: "Все успешно! Переход на главную страницу"})
            setTimeout(() => navigate('/', { replace: true }), 2000)
            
        })
        .catch(() => setErrors({serverError: "Логин или пароль имеют ошибку"}))
    }

    const change = (event: ChangeEvent<HTMLInputElement>) => setData({...data, [event.target.name]: event.target.value})

    return { change, submit, data, errors }
}
