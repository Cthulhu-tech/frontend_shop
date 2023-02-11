import { validationRegistration } from '../../utils/validationRegistration'
import { useForm } from '../../hook/useForm'

export const Registration = () => {

    const { change, submit, errors } = useForm(validationRegistration, 'users')

    return  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
        <div className="mb-4">
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Имя" name="firstName" onChange={change} />
            {errors && errors.firstName && <small className="text-red-500 text-xs italic mt-2">
                {errors.firstName}
            </small>}
        </div>
        <div className="mb-4">
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Фамилия" name="lastName" onChange={change} />
        </div>
        <div className="mb-4">
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Телефон" name="phone" onChange={change} />
            {errors && errors.phone && <small className="text-red-500 text-xs italic mt-2">
                {errors.phone}
            </small>}
        </div>
        <div className="mb-4">
            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" name="email" onChange={change} />
            {errors && errors.email && <small className="text-red-500 text-xs italic mt-2">
                {errors.email}
            </small>}
        </div>
        <div className="mb-4">
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Город" name="city" onChange={change} />
        </div>
        <div className="mb-4">
            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Пароль" name="password" onChange={change} />
            {errors && errors.password && <small className="text-red-500 text-xs italic mt-2">
                {errors.password}
            </small>}
        </div>
        <div className="mb-4">
            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Повторите пароль" name="password_repeat" onChange={change} />
            {errors && errors.password_repeat && <small className="text-red-500 text-xs italic mt-2">
                {errors.password_repeat}
            </small>}
        </div>
        <div className="mb-4">
            {errors && errors.serverError && <small className="text-red-500 text-xs italic mt-2">
                {errors.serverError}
            </small>}
        </div>
        <div className="mb-4">
            {errors && errors.serverNotError && <small className="text-green-500 text-xs italic mt-2">
                {errors.serverNotError}
            </small>}
        </div>
        <div className="mb-4">
            <button type="submit" className="mt-5 hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200">Регистрация</button>
        </div>
    </form>
}