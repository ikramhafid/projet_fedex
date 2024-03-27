import { useEffect, useState } from "react";
import "./App.css";
import BarecodeGenerator from "./Component/BarecodeGenerator";
import Barcode from "react-barcode";

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
    <div className="container">
      {data &&
        data.ordinateurs.map((d) => <Barcode value={d.Numéro_de_série} />)}
      <hr />
      <h1>imprimantes</h1>
      {data && data.imprimantes.map((d) => <Barcode value={d.SN} />)}
    </div>

    
  );




}

export default App;
