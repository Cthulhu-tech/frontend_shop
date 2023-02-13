import { ImageUpload } from "../../components/imageUpload/imageUpload"
import { updateCategories } from "../../redux/store/categories"
import { Select } from "../../components/selectCategory/select"
import { validationCreate } from "../../utils/validationCreate"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, memo } from 'react'
import { ReduxStore } from "../../redux/type"
import { useForm } from "../../hook/useForm"
import axios from 'axios'

const SelectComponent = memo(Select)
const ImageUploadComponent = memo(ImageUpload)

export const Create = () => {

    const dispatch = useDispatch()
    const formRef = useRef<HTMLFormElement>(null)
    const token = useSelector((store: ReduxStore) => store.TokenStore)
    const { change, submit, errors } = useForm(validationCreate, 'product', true)

    useEffect(() => {
        if(token.access) axios.get(process.env.REACT_APP_SERVER + 'categories')
        .then((data) => dispatch(updateCategories(data.data)))
    }, [token.access, dispatch])

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
                <div className="m-5">
                    <select name="delivery" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={change}>
                        <option value="0">Без доставки</option>
                        <option value="1">Доставка</option>
                    </select>
                </div>
            </div>
            <SelectComponent/>
            {errors && errors.categoryId && <p className="text-red-500 text-xs italic mt-2 mb-4">
                {errors.categoryId}
            </p>}
            <div className="mb-4">
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Цена" name="price" onChange={change} />
            </div>
            <ImageUploadComponent/>
            <div className="mb-4">
                {errors && errors.serverNotError && <small className="text-green-500 text-xs italic mt-2">
                    {errors.serverNotError}
                </small>}
            </div>
            <div className="mb-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Создать объявление</button>
            </div>
        </form>
    </div>
}