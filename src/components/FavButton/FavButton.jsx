import React from 'react';
import { Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({ liked, likes, onClick }) => {

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    return (
        <Button onClick={onClick}>
            <Icon size='26px' /> {likes} Likes!
        </Button>
    );
}

export default FavButton;
