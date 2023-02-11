import { LoadingCard } from '../loading/loadingCard'
import { memo, useEffect, useState } from 'react'
import { ReduxStore } from '../../redux/type'
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

    return   <section className="bg-light">
        <div className="relative">
        <p className="flex-auto text-lg text-center font-semibold text-slate-900 mt-5">Ваши объявления</p>
        {loading ? 
        <div className="container mt-5 mx-auto">
            <div className="flex flex-wrap">
                <LoadingCard/>
                <LoadingCard/>
                <LoadingCard/>
            </div>
        </div> 
        :
        !loading && data && data.length > 0 
        ? 
        <SliderComponent products={data}/>
            : 
        <p>Тут пока пусто ;(</p>}
        </div>
    </section>
}
