import { ObjectValidation } from '../hook/type'
import { ReduxStore } from '../redux/type'
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'

export const JwtDecode = () => {

    const token = useSelector((store: ReduxStore) => store.TokenStore)

    if(!token.access) return null

    return jwt_decode(token.access) as ObjectValidation
}