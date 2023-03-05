import { BrowserRouter,Routes, Route } from "react-router-dom";
import { AdminLayout, Modal } from './components'

import './App.scss'


const App = () => {

  return (
    <BrowserRouter>
      <div className="app relative">
        <Routes>
          <Route path="/" element={<AdminLayout/>}>
            <Route index element={<Modal />} />
          </Route>
        </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App
