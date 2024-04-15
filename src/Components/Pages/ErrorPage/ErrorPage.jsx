import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center pt-32'>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>page not found</p>
            <Link to={'/'}><button className='btn btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;