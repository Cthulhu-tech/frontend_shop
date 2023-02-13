import { useParams, useLocation } from 'react-router-dom'
import { Delayed } from '../../components/delayed/delayed'
import { NotFound } from '../notFound/notFound'
import { useEffect, useState } from 'react'
import { Products } from '../../redux/type'
import { SwiperSlide, Swiper } from 'swiper/react';
import axios from 'axios'
import { Pagination, Navigation } from 'swiper';

export const Product = () => {

    const { id } = useParams()
    const location = useLocation()
    const [error, setError] = useState(false)
    const [product, setProduct] = useState<Products>()

    useEffect(() => {
        if(!location.state) axios.get(process.env.REACT_APP_SERVER + 'product/' + id)
        .then((data) => {
            setProduct(data.data)
        })
        .catch(() => setError(true))
        else setProduct(location.state as Products)
    }, [error])

    if((id && isNaN(+id)) || error)
    return <NotFound/>

    return <>
        <div className="min-w-screen min-h-scree flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <Swiper
                                nested={true}
                                modules={[Pagination, Navigation]}
                            >   
                                <Delayed id={product?.id ?? 0}/>
                                {product?.photos.map(photo => 
                                <SwiperSlide className='max-h-96 flex items-center m-auto max-w-xs relative whitespace-nowrap'>
                                    <div className='card-body max-w-xs p-5'>
                                        <img className='max-w-full rounded-lg max-h-40 hover:scale-110 duration-200' src={process.env.REACT_APP_SERVER + 'assets/' + photo.path} alt={photo.description ?? photo.path} />
                                    </div>
                                </SwiperSlide>)}
                            </Swiper>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">{product?.title}</h1>
                            <p className="text-sm">{product?.description}</p>
                        </div>
                        <div className='flex justify-around items-center'>
                            <div className="inline-block align-bottom mr-5">
                                <span className="font-bold text-5xl leading-none align-baseline">{product?.price}</span>
                                <span className="text-2xl leading-none align-baseline uppercase">Руб</span>
                            </div>
                            <div className="inline-block align-bottom">
                                <button className="bg-blue-300 opacity-75 hover:opacity-100 text-black-900 hover:text-gray-900 rounded-full my-5 px-10 py-2 font-semibold">Написать продавцу</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}