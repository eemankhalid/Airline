
import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './styles/style.css'; // Importing custom CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar />
        </Router>
    );
};

export default App;
