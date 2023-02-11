import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './style/global.css'

export const App = () => {

  return <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>

}
