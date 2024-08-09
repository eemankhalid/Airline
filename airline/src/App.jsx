import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React, { useEffect } from 'react';

import './css/bootstrap.min.css'; // Importing Bootstrap CSS
import './css/style.css'; // Importing custom CSS
import { Helmet } from 'react-helmet';
import 'animate.css';

import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import BookFlightPage from './Pages/BookFlightPage';
import GroupTravelRequestPage from './Pages/GroupTravelRequestPage'
import CharterFlightRequestPage from './Pages/CharterFlightRequestPage'
import ModifyFlightPage from './Pages/ModifyFlightPage';
import CancelFlightPage from './Pages/CancelFlightPage';
import AddWingPointsPage from './Pages/AddWingPointsPage';
import FlightStatusPage from './components/FlightStatusPage';
import AddExtrasPages from './Pages/AddExtrasPages';
import CheckInPage from './Pages/CheckInPage';
import LoginPage from './Pages/LoginPage';
import JoinPage from './Pages/JoinPage';
import BlogsPage from './Pages/BlogsPage';
import FAQsPage from './Pages/FAQsPage';
import ContactUsPage from './Pages/ContactUsPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/book-a-flight' element={<BookFlightPage />} />
            <Route path='/group-travel-request' element={<GroupTravelRequestPage />} />
            <Route path='/charter-flight-requests' element={<CharterFlightRequestPage />} />
            <Route path='/modify-flight' element={<ModifyFlightPage />} />
            <Route path='/cancel-flight' element={<CancelFlightPage />} />
            <Route path='/add-wing-points-id' element={<AddWingPointsPage />} />
            <Route path='/check-flight-status' element={<FlightStatusPage />} />
            <Route path='/Add Extras' element={<AddExtrasPages />} />
            <Route path='/Check-In' element={<CheckInPage />} />
            <Route path='/wing-points-login' element={<LoginPage />} />
            <Route path='/join-wing-points' element={<JoinPage />} />
            <Route path='/blog' element={<BlogsPage />} />
            <Route path='/faqs' element={<FAQsPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            
        </Route>

    )
);



const App = () => {
    useEffect(() => {
        const scripts = [
            { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js", id: "jquery" },
            { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", id: "bootstrap" },
            { src: "src/lib/easing/easing.min.js", id: "easing" },
            { src: "src/lib/waypoints/waypoints.min.js", id: "waypoints" },
            { src: "src/lib/owlcarousel/owl.carousel.min.js", id: "owlcarousel" },
            { src: "src/lib/lightbox/js/lightbox.min.js", id: "lightbox" },
            { src: "src/js/main.js", id: "main" },
        ];
        scripts.forEach(script => {
            const scriptElement = document.createElement("script");
            scriptElement.src = script.src;
            scriptElement.id = script.id;
            scriptElement.async = true;
            document.body.appendChild(scriptElement);
        });
        return () => {
            // Cleanup scripts when the component unmounts
            scripts.forEach(script => {
                const scriptElement = document.getElementById(script.id);
                if (scriptElement) document.body.removeChild(scriptElement);
            });
        }
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Travela - Tourism Website Template</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="" name="keywords" />
                <meta content="" name="description" />

                {/* Google Web Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap" rel="stylesheet" />

                {/* Icon Font Stylesheet */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* Libraries Stylesheet */}
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />


                {/* Customized Bootstrap Stylesheet */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />

                {/* Template Stylesheet */}
                <link href="css/style.css" rel="stylesheet" />
            </Helmet>
            <>

                <RouterProvider router={router} />

            </>

            {/* Your other components here */}
        </>
    );
};

export default App;
