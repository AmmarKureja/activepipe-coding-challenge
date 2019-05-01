import React from 'react';
import './PropertyCollection.css';
import properties from '../../consts/data/properties.json';
import ImageHolder from '../../components/ImageHolder/ImageHolder';

const propertyCollections = (props) => {

    return (
        <React.Fragment>
            <div className='row'>
                <div className='col col-lg-12'>
                    <h1>Properties Collection</h1>
                </div>
            </div>

            <div className='row Content'>
                {
                    properties.map((property) => (
                        <div key = {property.id} className='col col-lg-3 col-md-6 col-sm-12'>
                            <ImageHolder 
                            key = {property.id}
                            property = {property}
                            />
                        </div>
                    ))
                }
                {/* <div className='col col-lg-3 col-md-6 col-sm-12'>                    
                    <ImageHolder />
                </div>
                <div className='col col-lg-3'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div>
                <div className='col col-lg-3 col-md-6 col-sm-12'>
                <ImageHolder />
                </div> */}
            </div>

        </React.Fragment>
    )


}

export default propertyCollections;