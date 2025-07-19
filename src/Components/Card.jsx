import { useNavigate } from "react-router-dom";

export default function Card({ id, image, title, price, content, setCart, cart }) {
    const navigate = useNavigate();
    console.log("cart:", cart)
    return (
        <div className="text-center grid place-items-center bg-gray-200 p-6 shadow-md rounded-xl border border border-transparent hover:border-gray-500 cursor-pointer hover:shadow-lg hover:shadow-gray-500" onClick={() => navigate(`/details/${id}`)}>
            <img src={image} className="w-full h-50 justify-center rounded-lg" />
            <h2 className="text-[22px] font-bold">{title}</h2>
            <h3 className="text-[20px]">${price}</h3>
            <p className="text-[16px] mb-4">{content}</p>
            <hr className="w-70  border-gray-500" />
            <p className="text-[20px] text-green-500 italic">Recomended</p>
        </div>
    );
}