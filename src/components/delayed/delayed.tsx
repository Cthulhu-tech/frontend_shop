import { HeartFill } from 'react-bootstrap-icons'
import { ReduxStore } from '../../redux/type'
import { useSelector } from 'react-redux'

export const Delayed = ({id} : {id: number}) => {
    
    const accessToken = useSelector((store: ReduxStore) => store.TokenStore.access)


    if(accessToken) {

    } else {

    }

    return <HeartFill className='hover:scale-110 duration-200 text-red-500 hover:text-red-700 absolute z-50 right-8 top-8' />
}