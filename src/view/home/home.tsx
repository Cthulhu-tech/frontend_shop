import { ReduxStore } from '../../redux/type'
import { useSelector } from 'react-redux'
import { Update } from './update/update'
import { memo } from 'react'

const UpdateComponent = memo(Update)

export const Home = () => {
    
    const products = useSelector((store: ReduxStore) => store.ProductsStore)

    console.log(products)

    return <>
    {products.products.map(product => <div key={product.id}>{product.title}</div>)}
    <UpdateComponent/>
    </>
}