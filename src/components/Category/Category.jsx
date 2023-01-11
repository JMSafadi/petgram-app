import React from 'react';
import img from './../../assets/dJa0Hpl.jpg'
import { Image, Link } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover, path = '#', emoji = '?' }) => {
    return (
        <Link to={path} >
            <Image src={cover} />
            {emoji}
        </Link>
    );
}

export default Category;
