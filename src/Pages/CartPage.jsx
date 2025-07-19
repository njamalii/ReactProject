
import Basket from "./Basket";
///list of product id is passed to CartPage
export default function CartPage({ cart, setCart }) {
    if (cart.length == 0) {
        return (
            <>
                <div className="w-full text-center">
                    <h1 className="text-center text-gray-600 text-[42px] font-bold italic">Your cart is empty!</h1>
                    <img src="/emptybas.png" className="mx-auto w-30 h-30 filter grayscale brightness-90" />
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                {cart.map(item => (
                    <Basket key={item} id={item} />)
                )}
            </div>
        </>
    )
}