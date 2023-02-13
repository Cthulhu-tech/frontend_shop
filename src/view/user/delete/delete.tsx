import { JwtDecode } from '../../../utils/decodeJWT'
import { ReduxStore } from '../../../redux/type'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

export const DeleteComponent = () => {

    const obj = JwtDecode()
    const [password, setPassword] = useState({password: ''})
    const token = useSelector((store: ReduxStore) => store.TokenStore.access)

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword({password: event.target.value})

    const deleteAccount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        obj && axios.post(process.env.REACT_APP_SERVER + 'users/' + obj.userId + '/delete', password, { withCredentials: true })
        .then(() => {
            window.location.reload()
        })
    }

    return <form className="rounded overflow-hidden shadow-sm bg-slate-50 flex content-center max-w-xl m-auto mt-5 mb-5 p-5">
        <input type="password" name="password" onChange={changePassword}/>
        <button onClick={deleteAccount} className="hover:bg-red-100 text-black-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow bg-red-300">Удалить аккаунт</button>
    </form>

}