import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters/index";
import Navbar from "./components/Navbar/index";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Characters />} />
      </Routes>
    </>
  );
}
