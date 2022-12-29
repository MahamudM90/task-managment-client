import {createBrowserRouter} from "react-router-dom";
import MyTask from '..////Pages/////Home////MyTask///MyTask'
import CompleteTask from '.././/Pages///////Home///////CompleteTask///////CompleteTask'
import AddTask from '.././////Pages/////////Home///////////////AddTask////////////////AddTask'
import Home from '../Pages////Home///////Home'
import Media from '../../src/////Pages///////Home///////////////////////////////////////////////////////////////////////Media///////////////////////////////////////////Media'
import Main from "../layouts/Main";
import Update from '../Pages///////Home////////////////////////////////////////////////////////////////////////Update'
import Login from '../../src///////Pages////////Login//////////////////////////////////Login///Login'
import Register from '../.././src///////Pages///////////Login//////////////////////////////////////////////////////////////////Register//////////////////////////////////////////////////////////////////Register'
import Details from '../.././src//////////Pages//////////////////////////////////////////Details'
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/mytask',
                element: <MyTask />,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/complete',
                element: <CompleteTask />,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/add',
                element: <AddTask/>,
            },
            {
                path: '/media',
                element: <Media/>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            {
                path: '/complete',
                element: <CompleteTask />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/details',
                element: <PrivateRoute><Details /></PrivateRoute>
            }
           
        ]
    },
    

]);

export default router;