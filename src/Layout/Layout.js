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
            <h1>Hi People</h1>
                {props.children}
            </main>
        </React.Fragment>
    )
}

// layout.propTypes = {
//     children: PropTypes.node
// };

export default layout;
