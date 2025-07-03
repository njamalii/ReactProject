import { useNavigate } from "react-router-dom";

export default function Card({ id, image, title, price, content, setCart, cart }) {
    const navigate = useNavigate();

    function handleAddToCart(event) {
        event.stopPropagation();
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
        setCart(cart.filter(item => item != id)) ///if id is the same it will be deleted from array(filtered)
    }
    console.log("cart:", cart)
    return (
        <div className="grid place-items-center bg-gray-200 p-6 shadow-md rounded-xl border border border-transparent hover:border-gray-500 cursor-pointer hover:shadow-lg hover:shadow-gray-500" onClick={() => navigate(`/details/${id}`)}>
            <img src={image} className="w-full h-50 justify-center rounded-lg" />
            <h2 className="text-[22px] font-bold">{title}</h2>
            <h3 className="text-[20px]">${price}</h3>
            <p className="text-[16px]">{content}</p>
            {cart.includes(id) ?
                <button
                    onClick={handleRemoveFromCart}
                    className="border border-gray-500 bg-red-300 hover:bg-red-500 px-3 rounded mb-3 mt-2 cursor-pointer"
                >
                    Remove from cart
                </button> :
                <button
                    className="border border-gray-500 bg-green-300 hover:bg-green-500 px-3 rounded mb-3 mt-2 cursor-pointer"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>}
            <hr className="w-70  border-gray-500" />
            <p className="text-[20px] text-green-500 italic">Recomended</p>
        </div>
    );
}