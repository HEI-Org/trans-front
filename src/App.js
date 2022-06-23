import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/js/bootstrap'
import './Component/css/main.css'
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import React from 'react';
import InfoTable from "./Component/InfoTable";

function App() {
    return (
        <>
            <Navbar/>
            <Banner className='banner'/>
            <section >
                <InfoTable />
            </section>
        </>
    );
}

export default App;
