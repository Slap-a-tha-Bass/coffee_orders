import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <>
            <Link className="btn btn-outline-primary m-2" to='/'>Home</Link>
            <Link className="btn btn-outline-primary m-2" to='/orders'>Orders</Link>
        </>
    )
}

export default Navbar;
