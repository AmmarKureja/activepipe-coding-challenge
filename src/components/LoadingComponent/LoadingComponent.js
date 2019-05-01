import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
const loadingComponent = () => {
    return (        
            <RingLoader
                sizeUnit={"px"}
                size={50}
                color={'#2d99dc'}
                loading={true}
            />
    )
}

export default loadingComponent;