import React, { useEffect, useState } from "react";
import Barcode from "react-barcode";
import style from "./ShowAll.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const ShowAllComputers = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div className={style.container}>
      {data &&
        data.ordinateurs.map((d, index) => (
          <Link to={`/ordinateurs/${d.Numéro_de_série}`}>
            <Card
              barcode={<Barcode key={index} value={d.Numéro_de_série} />}
              model={d.Modèle}
              system={d.system}
            />
          </Link>
        ))}
      <hr />
    </div>
  );
};

export default ShowAllComputers;
