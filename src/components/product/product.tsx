import { memo, useEffect, useState } from 'react'
import { ReduxStore } from '../../redux/type'
import { Loading } from '../loading/loading'
import { Slider } from '../slider/slider'
import { useSelector } from 'react-redux'
import { Products } from './type'
import axios from 'axios'
import './product.css'

const SliderComponent = memo(Slider)

export const ProductComponent = () => {

    const [data, setData] = useState<Products[]>()
    const [loading, setLoading] = useState(true)
    const token = useSelector((store: ReduxStore) => store.TokenStore)

    useEffect(() => {
        if(token) axios.get(process.env.REACT_APP_SERVER + 'product/', { headers: {"Authorization" : `Bearer ${token.access}`} })
        .then((data) => {
            setData(data.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return   <section className="card shadow-sm bg-light">
        <div className="card-body">
        <h5 className="card-title">
            <p className="card-text text-center">Ваши объявления</p>
        </h5>
        {loading ? <Loading/> :
        !loading && data && data.length > 0 
        ? 
        <SliderComponent products={data}/>
            : 
        <p>Тут пока пусто ;(</p>}
        </div>
    </section>
}
