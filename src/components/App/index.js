import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signup } from "../Signup"
import { Login } from "../Login"
import "../../styles/global.css"


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
