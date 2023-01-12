import React from 'react';
import { Link, Nav } from './styles';
import { MdHome, MdFavorite, MdPerson } from "react-icons/md";

const SIZE = '32px'

const Navbar = () => {
    return (
        <Nav>
            <Link to='/'> <MdHome size={SIZE} /> </Link>
            <Link to='/favs'> <MdFavorite size={SIZE} /> </Link>
            <Link to='/user'> <MdPerson size={SIZE} /> </Link>
        </Nav>
    );
}

export default Navbar;
