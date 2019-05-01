import React from 'react';
import './ImageHolder.css';
import custom from '../../assets/randomImage.jpg'
const imageHolder = (props) => {

    return (
        <div className="body">
            <section className=' d-flex justify-content-between m-4 p-4'>
                <h6>Price</h6>
                <h6>Status</h6>
            </section>
            <section>
                <img src={custom} className="img-thumbnail" alt="thumbnail" />
            </section>
            <section>
                <h6>street</h6>
                <h6>suburb</h6>
                <h6>state and postcode</h6>
            </section>
        </div>
    )
}

export default imageHolder;