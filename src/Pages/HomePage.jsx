import { useEffect, useState } from "react";
import Card from "../Components/Card";
import $ from "jquery";
import Sidebar from "../Components/Sidebar";
//Adding some products to HomePage
export default function HomePage({ cart, setCart }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        var settings = {
            "url": "http://localhost:3000/posts",
            "method": "GET",
            "timeout": 0,
            success: (response) => {
                setPosts(response);
            },
            error: (err) => {
                console.error("Error fetching data:", err);
            },
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    }, [])
    return (
        <>
            <div className='container mx-auto mt-20 mb-36 w-250'>
                <h1 className='text-center font-bold text-4xl mb-3 italic'>Products</h1>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        posts.map(post => (///post holds current object in iteration
                            <Card
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                price={post.price}
                                content={post.content}
                                image={post.image}
                                setCart={setCart}
                                cart={cart}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}