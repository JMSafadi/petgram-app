import React from 'react';
import { ListOfPhotoCards } from '../container/ListOfPhotocards';
import Layout from '../components/Layout/Layout';

const HomePage = ({ id }) => {
    return (
        <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontar fotos de animales domesticos muy bonitos'>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    );
}

const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})

export default Home;
