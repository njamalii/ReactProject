import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header({cart}) {

    return (
        <>
            <header className="fixed top-0 w-full p-4 bg-gray-100 shadow-lg">
                <ul className="flex space-x-4">
                    <Link>
                        <li><a href="#"><img src="/images/lorem.jpg" className="w-10 h-7 rounded-lg border border-gray-500" /></a></li>
                    </Link>
                    <Link to="/cart">
                        <li>
                            <a href="#" className="relative hover:text-gray-300">
                                <img src="/basket.svg" className="w-7 h-7 rounded-lg" alt="Basket" />
                                <span className="absolute top-0 -left-2 text-xs bg-red-500 text-white px-1 rounded-full">
                                    {cart?.length > 0 ? cart.length : ""}
                                </span>
                            </a>
                        </li>
                    </Link>
                    <Link to="/">
                        <li><a href="#" className=" hover:text-gray-300">Home</a></li>
                    </Link>
                    <Link>
                        <li><a href="#" className=" hover:text-gray-300">About</a></li>
                    </Link>
                    <Link>
                        <li><a href="#" className=" hover:text-gray-300">Contact</a></li>
                    </Link>
                </ul>
            </header>
        </>
    )
}