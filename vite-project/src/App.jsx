import { useEffect, useState } from "react";
import "./App.css";
import BarecodeGenerator from "./Component/BarecodeGenerator";
import Barcode from "react-barcode";
import Login from "./Component/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
