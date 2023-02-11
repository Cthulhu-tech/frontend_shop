import { validationLogin } from '../../utils/validationEmail'
import { useForm } from '../../hook/useForm'

export const Login = () => {

    const { change, submit, errors } = useForm(validationLogin, 'token/login')

    return <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
        <div className="mb-4">
            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" name="email" onChange={change} />
            {errors && errors.email && <small className="text-red-500 text-xs italic mt-2">
                {errors.email}
            </small>}
        </div>
        <div className="mb-4">
            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Пароль" name="password" onChange={change} />
            {errors && errors.password && <small className="text-red-500 text-xs italic mt-2">
                {errors.password}
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
            <button type="submit" className="mt-5 hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200">Вход</button>
        </div>
    </form>
}