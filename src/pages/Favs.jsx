import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';
import FavsWithQuery from '../container/GetFavorites';

const Favs = () => {
    return (
        <Layout>
            <FavsWithQuery/>
        </Layout>
    );
}

export default Favs;
