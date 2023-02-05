import { JwtDecode } from '../../utils/decodeJWT'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

export const NotProtected = (props: {children: React.ReactNode}) => {

    const [userId] = useState(JwtDecode())

    return !userId ? <>{props.children}</> : <Navigate to="/" replace />
}