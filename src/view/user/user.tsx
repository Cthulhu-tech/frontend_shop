import { ProductComponent } from '../../components/product/product'
import { updateUserAccount } from '../../redux/store/userAccount'
import { useDispatch, useSelector } from 'react-redux'
import { JwtDecode } from '../../utils/decodeJWT'
import { ReduxStore } from '../../redux/type'
import { useEffect } from 'react'
import axios from 'axios'

export const User = () => {

    const obj = JwtDecode()
    const dispatch = useDispatch()
    const userAccount = useSelector((store: ReduxStore) => store.UserAccountStore)

    useEffect(() => {

        if(obj && !userAccount) axios.get(process.env.REACT_APP_SERVER + 'users/' + obj.userId)
        .then((data) => {
            dispatch(updateUserAccount(data.data))
        })
        
    }, [])

    return <>
        <div className="rounded-2xl overflow-hidden shadow-xl max-w-xl my-3 bg-white-100 m-auto mt-5 pt-5">
            <div className="text-center px-3 pb-6 pt-2">
                <h1 className="bold font-sans">{ userAccount?.name + " " + userAccount?.surname }</h1>
                <p className="mt-2 font-sans font-light">{ userAccount?.city ?? 'Не указан' }</p>
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h1 className="bold font-sans">Телефон</h1>
                <p className="mt-2 font-sans font-light">{userAccount?.phone.substring(0,1) + " ( "+userAccount?.phone.substring(1,4)+" ) " + userAccount?.phone.substring(4,7) + " - " + userAccount?.phone.substring(7,9) + " - " + userAccount?.phone.substring(9,11)}</p>
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h1 className="bold font-sans">Email</h1>
                <p className="mt-2 font-sans font-light">{ userAccount?.email }</p>
            </div>
        </div>
    <ProductComponent/>
  </>
}