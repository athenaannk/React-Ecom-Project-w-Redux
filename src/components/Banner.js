import React from 'react'

const Banner = () => {
    const data = [
        "https://thumbs.dreamstime.com/b/cute-black-woman-holding-shopping-bags-against-white-wall-banner-background-shopping-sales-black-friday-concept-cute-black-woman-252242826.jpg"
    ]
  return (
    <div className="w-full h-auto">
        
            <div >
<img className="w-screen h-full object-cover" src={data[0]}/>
            </div>
        
    </div>
  )
}

export default Banner