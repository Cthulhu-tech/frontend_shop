import { Outlet } from "react-router-dom"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { Nav } from '../nav/nav'

export const Layout = () => {

    return <>
        <Header/>
        <Nav/>
        <main className="container min-vh-100 mt-2 mb-2 pt-3 pb-3 pl-3 pr-3 d-flex flex-column">
            <Outlet />
        </main>
        <Footer />
    </>
}