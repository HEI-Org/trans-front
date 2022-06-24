import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/js/bootstrap'
import './Component/css/main.css'
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import React from 'react';
import Car from './Component/Carousel';
import InfoTable from "./Component/InfoTable";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Navbar/>
            <Banner className='banner'/>
            <Car/>
            <section >
                <InfoTable />
            </section>
        </>
    );
}

export default App;
