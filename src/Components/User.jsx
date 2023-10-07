import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Khandanni from "../assets/images/Khandaani.png";
import Vector from "../assets/images/Vector.png";
import Vector2 from "../assets/images/Vector2.png";
import Vector3 from "../assets/images/Vector3.png";
import Vector4 from "../assets/images/Vector4.png";
import Maskgroup from "../assets/images/Maskgroup.png";
import Maskgroup2 from "../assets/images/Maskgroup1.png";
import Man1 from "../assets/images/man 1.png"
import Vector5 from "../assets/images/Vector5.png";


//////Menu Items /////////////////////
const menuItem = [
    {
        path: "/",
        name: "Users",
        img: Vector,
    },
    {
        path: "/usersverifications",
        name: "Users Verifications",
        img: Vector2,
    },
    {
        path: "/usermembership",
        name: "User MemberShip",
        img: Vector3,
    },
    {
        path: "/updaterequest",
        name: "Update Requests",
        img: Vector4,
    },

    {
        path: "/blockeduser",
        name: "Blocked User",
        img: Maskgroup,
    },
    {
        path: "/addadmin",
        name: "Add Admin",
        img: Maskgroup2,
    },

];

const User = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const[click, setClick] = useState(false);
    const toggle1 = () => setClick(!click)
    return (
        <>
            <div class="flex ... ">

                <div class="flex-none w-14 h-14 ...  m-[10px] ">
                    <div className=' h-[100vh] bg-[#161617] p-[10px] rounded-xl' style={{ width: isOpen ? "270px" : "70px", position: "fixed" }} >
                        <img
                            onClick={toggle}
                            src={Khandanni}
                            style={{
                                cursor: "pointer",
                            }}
                        ></img>
                        {
                            menuItem.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className="nav-link" // Apply the "ctive-link" class when the NavLink is active
                                >
                                    <div className='flex p-[10px] mt-[20px] items-center hover:bg-[#000000] hover:rounded-2xl active:bg-[#000000]'>
                                        <img src={item.img} alt={item.name} onError={(e) => console.error(`Error Loading Image for ${item.name}: ${e}`)}></img>
                                        <div style={{ display: isOpen ? "block" : "none", }} className='ml-[20px]'>
                                            <h1 className='text-[#6C6C6C] font-bold hover:text-white'>{item.name}</h1>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        }

                    </div>
                </div>



                <div class="grow h-14 ... m-[10px]">
                    <div className=' h-[100vh] bg-[#161617] rounded-xl'>
                        <h1 className=''>Main</h1>
                    </div>
                </div>


                <div class="flex-none w-14 h-14 ...  m-[10px]">
                    <div className=' h-[100vh] bg-[#161617] rounded-xl' style={{ width: click ? "300px" : "70px", position: "fixed",right:"0", marginRight:"8px" }}>
                        <div className='flex items-center'>
                            <div className='p-[4px] ml-[5px]'>
                                <img src={Man1} style={{ cursor: "pointer" }} onClick={toggle1}></img>
                            </div>
                            <div style={{ display: click ? "block" : "none", }}>
                                <h1 className='text-white font-bold ml-[20px]'>Super Admin</h1>
                            </div>
                        </div>
                        <hr className='mt-[30px]'/>
                        <div className='flex justify-center mt-[200px]' style={{ display: click ? "block" : "none", }}>
                            <h1 className='text-4xl text-center font-bold' style={{color:"gray",}}>No Data</h1>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default User