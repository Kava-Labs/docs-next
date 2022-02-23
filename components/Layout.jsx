import React from 'react'; 


export const Layout = ({children}) => {

    return <>
        <nav>
            <a href='FAQ/basics'>faq</a>
            <a href='getting_started'>getting Started</a>
        </nav>
        <main>{children}</main> 
    </>;
};