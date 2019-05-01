import React from 'react';
import './Layout.css';
//import PropTypes from 'prop-types';

const layout = (props) => {
    // const { children } = props;
    return (
        <React.Fragment>
            <div>
    
            </div>
            <main className="Content">
                {props.children}
            </main>
        </React.Fragment>
    )
}

// layout.propTypes = {
//     children: PropTypes.node
// };

export default layout;
