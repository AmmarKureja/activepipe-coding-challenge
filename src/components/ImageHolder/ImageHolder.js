import React from 'react';
import './ImageHolder.css';
import PropTypes from 'prop-types';

const renderStatusLegend = (status = 'current') => {
    switch (status) {
        case 'current':
            return (
                <React.Fragment>
                    {`${status} `}
                    <i className='fa fa-fw fa-circle text-success'></i>
                </React.Fragment>

            );
        case 'sold':
            return (
                <React.Fragment>
                    {`${status}  `}
                    <i className='fa fa-fw fa-circle text-danger'></i>
                </React.Fragment>

            );
        case 'off_market':
            return (
                <React.Fragment>
                    {`${status}  `}
                    <i className='fa fa-fw fa-circle text-warning'></i>
                </React.Fragment>

            );
        case 'withdrawn':
            return (
                <React.Fragment>
                    {`${status}  `}
                    <i className='fa fa-fw fa-circle text-secondary'></i>
                </React.Fragment>

            );
        default:
            return (
                <React.Fragment>
                    {`${status}  `}
                    <i className='fa fa-fw fa-circle text-success'></i>
                </React.Fragment>

            );
    }
}


const imageHolder = (props) => {

    return (
        <div key={props.property.id} className="body">
            <section className=' d-flex justify-content-between m-1 p-1 mt-4 mb-4'>
                <span>{props.property.price}</span>
                <span>{renderStatusLegend(props.property.status)}</span>
            </section>
            <section>
                <img src={props.property.image} className="img-thumbnail" alt="thumbnail" />
            </section>
            <section className='d-flex flex-column m-1 p-1 mt-4 mb-4'>
                <span>{props.property.street}</span>
                <span>{props.property.suberb}</span>
                <span>{`${props.property.state} ${props.property.postcode}`}</span>
            </section>
        </div>
    )
}
imageHolder.propTypes = {
    property: PropTypes.object
};
export default imageHolder;