import { LoadUserInfo } from '../../components/loading/loadUserInfo'
import { ProductComponent } from '../../components/product/product'
import { updateUserAccount } from '../../redux/store/userAccount'
import { useDispatch, useSelector } from 'react-redux'
import { InputUserType } from '../registration/type'
import { DeleteComponent } from './delete/delete'
import { JwtDecode } from '../../utils/decodeJWT'
import { useEffect, memo, useState } from 'react'
import { ReduxStore } from '../../redux/type'
import axios from 'axios'

import { deepEqual } from '../../utils/equal'
import 'react-phone-number-input/style.css'

const Product = memo(ProductComponent)
const Delete = memo(DeleteComponent)

export const User = () => {

    const obj = JwtDecode()
    const dispatch = useDispatch()
    const [load, setLoad] = useState(true)
    const [change, setChange] = useState(false)
    const token = useSelector((store: ReduxStore) => store.TokenStore.access)
    const userAccount = useSelector((store: ReduxStore) => store.UserAccountStore)
    const [input, setInput] = useState<InputUserType>({ name: false, surname: false, phone: false, email: false })
    const [data, setData] = useState(userAccount)

    useEffect(() => {
        if(obj && !userAccount) axios.get(process.env.REACT_APP_SERVER + 'users/' + obj.userId)
        .then((data) => {
            setData(data.data)
            dispatch(updateUserAccount(data.data))
        }).finally(() => setLoad(false))
        else {
            setLoad(false)
        }
    }, [])

    useEffect(() => {
        if(deepEqual(data, userAccount))
            setChange(false)
        else setChange(true)
    }, [data, userAccount])

    const updateData = (event: React.ChangeEvent<HTMLInputElement>) => data && setData({...data, [event.target.name]: event.target.value})
    
    const changeElementText = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => changeElement(event)

    const changeElementInput = (event: React.FocusEvent<HTMLInputElement, Element>) => changeElement(event)

    const changeElement = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent> | React.FocusEvent<HTMLInputElement, Element>) => {
        const name = event.currentTarget.getAttribute('data-name') as string
        if(!name) return
        setInput((prevData) => {
            Object.keys(prevData).forEach(key => key !== name && (prevData[key] = false))
            return {...prevData, [name]: !prevData[name]}
        })
    }

    const changeDataUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        obj && axios.put(process.env.REACT_APP_SERVER + 'users/' + obj.userId, data, { withCredentials: true })
        .then(() => {
            setData(data)
            data && dispatch(updateUserAccount(data))
        }).finally(() => setLoad(false))
    }

    const resetChange = () => setData(userAccount)
    

    return <>
        <form className={change ? "max-w-sm rounded overflow-hidden shadow-sm bg-slate-50 mx-5" : "max-w-sm rounded overflow-hidden shadow-sm bg-slate-50 mx-5 pb-14"} onSubmit={changeDataUser}>
            {load ?
            <LoadUserInfo/>
            :
            <div className={change ? 'px-6 py-4' : 'px-6 py-4 pb-9'}>
                <div className="x-6 py-4">
                    <h1 className="font-bold text-xl mb-2 max-w-xs">
                        {input.name 
                        ? <input className='outline-none bg-slate-50 max-w-[25%]' data-name="name" autoFocus onClick={changeElement} value={data?.name ?? ''} name="name" onChange={updateData} onBlur={changeElementInput} /> 
                        : <span data-name="name" onClick={changeElementText}>{data?.name}</span>}
                        {input.surname 
                        ? <input className='outline-none bg-slate-50 max-w-[25%] pl-1' data-name="surname" autoFocus onClick={changeElement} value={data?.surname ?? ''} name="surname" onChange={updateData} onBlur={changeElementInput} /> 
                        : <span className='p-1' data-name="surname" onClick={changeElementText}>{data?.surname}</span>}
                    </h1>
                    {input.city 
                    ? <input className='outline-none bg-slate-50 max-w-[100%]' data-name="city" autoFocus onClick={changeElement} onChange={updateData} onBlur={changeElementInput}  name="city" value={data?.city ?? ''} /> 
                    : <p className="text-gray-700 text-base" data-name="city" onClick={changeElement}>{ data?.city ?? 'Не указан' }</p>}
                </div>
                <div className="x-6 py-4 group">
                    <h1 className="font-bold text-xl mb-2">Телефон</h1>
                    {input.phone 
                    ? <input className='outline-none bg-slate-50 max-w-[100%]' data-name="phone" autoFocus onClick={changeElement} value={data?.phone ?? ''} name="phone" onChange={updateData} onBlur={changeElementInput} /> 
                    : 
                    <>
                        <p className='text-gray-700 block text-base group-hover:hidden select-none'>Наведите чтобы увидеть</p>
                        <p className="text-gray-700 hidden text-base group-hover:block" data-name="phone" onClick={changeElement}>{data?.phone.substring(0,1) + " (" + data?.phone.substring(1,4) + ") " + data?.phone.substring(4,7) + "-" + data?.phone.substring(7,9) + "-" + data?.phone.substring(9,11)}</p>
                    </>}
                </div>
                <div className="x-6 py-4 group">
                    <h1 className="font-bold text-xl mb-2">Email</h1>
                    {input.email 
                    ? <input className='outline-none bg-slate-50' data-name="email" autoFocus onClick={changeElement} value={data?.email ?? ''} name="email" onChange={updateData} onBlur={changeElementInput} />  
                    : 
                    <>
                        <p className='text-gray-700 block text-base group-hover:hidden select-none'>Наведите чтобы увидеть</p>
                        <p className="text-gray-700 hidden text-base group-hover:block" data-name="email" onClick={changeElement}>{ data?.email }</p>
                    </>}
                </div>
            </div>}
            {change &&
            <div className='flex w-100 justify-between'>
                <button type="submit" className="m-5 hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200">Сохранить</button>
                <button type="button" onClick={resetChange} className="m-5 hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200">Сбросить</button>
            </div>}
        </form>
        <Product/>
        <Delete/>
    </>
}