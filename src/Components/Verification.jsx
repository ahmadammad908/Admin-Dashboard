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
import Vector6 from "../assets/images/Vector 6.png"

import Ellipse from "../assets/images/Ellipse.png"
import group from "../assets/images/group.png";
import { FaSearch } from 'react-icons/fa'






///////////////////User Data///////////////


const data = [
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    },
    {
        image1: Ellipse,
        image2: group,
        text: "James Walter",
        ID: "000 000 000",
        Contact: "+00 123 456 789",
        Email: "jw00@gmail.com",
    }
]
console.log(data)
//////Menu Items /////////////////////
const menuItem = [
    {
        path: "/",
        name: "Users",
        img: Vector,
    },
    {
        path: "/verification",
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

const Verification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const [click, setClick] = useState(false);
    const toggle1 = () => setClick(!click)
    return (
        <>
            <div class="flex ... ">

                <div class="flex-none w-14 h-14 ...  m-[10px] ">
                    <div className=' h-[196vh] md:h-[100vh] bg-[#161617] p-[10px] rounded-xl' style={{ width: isOpen ? "270px" : "70px", position: "fixed", zIndex: isOpen ? "30" : "0" }} >
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
                    <div className=' min-h-screen  bg-[#161617] rounded-xl '>
                        <FaSearch className='text-[#6C6C6C] absolute hidden md:block ml-[120px] mt-[20px]' />
                        <div className='flex  md:justify-between flex-wrap justify-center pt-[10px]'>
                            <input type='search' placeholder='Search' className='md:ml-[100px] md:w-[400px] rounded-2xl bg-[transparent] md:pl-[100px] pl-[10px]' style={{ border: "2px solid #6C6C6C", outline: "none", color: "white", }} />
                            <img src={Vector6} className='my-[10px] md:my-[0px] md:mr-[10px] ml-[10px]'></img>
                        </div>
                        <div className='p-[20px] '>
                            <h1 className='text-white text-2xl md:text-4xl font-bold'>Users Verification</h1>
                        </div>
                        <div >
                            <div className='flex flex-wrap md:justify-center justify-center'>
                                
                                    {
                                        data.map((Data)=>(
                                            <>
                                            <div style={{ width: "210.937px", height: "210.937px", flexShrink: "0", zIndex: "20", background: "black", color: "white", margin: "10px", borderRadius: "10px" }}>
                                                <div className='flex justify-end p-[10px]'>
                                                    <img src={Data.image2}></img>
                                                </div>
                                                <div className='flex justify-center '>
                                                    <img src={Data.image1}></img>
                                                </div>
                                                <div className='flex justify-start m-[10px] font-bold text-[10px]'>
                                                    <h1>{Data.text}</h1>
                                                </div>
                                                <div className='flex justify-start  font-bold m-[10px] text-[10px]' >
                                                    <h1>ID : {Data.ID}</h1>
                                                </div>
                                                <div className='flex justify-start  font-bold m-[10px] text-[10px]' >
                                                    <h1>Contact : {Data.Contact}</h1>
                                                </div>
                                                <div className='flex justify-start  font-bold m-[10px] text-[10px]' >
                                                    <h1>Email : {Data.Email}</h1>
                                                </div>
                                            </div>
                                            

                                            </>
                                        ))

                                    }

                              


                            </div>
                        </div>

                    </div>

                </div>


                <div class="flex-none w-14 h-14 ...  m-[10px]">
                    <div className=' h-[196vh] md:h-[100vh] bg-[#161617] rounded-xl md:mr-[10px] mr-[0px]' style={{ width: click ? "200px" : "70px", position: "fixed", right: "0", zIndex: click ? "30" : "0", }}>
                        <div className='flex items-center'>
                            <div className='p-[4px] ml-[5px]'>
                                <img src={Man1} style={{ cursor: "pointer" }} onClick={toggle1}></img>
                            </div>
                            <div style={{ display: click ? "block" : "none", }}>
                                <h1 className='text-white font-bold ml-[20px]'>Super Admin</h1>
                            </div>
                        </div>
                        <hr className='mt-[30px]' />
                        <div className='flex justify-center mt-[200px]' style={{ display: click ? "block" : "none", }}>
                            <h1 className='text-4xl text-center font-bold' style={{ color: "gray", }}>No Data</h1>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Verification