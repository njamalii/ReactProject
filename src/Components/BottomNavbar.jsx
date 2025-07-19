export default function BottomNavbar() {
    return (
        <footer className="bottom-0 w-full flex justify-between bg-gray-100 p-4 shadow-[0_-7px_8px_-1px_rgba(0,0,0,0.2)] ">
            
                <div className="grid grid-cols-2">
                <img className="w-7" src="/contact.svg" />
                <div>
                    <b>Contact us: </b>
                    <br />
                    Phone:
                    +98 9453077014
                    <br />
                    Email:
                    info@gmail.com
                    <br />
                    Postcode:
                    IG1 3NW
                </div>
            </div>
                <div className="grid grid-cols-2">
                    <img className="w-7" src="/location.svg" />
                    <div>
                        <b>Location: </b>
                        <br />
                        New York
                        <br />
                        Adam Street
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <img src="/social.svg" className="w-7" />
                    <b>Social: </b>
                    <br />
                    <div className="grid grid-cols-3">
                        <img src="/telegram.svg" className="w-8" />
                        <img src="/instagram.svg" className="w-8 ml-3" />
                        <img src="/whatsapp.svg" className="w-8 ml-5" />
                    </div>
                </div>
            <hr />
        </footer>
    )
}