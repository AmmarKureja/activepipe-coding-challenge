import React, { Component } from 'react';

import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import PropertyCollection from '../../components/PropertyCollection/PropertyCollection';

import properties from '../../consts/data/properties.json';

import axios from 'axios';

const config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
};

const refreshHandler = () => {
    window.location.reload();
}



class MainPage extends Component {

    state = {
        data: [...properties],
        filtererd_data: [...properties],
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
                this.setState({ error: null, loading: false })
            });
    }
    filterHandler = (value) => {
        if(value === 'all') {
            let tempState = Object.assign({}, this.state);
            tempState.filtererd_data = tempState.data;
            this.setState({filtererd_data : tempState.filtererd_data});
        } 
        else {
            let tempState = Object.assign({}, this.state);
            tempState.filtererd_data = tempState.data.filter((property) => {
                return property.status.trim() === value;
            });
            this.setState({filtererd_data : tempState.filtererd_data});
        }        
    }

    render() {
        let renderLoading = this.state.loading ? <LoadingComponent /> : null;
        let currentComponent = this.state.error ?
            <ErrorComponent refreshHandler={refreshHandler} />
            : <PropertyCollection
            data = {this.state.filtererd_data} 
            onClickFilter = {(value) => {this.filterHandler(value)}}
            />;
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