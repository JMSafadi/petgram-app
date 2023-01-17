import React from 'react';
import { Article, ImgWrapper, Img } from './styles'
import UseNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton/FavButton';
import ToggleLikeMutation from '../../container/ToggleLikeMutation';
import { Link } from '@reach/router';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
    
    const [show, element] = UseNearScreen()

    return (
        <Article ref={element}>
        {
            show && 
            <>
                <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} />
                    </ImgWrapper>
                </Link>
                <ToggleLikeMutation>
                {
                    (toggleLike) => {
                        const handleFavClick = () => {
                            toggleLike({ variables: {
                                input: { id }
                            } })
                        }
                        return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                    }
                }
                </ToggleLikeMutation>
            </>
        }
        </Article>
    );
}

export default PhotoCard;
