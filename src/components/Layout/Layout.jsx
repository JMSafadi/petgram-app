import React from 'react';
import { Helmet } from 'react-helmet';
import { Div, Subtitle, Title } from './styles';

const Layout = ({ children, title, subtitle }) => {
    return (
        <>
            <Helmet>
                {title && <title> { title } | Petgram </title>}
                {subtitle && <meta name='description' content={subtitle}/>}
            </Helmet>
            <Div>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </Div>
        </>
    );
}

export default Layout;
