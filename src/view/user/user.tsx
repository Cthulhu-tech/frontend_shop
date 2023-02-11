import { LoadUserInfo } from '../../components/loading/loadUserInfo'
import { ProductComponent } from '../../components/product/product'
import { updateUserAccount } from '../../redux/store/userAccount'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, memo, useState } from 'react'
import { JwtDecode } from '../../utils/decodeJWT'
import { ReduxStore } from '../../redux/type'
import axios from 'axios'

const Product = memo(ProductComponent)

export const User = () => {

    const obj = JwtDecode()
    const dispatch = useDispatch()
    const [load, setLoad] = useState(true)
    const userAccount = useSelector((store: ReduxStore) => store.UserAccountStore)

    useEffect(() => {

        if(obj && !userAccount) axios.get(process.env.REACT_APP_SERVER + 'users/' + obj.userId)
        .then((data) => {
            dispatch(updateUserAccount(data.data))
        }).finally(() => setLoad(false))
        else {
            setLoad(false)
        }
        
    }, [])

    return <>
        <div className="max-w-sm rounded overflow-hidden shadow-sm bg-slate-50 mx-5">
            {load ?
            <LoadUserInfo/>
            :
            <div className='px-6 py-4'>
                <div className="x-6 py-4">
                    <h1 className="font-bold text-xl mb-2">{ userAccount?.name + " " + userAccount?.surname }</h1>
                    <p className="text-gray-700 text-base">{ userAccount?.city ?? 'Не указан' }</p>
                </div>
                <div className="x-6 py-4 group">
                    <h1 className="font-bold text-xl mb-2">Телефон</h1>
                    <p className='text-gray-700 block text-base group-hover:hidden select-none'>Наведите чтобы увидеть</p>
                    <p className="text-gray-700 hidden text-base group-hover:block">{userAccount?.phone.substring(0,1) + " ( "+userAccount?.phone.substring(1,4)+" ) " + userAccount?.phone.substring(4,7) + " - " + userAccount?.phone.substring(7,9) + " - " + userAccount?.phone.substring(9,11)}</p>
                </div>
                <div className="x-6 py-4 group">
                    <h1 className="font-bold text-xl mb-2">Email</h1>
                    <p className='text-gray-700 block text-base group-hover:hidden select-none'>Наведите чтобы увидеть</p>
                    <p className="text-gray-700 hidden text-base group-hover:block">{ userAccount?.email }</p>
                </div>
            </div>}
        </div>
        <Product/>
    </>
}