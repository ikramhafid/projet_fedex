import React, { useEffect, useState } from "react";
import Barcode from "react-barcode";
import style from "./ShowAllImp.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const ShowAllImp = () => {
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
        data.imprimantes.map((d, index) => (
          <Link to={`/imprimantes/${d.SN}`}>
            <Card
              barcode={<Barcode key={index} value={d.SN} />}
              model={d.MODELE}
              system={d.TONNER}
            />
          </Link>
        ))}
    </div>
  );
};

export default ShowAllImp;
