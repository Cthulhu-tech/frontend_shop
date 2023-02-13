import { LoadingCard } from '../../components/loading/loadingCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { updateProducts } from '../../redux/store/products'
import { Delayed } from '../../components/delayed/delayed'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { ReduxStore } from '../../redux/type'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const Home = () => {
    
    const dispatch = useDispatch()
    const [end, setEnd] = useState(true)
    const pageAndSizeStore = useSelector((store: ReduxStore) => store.ProductsStore)
    const products = useSelector((store: ReduxStore) => store.ProductsStore)
    const updateData = async () => await axios.get(process.env.REACT_APP_SERVER + 'products/?page=' + pageAndSizeStore.page + '&size=' + pageAndSizeStore.size, { withCredentials: true })
    .then((data) => dispatch(updateProducts(data.data))).catch(() => setEnd(false))

    useEffect(() => {
        products.page === 0 && updateData()
    }, [])

    return <InfiniteScroll
                dataLength={pageAndSizeStore.page + 1}
                next={updateData}
                refreshFunction={updateData}
                hasMore={end}
                loader={ 
                <div className="container mt-5 mx-auto">
                    <div className="flex flex-wrap">
                        <LoadingCard/>
                    </div>
                </div>}
                endMessage={<p className='text-center p-5'>Вы долистали до конца</p>}
            >
                <div className='md:w-1/3 m-auto'>
                {products.products.map(product =>
                    <div className='relative  max-w-xs m-auto' key={product.id}>
                    <Delayed id={product.id}/>                              
                        <NavLink to={"/product/" + product.id} state={product} key={product.id} className='m-auto swiper-slide max-h-96 flex flex-col items-center shadow-lg mt-5 mb-5 max-w-xs relative swiper-slide-active'>
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
                                        <img src={process.env.REACT_APP_SERVER + 'assets/no-image.png'} alt='no.png' className='max-w-full m-auto rounded-lg max-h-40' />
                                    </div>}
                            </Swiper>}
                            <section className='items-center p-4'>
                                <div className="px-6 py-4">
                                    <p className="font-bold text-xl mb-2 text-center">{product.title}</p>
                                </div>
                                <div className="text-lg font-semibold text-slate-500 text-center">
                                    {product.price ? product.price.toLocaleString('ru') : 'Договорная'}
                                </div>
                            </section>
                        </NavLink>
                    </div>)} 
                </div>
            </InfiniteScroll>
}
