import {Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import { Products } from '../product/type'
import { useEffect } from 'react'

import { Pagination, Navigation } from 'swiper'
import { Delayed } from '../delayed/delayed'
import 'swiper/swiper-bundle.css'
import "swiper/css"

export const Slider = ({products}: {products: Products[]}) => {

    useEffect(() => {

    }, [products])

    return  <Swiper
                className='max-h-96'
                slidesPerView={3}
            >
                {products.map((product) =>
                        <SwiperSlide key={product.id} className='max-h-96 flex items-center shadow-lg m-5 max-w-xs relative'>
                                <Delayed id={product.id}/>
                                <NavLink to={"/product/" + product.id} key={product.id} className='max-h-96 w-full'>
                                    {<Swiper 
                                        nested={true}
                                        modules={[Pagination, Navigation]}
                                        pagination={{
                                            dynamicBullets: true,
                                        }}
                                        className='card-body max-w-xs'
                                    >
                                        {product.photos && product.photos.length > 0 ? product.photos.map((photo) => 
                                            <SwiperSlide key={photo.id}>
                                                <div className='card-body max-w-xs p-5'>
                                                    <img className='max-w-full rounded-lg max-h-40 hover:scale-110 duration-200' src={process.env.REACT_APP_SERVER + 'assets/' + photo.path} alt={photo.description ?? photo.path} />
                                                </div>
                                            </SwiperSlide>):
                                            <div className='card-body max-w-xs p-5'>
                                                <img src={process.env.REACT_APP_SERVER + 'assets/no-image.png'} alt='no.png' className='max-w-full rounded-lg max-h-40' />
                                            </div>}
                                    </Swiper>}
                                    <section className='items-center p-4'>
                                        <div className="px-6 py-4">
                                            <p className="font-bold text-xl mb-2">{product.title}</p>
                                        </div>
                                        <div className="text-lg font-semibold text-slate-500">
                                            {product.price ? product.price.toLocaleString('ru') : 'Договорная'}
                                        </div>
                                    </section>
                                </NavLink>
                        </SwiperSlide>
                )}
            </Swiper>
}
