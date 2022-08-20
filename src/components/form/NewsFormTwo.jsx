import React,{Fragment} from 'react'

const NewsFormTwo = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <Fragment>
            <form action="#" onClick={handleSubmit}>
                <input type="email" placeholder="Enter your email"/>
                <button>Sign Up</button>
            </form>
        </Fragment>
    )
}

export default NewsFormTwo