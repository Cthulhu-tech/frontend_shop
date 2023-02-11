import { NavLink, Outlet } from 'react-router-dom'

export const Auth = () => {

    return <section className="w-full max-w-xl m-auto">
        <div className='mb-5 mt-5 flex'>
            <NavLink to='/auth' className='m-5 text-sm text-blue-600 font-bold hover:text-blue-900 duration-200 cursor-pointer active active'>Вход</NavLink>
            <NavLink to='/auth/registration' className='m-5 text-sm text-blue-600 font-bold hover:text-blue-900 duration-200 cursor-pointer active active'>Регистрация</NavLink>
        </div>
        <Outlet/>
    </section>

}