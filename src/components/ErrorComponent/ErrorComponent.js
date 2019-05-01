import React from 'react';

const renderErrorPage = (props) => {
    return (
        <div className=' d-flex justify-content-between d-block p-2 bg-danger text-white m-4'>
            <span>
            <i className="fa fa-fw fa-thumbs-down" aria-hidden="true">
            
            </i>
                    Something Went Wrong
        </span>
            <i className="fa fa-refresh ml-auto mr-4" aria-hidden="true"
                onClick={props.refreshHandler}
            ></i>
        </div>


    )
}

export default renderErrorPage;