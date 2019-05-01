import React from 'react';
import './ImageHolder.css';
import custom from '../../assets/randomImage.jpg'
const imageHolder = (props) => {
    return (
        <div key = {props.property.id}className="body">
            <section className=' d-flex justify-content-between m-4 p-4'>
                <h6>{props.property.price}</h6>
                <h6>{props.property.status}</h6>
            </section>
            <section>
                <img src={props.property.image} className="img-thumbnail" alt="thumbnail" />
            </section>
            <section>
                <h6>street</h6>
                <h6>suburb</h6>
                <h6>{`${props.property.state} ${props.property.postcode}`}</h6>
            </section>
        </div>
    )
}

export default imageHolder;