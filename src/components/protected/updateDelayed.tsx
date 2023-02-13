import { ReduxStore } from '../../redux/type'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

export const UpdateDelayed = (props: {children: React.ReactNode}) => {

    const accessToken = useSelector((store: ReduxStore) => store.TokenStore.access)

    const UpdateLocalStorage = () => {

        let delayeds: string[] = JSON.parse(localStorage.getItem("delayed") ?? "[]")

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
    
        axios.get(process.env.REACT_APP_SERVER + 'delayed', {withCredentials: true})
        .then((data) => {

            const productIdArray = data.data.delayed.map((element: any) => element.delayed_productId.toString())

            delayeds = [...Array.from(new Set(delayeds.concat(productIdArray)))]

            localStorage.setItem("delayed", JSON.stringify(delayeds))
    
            delayeds = JSON.parse(localStorage.getItem("delayed") as string) 

            axios.post(process.env.REACT_APP_SERVER + 'delayed', {product: delayeds}, {withCredentials: true})
        })
    }

    useEffect(() => {

        accessToken && UpdateLocalStorage()

    }, [])

    return <>{props.children}</>
}