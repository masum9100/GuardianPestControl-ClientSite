import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../Components/Home'
import Login from '../Components/Login';
import Registration from '../Components/Registration';
import AllService from '../Components/AllService';
import OneServiceDetails from '../Components/DynamicPage/OneServiceDetails';

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/all-service",
                element: <AllService></AllService>
            },
            {
                path: "/all-service/:id",
                element: <OneServiceDetails></OneServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5001/services/${params.id}`)
                
            }
        ]
    }
])

export default route;