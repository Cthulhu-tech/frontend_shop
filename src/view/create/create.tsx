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

    return <div className="w-full max-w-xl m-auto">
        <form ref={formRef} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Заголовок" name="title" onChange={change} />
                {errors && errors.title && <p className="text-red-500 text-xs italic mt-2">
                    {errors.title}
                </p>}
            </div>
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Описание" name="description" onChange={change} />
                {errors && errors.description && <p className="text-red-500 text-xs italic mt-2">
                    {errors.description}
                </p>}
            </div>
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Город" name="city" onChange={change} />
                {errors && errors.city && <p className="text-red-500 text-xs italic mt-2">
                    {errors.city}
                </p>}
            </div>
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Улица" name="street" onChange={change} />
            </div>
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Доставка" name="delivery" onChange={change} />
            </div>
            <Select/>
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Цена" name="price" onChange={change} />
            </div>
            <ImageUpload/>
            <div className="mb-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Создать объявление</button>
            </div>
        </form>
    </div>
}