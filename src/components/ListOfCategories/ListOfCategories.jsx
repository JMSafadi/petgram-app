import React, { useState, useEffect, Fragment } from 'react';
import Category from '../Category/Category';
import { List, Item } from './styles'

const useCategoriesData = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        window.fetch('https://petgram-server-24iykciv5.now.sh/categories')
        .then(res => res.json())
        .then(response => {
            setCategories(response)
            // console.log(categories)
            setLoading(false)
        })
    }, []);
    return { categories, loading }
}

const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 
            200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }

    document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {   loading
                ? <Item key='loading'> <Category/> </Item>
                : categories.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );
}

export default ListOfCategories;
