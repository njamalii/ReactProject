import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import $ from "jquery";
import ModalAdd from "../Components/ModalAdd";
import ModalRemove from "../Components/ModalRemove";
export default function Details({ cart, setCart }) {
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(0);
    const minusBtn = useCallback(() => {
        if (count > 0) {
            setCount(count - 1)
        }
    }, [count])
    const addBtn = useCallback(() => {
        setCount(count + 1)
    }, [count])

    function handleAddToCart(event) {
        event.stopPropagation();
        setShowModal(true); // Show modal on click
        setCart(prevCart => {
            if (prevCart.includes(id)) {
                return prevCart; ///if it has the id of item , return whatever that was in our array(prevCart)
            } else {
                return [...prevCart, id]
            }
        }); // Add item to cart
    };
    function handleRemoveFromCart(event) {
        event.stopPropagation();
        setShowRemoveModal(true);
        setCart(cart.filter(item => item != id)) ///if id is the same it will be deleted from array(filtered)
    }
    console.log(cart)
    useEffect(() => {
        // fetch(`http://localhost:3000/posts/${id}`) 
        //     .then(response => response.json())
        //     .then(data => setItem(data))
        //     .catch(error => console.error("Error fetching item:", error));
        var settings = {
            "url": `http://localhost:3000/posts/${id}`,
            "method": "GET",
            "timeout": 0,
            success: (response) => {
                setItem(response);
            },
            error: (err) => {
                console.error("Error fetching data:", err);
            },
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }, [id]);

    if (!item) return <p>Loading item details...</p>;

    return (
        <div className="container mx-auto p-6 mt-15 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-left grid grid-cols-2 gap-4">

                {/* Left Side: Image */}
                <div>
                    <img src={item.image} className="w-full h-100 rounded-lg" />
                </div>

                {/* Right Side: Content */}
                <div className="md:w-2/3">
                    <h1 className="text-[32px] font-bold">{item.title}</h1>
                    <h3 className="text-[20px]">${item.price}</h3>
                    <p className="text-[16px] mb-10">{item.content}</p>

                    <div className="flex items-center mb-4">
                        <button className="bg-gray-400 px-2 py-2 rounded-lg hover:bg-gray-600 hover:font-bold" onClick={minusBtn}>-</button>
                        <span className="ml-3 mr-3">{count}</span>
                        <button className="bg-gray-400 px-2 py-2 rounded-lg hover:bg-gray-600 hover:font-bold" onClick={addBtn}>+</button>
                    </div>

                    {Array.isArray(cart) && cart.includes(id) ? (
                        <button
                            onClick={handleRemoveFromCart}
                            className="border border-gray-500 bg-red-300 hover:bg-red-500 px-3 rounded mb-3 mt-2 cursor-pointer"
                        >
                            Remove from cart
                        </button>
                    ) : (
                        <button
                            className="border border-gray-500 bg-green-300 hover:bg-green-500 px-3 rounded mb-3 mt-2 cursor-pointer"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>

            <hr className="w-1/4 mx-auto mt-6" />

            <div className="flex flex-col items-center justify-center mt-3 space-y-2">
                <div className="flex items-center">
                    <img src="/tick.svg" className="w-7 h-7 mr-2" />
                    <span>Free Delivery.</span>
                </div>
                <div className="flex items-center">
                    <img src="/tick.svg" className="w-7 h-7 mr-2" />
                    <span>Available in store.</span>
                </div>
            </div>
            {showModal && <ModalAdd onClose={() => setShowModal(false)} />}
            {showRemoveModal && <ModalRemove onClose={() => setShowRemoveModal(false)} />}
        </div>
    );
}