import React, {Fragment} from 'react';

const SearchInput = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <Fragment>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search.."/>
                <button className="tran3s"><i className="bi bi-search"/></button>
            </form>
        </Fragment>
    )
}

export default SearchInput