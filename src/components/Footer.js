import React from 'react'
import { ak } from "../assets/index"

const Footer = () => {
    return (
        <div className="bg-black text-[#949494] py-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-3">
                <img className="w-32" src={ak} />
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
                    <div>
                        <p>Fake Address Here</p>
                        <p>Mobile: 555-555-5555</p>
                        <p>Email: ak@gmail.com</p>
                    </div>
        

                    </div>
                    <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
                    <p>my account</p>
                    <p>checkout</p>
                    <p>order tracking</p>
                    <p>help & support</p>
                </div>

            </div>
</div>
            )
}

            export default Footer