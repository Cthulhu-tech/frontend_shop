import { HeartFill } from 'react-bootstrap-icons'
import { ReduxStore } from '../../redux/type'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const Delayed = ({id} : {id: number}) => {
    
    const accessToken = useSelector((store: ReduxStore) => store.TokenStore.access)

    const updateLocalStorage = () => {

        let delayeds: string[] = JSON.parse(localStorage.getItem("delayed") ?? `["${id}"]`)

        const idString = id.toString()

        delayeds.includes(idString) ? delayeds = delayeds.filter(idFilter => idFilter !== idString) : delayeds = [...Array.from(new Set([...delayeds, idString]))]

        localStorage.setItem("delayed", JSON.stringify(delayeds))
    }

    const changeDelayed = () => {

        if(accessToken) {

            updateLocalStorage()

            let delayeds: string[] = JSON.parse(localStorage.getItem("delayed") ?? `["${id}"]`)
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken

            axios.post(process.env.REACT_APP_SERVER + 'delayed', {product: delayeds}, {withCredentials: true})

        } else updateLocalStorage()
    }

    return <HeartFill className='hover:scale-110 duration-200 text-red-500 hover:text-red-700 absolute z-50 right-8 top-8' onClick={changeDelayed} />
}