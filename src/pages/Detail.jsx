import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

const Detail = ({ detailId }) => {
    return (
        <PhotoCardWithQuery id={detailId} />
    );
}

export default Detail;
