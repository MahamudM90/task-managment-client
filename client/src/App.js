import './App.css';
import {RouterProvider} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import router from "./Router/Routes";
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
       <Toaster></Toaster>
    </div>
  );
}

export default App;
