import { BrowserRouter,Routes, Route } from "react-router-dom";
import { AdminLayout, Modal } from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './App.scss'
import { Dashboard, Map } from "./pages";


const App = () => {

  return (
    <BrowserRouter>
      <div className="app h-full min-h-full ">
        <ToastContainer autoClose={2000} limit={1} />
        <Routes>
          <Route path="/" element={<AdminLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
          </Route>
        </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App
