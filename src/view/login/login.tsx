export const Login = () => {

    return <form className="row d-flex flex-column justify-content-center align-items-start">
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ваш email" />
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ваш пароль" />
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <button type="submit" className="btn btn-dark mt-5 mb-5">Вход</button>
        </div>
    </form>
}