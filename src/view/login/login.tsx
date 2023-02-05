import { validationLogin } from '../../utils/validationEmail'
import { useForm } from '../../hook/useForm'

export const Login = () => {

    const { change, submit, errors } = useForm(validationLogin, 'token/login')

    return <form className="row d-flex flex-column justify-content-center align-items-start" onSubmit={submit}>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="email" className={errors && errors.email ? "form-control is-invalid" : "form-control"} placeholder="Email" name="email" onChange={change} />
            {errors && errors.email && <small className="text-danger">
                {errors.email}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="password" className={errors && errors.password ? "form-control is-invalid" : "form-control"}  placeholder="Пароль" name="password" onChange={change} />
            {errors && errors.password && <small className="text-danger">
                {errors.password}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            {errors && errors.serverError && <small className="text-danger">
                {errors.serverError}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            {errors && errors.serverNotError && <small className="text-success text-center">
                {errors.serverNotError}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <button type="submit" className="btn btn-dark mt-5 mb-5">Вход</button>
        </div>
    </form>
}