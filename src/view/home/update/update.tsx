import { updateProducts } from "../../../redux/store/products"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from 'react-redux'
import { ReduxStore } from '../../../redux/type'
import axios from 'axios'

export const Update = () => {

    const dispatch = useDispatch()
    const pageAndSizeStore = useSelector((store: ReduxStore) => store.ProductsStore)

    const updateData = async () => await axios.get(process.env.REACT_APP_SERVER + 'products/?page=' + pageAndSizeStore.page + '&size=' + pageAndSizeStore.size, { withCredentials: true })
        .then((data) => dispatch(updateProducts(data.data)))

    const { ref, entry } = useInView({ trackVisibility: true, delay: 500, onChange: updateData })

    return <div ref={ref}>{entry?.isIntersecting}</div>
}