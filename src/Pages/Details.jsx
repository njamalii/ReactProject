import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import $ from "jquery";
export default function Details() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(0);
    const minusBtn = useCallback(() => {
        setCount(count - 1)
    }, [count])
    const addBtn = useCallback(() => {
        setCount(count + 1)
    }, [count])
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
        <div className="container mx-auto p-6 mt-15 text-center">
            <h1 className="text-[32px] font-bold">{item.title}</h1>
            <img src={item.image} className="mx-auto w-60 h-48 rounded-lg" />
            <h3 className="text-[20px]">${item.price}</h3>
            <p className="text-[16px] mb-5">{item.content}</p>
            <button className="bg-gray-400 px-2 py-2 rounded-lg hover:bg-gray-600 hover:font-bold" onClick={minusBtn}>-</button>
            <span className="ml-3 mr-3">{count}</span>
            <button className="bg-gray-400 px-2 py-2 rounded-lg hover:bg-gray-600 hover:font-bold" onClick={addBtn}>+</button>
        </div>
    );
}