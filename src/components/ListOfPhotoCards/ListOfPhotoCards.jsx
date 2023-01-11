import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: {photos = []} } = {} ) => {
    return (
        <ul>
            {photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
        </ul>
    );
}
