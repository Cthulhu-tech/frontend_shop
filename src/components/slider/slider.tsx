import {Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import { Products } from '../product/type'
import { useEffect } from 'react'

import { Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import "swiper/css"

export const Slider = ({products}: {products: Products[]}) => {

    useEffect(() => {

    }, [products])

    return  <Swiper
                className='m-5'
                slidesPerView={3}
            >
                {products.map((product) =>
                        <SwiperSlide>
                            <section className='card'>
                                <NavLink className="text-dark" to={"/product/" + product.id} key={product.id}>
                                    <div className="card-header bg-white text-primary">
                                        <h5 className="list-group-item mt-3">{product.title}</h5>
                                        <p className="list-group-item">{product.description}</p>
                                    </div>
                                    {<Swiper 
                                        nested={true}
                                        modules={[Pagination, Navigation]}
                                        pagination={{
                                            dynamicBullets: true,
                                        }}
                                    >
                                        <p className='text-dark mb-5'>Цена: {product.price && product.price.toLocaleString('ru') + ' руб'}</p>
                                        {product.photos && product.photos.map((photo) => 
                                            <SwiperSlide key={photo.id}>
                                                <div className='card-body'>
                                                    <img src={process.env.REACT_APP_SERVER + 'assets/' + photo.path} alt={photo.description ?? photo.path} />
                                                    <p className="card-text text-nowrap m-2 mt-4 text-center">{photo.description}</p>
                                                </div>
                                            </SwiperSlide>)}
                                    </Swiper>}
                                </NavLink>
                            </section>
                        </SwiperSlide>
                )}
            </Swiper>
}
