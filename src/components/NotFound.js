import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h2>404</h2>
        Nothing here! -- Go <Link to="/">Home</Link>
    </div>
);

export default NotFoundPage;