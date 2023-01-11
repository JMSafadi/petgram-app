import React from 'react';
import img from './../../assets/dJa0Hpl.jpg'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover, path = '#', emoji = '?' }) => {
    return (
        <Anchor to={path} >
            <Image src={cover} />
            {emoji}
        </Anchor>
    );
}

export default Category;
