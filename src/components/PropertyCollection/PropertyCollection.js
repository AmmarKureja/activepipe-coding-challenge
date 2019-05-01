import React from 'react';
import './PropertyCollection.css';
import PropTypes from 'prop-types';
import ImageHolder from '../../components/ImageHolder/ImageHolder';

const propertyCollections = (props) => {

    return (
        <React.Fragment>

            {/* <div className='row'>
                <div className='col col-lg-12'>
                    <h1>Properties Collection</h1>
                </div>
            </div> */}
            <div className='row float-right mb-4'>
            <form className="col form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label> Filter Properties </label>
                    <select className="form-control ml-4" onChange={(event) => {props.onClickFilter(event.target.value)}} id="filterOptions">
                        <option value="all">All</option>
                        <option value="current">Current</option>
                        <option value="sold">Sold</option>
                        <option value="off_market">Off_Market</option>
                        <option value="withdrawn">WithDrawn</option>
                    </select>
                </div>
            </form>
            </div>
            
            <div className='row Content mt-4 align-self-center ml-1 mr-2'>
                {
                    props.data.map((property) => (
                        <div key={property.id} className='col col-lg-3 col-md-6 col-sm-12'>
                            <ImageHolder
                                key={property.id}
                                property={property}
                            />
                        </div>
                    ))
                }
            </div>

        </React.Fragment>
    )


}

propertyCollections.propTypes = {
    data: PropTypes.array,
    onClickFilter: PropTypes.func
};

export default propertyCollections;