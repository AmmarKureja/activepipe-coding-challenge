import React from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import MainPage from './containers/Mainpage/MainPage';

function App() {
  return (
    <div className="App">
    <Layout>
    <MainPage />
    </Layout>     
    </div>
  );
}

export default App;
