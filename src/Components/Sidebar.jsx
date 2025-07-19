import { useState } from "react";
import { Drawer, Button } from "@mui/material";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <div className="fixed top-20 w-10 h-20 border border-gray-500 rounded-r-lg bg-gray-400 hover:bg-gray-500 cursor-pointer flex items-center justify-center" onClick={() => setOpen(true)}>
                    <span className="inline-block rotate-90 text-[20px]">open</span>
                </div>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                        "& .MuiDrawer-paper": {
                            backgroundColor: "rgb(162, 173, 179)",
                            width: 300,  // Set width
                            padding: "20px", // Add padding
                        }
                    }}
                >
                    <div className="fixed left-0 right-0 top-0 bg-gray-300 w-[300px]">
                        <span onClick={() => setOpen(false)} className="bg-red-400 text-[16px] hover:font-bold cursor-pointer hover:bg-red-600 px-2 rounded">&times;</span>
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-[20px] font-bold italic">Our best sales!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque ex beatae commodi fugit non libero aut praesentium veniam, corporis corrupti numquam illum pariatur nulla exercitationem aspernatur facilis hic est!</p>
                    </div>
                    {/* <Button onClick={() => setOpen(false)
                    }>&times;</Button> */}
                </Drawer>
            </div>
        </>
    );
}