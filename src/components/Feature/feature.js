import React from 'react';
import requireAuth from '../requireAuth/requireAuth';

const Feature = () => {

    return (
        <div>
            Feature
        </div>
    );
}

export default requireAuth(Feature);