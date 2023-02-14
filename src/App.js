import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About,AddUser,ViewUser,EditUser, MainHeader} from "./component"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route
            index
            element={<Home />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App