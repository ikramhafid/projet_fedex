import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import style from "./ShowInfo.module.css";
const ShowInfo = () => {
  const { type, sn } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((res) => {
        if (type === "ordinateurs") {
          setData(res.ordinateurs.find((o) => o.Numéro_de_série === sn));
        } else if (type === "imprimantes") {
          setData(res.imprimantes.find((i) => i.SN === sn));
        }
      });
  }, []);
  return (
    <div className={style.container}>
      {data && type === "ordinateurs" && (
        <div className={style.wrapper}>
          <div>
            <h1>SERVICE: {data.SERVICE}</h1>
            <h1>FULL_NAME: {data.FULL_NAME}</h1>
            <h1>Type: {data.Type}</h1>
            <h1>Modèle: {data.Modèle}</h1>
            <h1>Fabricant: {data.Fabricant}</h1>
            <h1>Numéro_de_série: {data.Numéro_de_série}</h1>
            <h1>system: {data.system}</h1>
            <h1>Etat: {data.Etat}</h1>
            <h1>DA: {data.DA}</h1>
          </div>
        </div>
      )}

      {data && type === "imprimantes" && (
        <div className={style.wrapper}>
          <div>
            <h1>SERVICE: {data.SERVICE}</h1>
            <h1>MODELE: {data.MODELE}</h1>
            <h1>NOM_UTILISATEUR: {data.NOM_UTILISATEUR}</h1>
            <h1>MODEL: {data.MODEL}</h1>
            <h1>TONNER: {data.TONNER}</h1>
            <h1>DA: {data.DA}</h1>
            <h1>SN: {data.SN}</h1>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default ShowInfo;
