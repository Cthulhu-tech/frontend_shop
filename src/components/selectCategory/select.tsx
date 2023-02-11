import { updateCategory } from '../../redux/store/category'
import { useSelector, useDispatch } from 'react-redux'
import { ReduxStore } from '../../redux/type'
import { useState } from 'react'

export const Select = () => {

    const dispatch = useDispatch()
    const [top, setTop] = useState<string>()
    const changeSelectCategoryTop = (event: React.ChangeEvent<HTMLSelectElement>) => setTop(event.currentTarget.value)
    const changeSelectCategorySub = (event: React.ChangeEvent<HTMLSelectElement>) => dispatch(updateCategory(event.currentTarget.value))
    
    const categories = useSelector((store: ReduxStore) => store.CategoriesStore)

    return  <>
            <div className="m-5">
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={changeSelectCategoryTop} onLoad={changeSelectCategoryTop}>
                    {categories.map((category) =>
                        <option value={category.name} key={category.id}>{category.name}</option>
                    )}
                </select>
            </div>
            <div className="m-5">
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={changeSelectCategorySub}>
                    {categories.map((category) =>
                        top === category.name && category.sub.map((sub) => <option value={sub.id} key={sub.id}>{sub.mpath}</option>)
                    )}
                </select>
            </div>
            </>
}