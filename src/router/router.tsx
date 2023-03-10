import { RefreshToken } from '../components/protected/refreshToken'
import { NotProtected } from '../components/protected/notProtected'
import { Registration } from '../view/registration/registration'
import { Protected } from '../components/protected/protected'
import { createBrowserRouter } from "react-router-dom"
import { Layout } from '../components/layout/layout'
import { Delayed } from '../view/delayed/delayed'
import { Product } from '../view/product/product'
import { Create } from '../view/create/create'
import { Seller } from '../view/seller/seller'
import { Search } from '../view/search/search'
import { Login } from "../view/login/login"
import { Home } from '../view/home/home'
import { Chat } from '../view/chat/chat'
import { Auth } from '../view/auth/auth'
import { User } from '../view/user/user'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RefreshToken><Layout/></RefreshToken>,
        children: [
            {index: true, element: <Home/>},
            {
                path: "search",
                element: <Search/>,
            },
            {
                path: "chat",
                element: <Protected><Chat/></Protected>,
            },
            {
                path: 'auth',
                element: <NotProtected><Auth/></NotProtected>,
                children: [
                    { index: true, element: <Login/>},
                    {
                        path: "registration",
                        element: <Registration/>,
                    },
                ]
            },
            {
                path: "product/:id",
                element: <Product/>
            },
            {
                path: "user",
                element: <Protected><User/></Protected>,
            },
            {
                path: "user/:nameAndSurname",
                element: <Seller/>
            },
            {
                path: 'delayed',
                element: <Delayed/>
            },
            {
                path: 'create',
                element: <Protected><Create/></Protected>
            }
        ]
    }
])