import { useEffect, useState } from "react";
import $ from "jquery";
///Gets the id of that product and then gets the data of product that the id of that product is passed
export default function Basket({ id}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        var settings = {
            "url": `http://localhost:3000/posts/${id}`,
            "method": "GET",
            "timeout": 0,
            success: (response) => {
                setData(response);
            },
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }, [id])

    if (!data) {
        <h1>Loading...</h1>
    }
    return (
        <>
            <div className="container mx-auto mt-20 mb-4">
                <div className="grid place-items-center bg-gray-200 p-6 shadow-lg rounded-xl border w-200 mx-auto">
                    <img src={data?.image} className="w-full h-50 justify-center rounded-lg" />
                    <h2 className="text-[22px] font-bold">{data?.title}</h2>
                    <h3 className="text-[20px]">${data?.price}</h3>
                    <p className="text-[16px]">{data?.content}</p>
                    <hr className="w-70  border-gray-500" />
                    <p className="text-[20px] text-green-500 italic">Recomended</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 cursor-pointer">
                        Remove from basket
                    </button>
                </div>
            </div>
        </>
    )
}