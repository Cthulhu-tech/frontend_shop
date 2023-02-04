import { NotFound } from '../notFound/notFound'
import { useParams } from "react-router-dom"

export const Product = () => {

    const { id } = useParams()
    
    if(id && isNaN(+id))
    return <NotFound/>

    return <>product {id}</>
}