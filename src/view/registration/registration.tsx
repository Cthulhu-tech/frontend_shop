import { validationRegistration } from '../../utils/validationRegistration'
import { useForm } from '../../hook/useForm'

export const Registration = () => {

    const { change, submit, errors } = useForm(validationRegistration, 'users')

    return  <form className="row d-flex flex-column justify-content-center align-items-start" onSubmit={submit}>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className={errors && errors.firstName ? "form-control is-invalid" : "form-control"} placeholder="Имя" name="firstName" onChange={change} />
            {errors && errors.firstName && <small className="text-danger">
                {errors.firstName}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Фамилия" name="lastName" onChange={change} />
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className={errors && errors.phone ? "form-control is-invalid" : "form-control"} placeholder="Телефон" name="phone" onChange={change} />
            {errors && errors.phone && <small className="text-danger">
                {errors.phone}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="email" className={errors && errors.email ? "form-control is-invalid" : "form-control"} placeholder="Email" name="email" onChange={change} />
            {errors && errors.email && <small className="text-danger">
                {errors.email}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Город" name="city" onChange={change} />
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="password" className={errors && errors.password ? "form-control is-invalid" : "form-control"}  placeholder="Пароль" name="password" onChange={change} />
            {errors && errors.password && <small className="text-danger">
                {errors.password}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="password" className={errors && errors.password_repeat ? "form-control is-invalid" : "form-control"} placeholder="Повторите пароль" name="password_repeat" onChange={change} />
            {errors && errors.password_repeat && <small className="text-danger">
                {errors.password_repeat}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            {errors && errors.serverError && <small className="text-danger">
                {errors.serverError}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            {errors && errors.serverNotError && <small className="text-success">
                {errors.serverNotError}
            </small>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <button type="submit" className="btn btn-dark mt-5 mb-5">Регистрация</button>
        </div>
    </form>
}