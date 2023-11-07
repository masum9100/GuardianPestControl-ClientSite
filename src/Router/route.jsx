import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../Components/Home'
import Login from '../Components/Login';
import Registration from '../Components/Registration';
import AllService from '../Components/AllService';
import OneServiceDetails from '../Components/DynamicPage/OneServiceDetails';
import BookingPage from '../Components/DynamicPage/BookingPage';
import PrivateRoute from '../Components/Hook/PrivateRoute';
import ManageServices from '../Components/DynamicPage/ManageServices';
import AddService from '../Components/DynamicPage/AddService';

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
                element: <PrivateRoute><AllService></AllService></PrivateRoute>
            },
            {
                path: "/all-service/:id",
                element: <PrivateRoute><OneServiceDetails></OneServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5001/services/${params.id}`)
            },
            {
                path:"/my-bookings",
                element: <PrivateRoute><BookingPage></BookingPage></PrivateRoute>,
                // loader: ({params})=> fetch(`http://localhost:5001/bookings?userEmail=${params.userEmail}`)
            },
            {
                path: "/manage-services",
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path: "/add-services",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
])

export default route;