import React from 'react'

const NewsLetterForm = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return ( 
        <> 
            <form action="#" onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email"/>
                <button className="ripple-btn tran3s">Subscribe</button>
            </form> 
        </>
  )
}

export default NewsLetterForm