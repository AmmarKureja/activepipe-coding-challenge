import React, { Component } from 'react';

import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import PropertyCollection from '../../components/PropertyCollection/PropertyCollection';
import axios from 'axios';

let config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
};

let refreshHandler = () => {
    window.location.reload();
}


class MainPage extends Component {

    state = {
        data: [],
        filtererd_data: [],
        error: null,
        loading: false
    }
    componentDidMount() {
        this.setState({loading: true})
        axios.get('https://code-challenge.activepipe.com/challenge/properties', config)
            .then(response => {
                console.log(response);
                this.setState({ data: response.data, loading: false })
            })
            .catch((error) => {
                // handle error
                console.log('I am In Error Block', error);
                this.setState({ error: null, loading: false })
            });
    }
    render() {
        let renderLoading = this.state.loading ? <LoadingComponent /> : null;
        let currentComponent = this.state.error ?
            <ErrorComponent refreshHandler={refreshHandler} />
            : <PropertyCollection />;
        return (
            <React.Fragment>
                {/* <div className="container d-flex h-100"> */}
                    <div className="row justify-content-center align-self-center mt-4">
                        {renderLoading}
                    </div>
                {/* </div> */}

                <div>
                    {currentComponent}
                </div>
            </React.Fragment>
        )
    }
}

export default MainPage;