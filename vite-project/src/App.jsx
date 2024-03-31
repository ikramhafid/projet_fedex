import "./App.css";

import Login from "./Component/Login/Login";
import { Route, Routes } from "react-router-dom";
import ShowAllComputers from "./Component/showAll/ShowAllComputers";
import ShowAllImp from "./Component/showAll/ShowAllImp";
import ShowInfo from "./Component/ShowInfo/ShowInfo";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ordinateurs" element={<ShowAllComputers />} />
        <Route path="/imprimantes" element={<ShowAllImp />} />
        <Route path="/:type/:sn" element={<ShowInfo />} />
      </Routes>
    </>
  );
}

export default App;
