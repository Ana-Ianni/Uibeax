import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Cover from "./Cover"
import NavBar from "./NavBar"
import GradientContainer from "./GradientContainer"
import PurpleContainer from "./PurpleContainer"
import {BrowserRouter as Router} from "react-router-dom";

const Index = () =>{

    return(
        <>
        <Router>
            <NavBar/>
            <Cover/>
            <GradientContainer/>
            <PurpleContainer/>
        </Router>
        </>
    )
}

export default Index;