import { useRef, useState } from "react"
import $ from "jquery";

export default function Contact() {
    const [text, setText] = useState("");
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const handleChange = (e) => {
        if (e.target.value.length <= 100) {
            setText(e.target.value);
        }
    };

    const message =
        text.length > 99
            ? "You cannot type more than 100 characters"
            : `${text.length}`;

    function displayInfo(e) {
        e.preventDefault(); // prevent page reload

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const comment = text;
        if (name == "" || email == "" || comment == "") {
            alert("Fields cannot be empty.");
        } else {
            alert("Your comment sent successfully :)");

            const settings = {
                url: "http://localhost:3000/comments",
                method: "POST",
                timeout: 0,
                contentType: "application/json",
                data: JSON.stringify({
                    name: name,
                    email: email,
                    comment: comment
                })
            };

            $.ajax(settings).done(function (response) {
                console.log("Successfully posted:", response);
            });
        }

    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">

                    <div className="p-8">
                        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
                        <form className="grid gap-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-bold text-gray-700">Name</label>
                                <input type="text" id="name" className="w-full border border-gray-300 rounded p-2 mt-1" placeholder="Enter your name" ref={nameRef} />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                                <input type="email" id="email" className="w-full border border-gray-300 rounded p-2 mt-1" placeholder="yourname@example.com" ref={emailRef} />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm text-gray-700 font-bold">Message</label>
                                <textarea id="message" rows="4" className="w-full border border-gray-300 rounded p-2 mt-1" placeholder="Your comments here ..." value={text}
                                    onChange={handleChange}
                                ></textarea>
                                <p>{message}</p>
                            </div>
                            <button type="submit" className="bg-green-400 py-2 rounded hover:font-bold hover:bg-green-600 transition cursor-pointer" onClick={displayInfo}>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="mt-6 p-6">
                        <iframe
                            title="Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.28239493479!2d0.066934!3d51.5588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6c6c7e7e3e3%3A0x3e5b9c9b9b9b9b9b!2sIlford%2C%20London%2C%20UK!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-md shadow h-2/3 border border-gray-600"
                        ></iframe>
                        <h1 className="font-bold text-[20px] italic text-center mb-3">You can find us in this location.</h1>
                        <h1 className="text-center font-bold">Contact us</h1>
                        <h1 className="text-center">Phone:+98 9453077014</h1>
                        <h1 className="text-center">Email:info@gmail.com</h1>
                    </div>
                </div>
            </div>
        </>
    )
}