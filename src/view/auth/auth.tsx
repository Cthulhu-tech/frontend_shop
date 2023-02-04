import { NavLink, Outlet } from 'react-router-dom'

export const Auth = () => {

    return <section className='container mt-5 pt-5 mb-5'>
        <div className='row mb-5 mt-5 d-flex justify-content-center'>
            <NavLink to='/auth' className='col-2 btn-primary text-center'>Вход</NavLink>
            <NavLink to='/auth/registration' className='col-2 btn-primary text-center'>Регистрация</NavLink>
        </div>
        <Outlet/>
    </section>

}