import { ImageUpload } from "../../components/imageUpload/imageUpload"
import { updateCategories } from "../../redux/store/categories"
import { Select } from "../../components/selectCategory/select"
import { validationCreate } from "../../utils/validationCreate"
import { useSelector, useDispatch } from 'react-redux'
import { ReduxStore } from "../../redux/type"
import { useForm } from "../../hook/useForm"
import { useEffect, useRef } from 'react'
import axios from 'axios'

export const Create = () => {

    const formRef = useRef<HTMLFormElement>(null)
    const dispatch = useDispatch()
    const token = useSelector((store: ReduxStore) => store.TokenStore)
    const { change, submit, errors } = useForm(validationCreate, 'product', true)

    useEffect(() => {
        if(token.access) axios.get(process.env.REACT_APP_SERVER + 'categories')
        .then((data) => dispatch(updateCategories(data.data)))
    }, [])

    return <form ref={formRef} className="row d-flex flex-column justify-content-center align-items-start pt-5 pb-5 mt-5 mb-5" onSubmit={submit}>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Заголовок" name="title" onChange={change} />
            {errors && errors.title && <p className="text-danger text-center  mt-2 mb-2">
                {errors.title}
            </p>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Описание" name="description" onChange={change} />
            {errors && errors.description && <p className="text-danger text-center mt-2 mb-2">
                {errors.description}
            </p>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Город" name="city" onChange={change} />
            {errors && errors.city && <p className="text-danger text-center  mt-2 mb-2">
                {errors.city}
            </p>}
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Улица" name="street" onChange={change} />
        </div>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Доставка" name="delivery" onChange={change} />
        </div>
        <Select/>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <input type="text" className="form-control" placeholder="Цена" name="price" onChange={change} />
        </div>
        <ImageUpload/>
        <div className="form-group col-6 mt-1 mb-1 mx-auto">
            <button type="submit" className="btn btn-dark mt-5 mb-5">Создать объявление</button>
        </div>
    </form>
}