import React from "react";
import "../style/Activities.css";
import portraitThomas2 from "../img/portraitThomas2.jpg";

export function Activities() {
  return (
    <div className="">
      <section className="pt-5 activities-section">
        <h2 className="title text-center">Nos prestations</h2>
        <div className="d-md-flex">
          <div className="mt-md-5">
            <ul>
              <li>Installation et dépannage</li>
              <li>Dimensionnement et conseil</li>
              <li>Travaux neufs et rénovation</li>
            </ul>
            <p>
              Domaines d'activité : froid commercial, climatisation, plomberie
              et électricité. Devis gratuit.
            </p>
            <p>
              Zone d'activité : Var (83), Alpes-maritimes (06) et Est des
              Bouches-du-Rhône (13).
            </p>
          </div>
          <img
            src={portraitThomas2}
            alt="portrait"
            className="col-6 col-md-3 d-flex mx-auto portrait2"
          />
        </div>
      </section>
    </div>
  );
}
