import BottomNavbar from "./Components/BottomNavbar"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"

export default function Layout({ children, cart }) {

    console.log("children", children)
    return (
        <>
            <Header cart={cart} />
            <Sidebar />
            {children}
            <BottomNavbar />
        </>
    )
}