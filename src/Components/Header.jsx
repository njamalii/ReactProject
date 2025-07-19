
import { Link, useLocation } from "react-router-dom";

export default function Header({ cart }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <>
            <header className="fixed top-0 w-full p-4 bg-gray-100 shadow-lg">
                <ul className="flex space-x-4">

                    <li>
                        <Link>
                            <span><img src="/images/lorem.jpg" className="w-10 h-7 rounded-lg border border-gray-500" /></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <span className="relative hover:text-gray-300">
                                <img src="/basket.svg" className="w-7 h-7 rounded-lg" alt="Basket" />
                                <span className="absolute top-0 -left-2 text-xs bg-red-500 text-white px-1 rounded-full">
                                    {cart?.length > 0 ? cart.length : ""}
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className=" hover:text-gray-300">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className=" hover:text-gray-300">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <span className=" hover:text-gray-300">Contact</span>
                        </Link>
                    </li>
                    {isHomePage && (
                        <form className="flex ml-auto">
                            <input className="border border-gray-300 rounded me-2 hover:shadow-lg hover:border-gray-500" type="text" placeholder=" Search for ..." id="tag" />
                            <button className="border border-gray-400 hover:border-gray-600 bg-green-300 px-3 rounded hover:bg-green-500 cursor-pointer" type="button" >Search</button>
                        </form>
                    )}
                </ul>
            </header >
        </>
    )
}