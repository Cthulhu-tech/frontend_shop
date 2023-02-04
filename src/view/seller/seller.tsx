import { NotFound } from '../notFound/notFound'
import { useParams } from 'react-router-dom'

export const Seller = () => {

    const { nameAndSurname } = useParams()

    if(nameAndSurname && /[0-9]/.test(nameAndSurname))
    return <NotFound/>

    return <>seller</>
}