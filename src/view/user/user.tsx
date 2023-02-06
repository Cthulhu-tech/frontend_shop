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
    <section className="card mt-5 mb-5 shadow-sm bg-light">
        <div className="card-body">
        <h5 className="card-title">
            <p className="card-text text-center">{ userAccount?.name + " " + userAccount?.surname }</p>
        </h5>
        <ul className="list-group list-group-flush">
            <li className="list-group-item bg-light mt-3 p-2">
                <p className="card-text">Телефон: { userAccount?.phone }</p>
            </li>
            <li className="list-group-item bg-light mt-3 p-2">
                <p className="card-text">Город: { userAccount?.city }</p>
            </li>
            <li className="list-group-item bg-light mt-3 p-2">
                <p className="card-text">Email: { userAccount?.email }</p>
            </li>
        </ul>
        </div>
    </section>
    <ProductComponent/>
  </>
}