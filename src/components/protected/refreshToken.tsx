import { updateToken } from '../../redux/store/token'
import { UpdateDelayed } from './updateDelayed'
import { Loading } from '../loading/loading'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export const RefreshToken = (props: {children: React.ReactNode}) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.post(process.env.REACT_APP_SERVER + 'token/refresh', null, { withCredentials: true })
        .then((data) => {
            if(data.data.accesstoken) dispatch(updateToken(data.data.accesstoken))
        })
        .finally(() => setLoading(false))

    },[])

    return loading ? <Loading/> : <UpdateDelayed>{props.children}</UpdateDelayed>
}