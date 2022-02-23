import React from 'react'; 

// sample nav 
export const Nav = ({children}) => {

    return <>
        <nav>
            <a href='helloKava'>Hello Kava</a>
        </nav>
        <main>{children}</main> 
    </>;
};