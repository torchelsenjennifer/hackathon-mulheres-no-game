import React from "react";
import { Link } from 'react-router-dom';

function Navbar({ url, children }) {
    return (
        <Link to={url}>
           <p className='hover:text-pink-500 font-bold'> {children}</p>
        </Link>
    )
}

export default Navbar;