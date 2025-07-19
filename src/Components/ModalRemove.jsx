export default function ModalRemove({onClose}){
    return(
        <>
         <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg text-center w-80 overflow-hidden">

                    {/* Header */}
                    <div className="bg-gray-400 flex justify-start p-2">
                        <span
                            onClick={onClose}
                            className="bg-red-400 hover:bg-red-600 px-2 cursor-pointer text-white hover:font-bold text-lg rounded"
                        >
                            &times;
                        </span>
                    </div>

                    {/* Body content */}
                    <div className="bg-gray-300 p-6">
                        <h2 className="text-lg font-bold mb-4">Removed from cart successfully.</h2>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
                        >
                           Ok
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}