import { Outlet } from "react-router-dom"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { Nav } from '../nav/nav'

export const Layout = () => {

    return <>
        <Header/>
        <Nav/>
        <main className="m-auto mt-5 mb-5 p-3 py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <Outlet />
        </main>
        <Footer />
    </>
}