
import Basket from "./Basket";
///list of product id is passed to CartPage
export default function CartPage({ cart, setCart }) {
    return (
        <>
            <div>
                {cart.map(item=>(
                    <Basket key={item} id={item}/>)
                )}
            </div>
        </>
    )
}