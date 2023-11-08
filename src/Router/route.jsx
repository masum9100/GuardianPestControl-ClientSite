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
import UpdateService from '../Components/DynamicPage/UpdateService';
import MySchedual from '../Components/DynamicPage/MySchedual';

const NotFound = () => {
    return (
        <div className="text-center flex justify-center my-48">
            <h1 className="bg-red-600 rounded-full text-white inline px-10 py-8 text-3xl ">Error 404: Page not found</h1>
        </div>
    );
};

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
                element: <PrivateRoute><OneServiceDetails></OneServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5001/services/${params.id}`)
            },
            {
                path:"/my-bookings",
                element: <PrivateRoute><BookingPage></BookingPage></PrivateRoute>,
                
            },
            {
                path: "/manage-services",
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path: "/add-services",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/update-service/:id",
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/newservices/${params.id}`)
            },
            {
                path: "/my-schedule",
                element: <PrivateRoute><MySchedual></MySchedual></PrivateRoute>,
                loader: () => fetch('http://localhost:5001/bookings')
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default route;