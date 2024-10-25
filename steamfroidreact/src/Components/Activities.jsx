import React from "react";
import "../style/Activities.css";
import { ModalFroid } from "./Modales";
import { ModalPlombElec } from "./Modales";
import portraitThomas2 from "../img/portraitThomas2.jpg";

export function Activities() {
  return (
    <div className="col-11 col-md-9 mx-auto d-block mb-5">
      <section className="d-md-flex">
        <div className="col-11 col-md-9">
          <h2 className="title">Nos prestations</h2>
          <ul className="">
            <li>Installation et dépannage</li>
            <li>Dimensionnement et conseil</li>
            <li>Travaux neufs et rénovation</li>
          </ul>
          <p>
            Domaines d'activité : froid commercial, climatisation, plomberie et
            électricité. Devis gratuit.
          </p>
          <p>
            Zone d'activité : Var (83), Alpes-maritimes (06) et Est des
            Bouches-du-Rhône (13).
          </p>
        </div>
        <img
          src={portraitThomas2}
          alt="portrait"
          className="col-11 col-md-3 mx-auto portrait2"
        />
      </section>
      <div className="modales mt-5 d-flex flex-column flex-md-row">
        <ModalFroid />
        <ModalPlombElec />
      </div>
    </div>
  );
}
