import React from 'react';
import Header from './Header';

const HeaderOnly = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
};

export default HeaderOnly;
