import React from 'react';
import { ak } from "../assets/index";
import { Link } from "react-router-dom"
import { cart } from "../assets/index";


const Header = () => {

    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img className="w-28" src={ak} alt="ak" />            
                </div>
            
            <div className= "flex items-center gap-8">
                <ul className="flex items-center gap-8">
                    <Link to="/">
                    <li className= "text-base text-black font-bold hover:text-pink-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300" >Home</li>
                    </Link>
                    
                    <li className= "text-base text-black font-bold hover:text-pink-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">About</li>
                   
                    <li className= "text-base text-black font-bold hover:text-pink-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
                    

                </ul>
                <Link to="/cart">
                <div className="relative">
                <img className="w-12
                " src={ cart } alt="cart"/>
                <span className= "absolute w-6 top-1 left-4 text-sm flex items-center justify-center">
              
                </span>
                
                </div>
                </Link>
               
            </div>
            </div>
        </div>
        
    );
};

export default Header