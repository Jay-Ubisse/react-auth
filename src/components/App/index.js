import { SignUp } from "../SignUp";
import "../../styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
