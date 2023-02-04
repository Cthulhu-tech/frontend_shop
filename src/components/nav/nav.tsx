import { Box2Heart } from "react-bootstrap-icons"
import { NavLink } from "react-router-dom"
import { useEffect } from 'react'

export const Nav = () => {

    useEffect(() => {

    }, [])

    return <nav className="container-fluid shadow-sm border-bottom bg-dark d-flex justify-content-end">
        <div className="d-flex mx-5 justify-content-center mt-2 mb-2 align-items-center">
            <NavLink className="col-1 text-light text-center px-2 mx-1" to='/delayed'><Box2Heart/></NavLink>
            <NavLink className="col-5 text-light text-center px-2 mx-1" to='/auth'>Вход и регистрация</NavLink>
            <NavLink className="col-6 text-light text-center btn btn-primary btn-sm px-2 mx-1 " to='/create'>Разместить Объявление</NavLink>
        </div>
    </nav>
}