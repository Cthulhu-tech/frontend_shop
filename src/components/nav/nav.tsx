import { Box2Heart } from "react-bootstrap-icons"
import { ReduxStore } from '../../redux/type'
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import './nav.css'

export const Nav = () => {

    const access = useSelector((store: ReduxStore) => store.TokenStore.access)

    useEffect(() => {}, [access])

    return <nav className="sticky top-0 flex justify-between items-center bg-slate-100 shadow-lg h-12 md:flex">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                <NavLink className="text-sm text-blue-600 font-bold flex items-center hover:text-blue-900 duration-200 cursor-pointer active" to='/'>Объявления</NavLink>
                <NavLink className="text-sm text-blue-600 font-bold flex items-center hover:text-blue-900 duration-200 cursor-pointer active" to='/delayed'><Box2Heart className="mr-2"/> Избранное</NavLink>
                {!access 
                ? <NavLink className="text-sm text-blue-600 font-bold hover:text-blue-900 duration-200 cursor-pointer active" to='/auth'>Вход и регистрация</NavLink> 
                : <NavLink className="text-sm text-blue-600 font-bold hover:text-blue-900 duration-200 cursor-pointer active" to='/user'>Личный кабинет</NavLink>}
            </ul>
            <NavLink className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200" to='/create'>Разместить Объявление</NavLink>
        </div>
    </nav>
}