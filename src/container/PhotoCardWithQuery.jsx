import React from 'react';
import PhotoCard from '../components/PhotoCard/PhotoCard'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const PhotoCardWithQuery = ({ id }) => {

    const loadingCard = () => {
        return <h4 style={{display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>Cargando.....</h4>
    }

    return (
        <Query query={GET_SINGLE_PHOTO} variables={{ id }} >
            {
                ({ loading, error, data = { photo: {} } }) => {
                    const { photo = {} } = data
                    console.log(photo)
                    if (loading) return loadingCard()
                    if (error) return <p>Error!</p>
                    return <PhotoCard {...photo} />
                }
            }
        </Query>
    );
}

