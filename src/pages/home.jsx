import React from 'react';
import ListOfCategories from '../components/ListOfCategories/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotocards';

const Home = ({ id }) => {
    return (
        <>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={id} />
        </>
    );
}

export default Home;
