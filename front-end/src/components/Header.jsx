import React from 'react';

const Header = () => {
    return (
        <div className='flex p-4  bg-secondary shadow-2xl'>
            <img src='/logo.svg' alt='Logo' width={160} height={100} />
        </div>
    );
}

export default Header;