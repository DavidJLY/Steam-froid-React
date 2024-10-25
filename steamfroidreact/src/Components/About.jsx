import React from "react";
import "../style/About.css";
import portraitThomas from "../img/portraitThomas.jpg";

export function About() {
  return (
    <div>
      <section className="col-11 col-md-9 mx-auto mb-5 ">
        <h2 className="title text-center">A propos de Steam Froid</h2>
        <div className="row mt-3 d-flex justify-content-center align-items-center">
          <img
            src={portraitThomas}
            alt="portrait"
            className="portrait me-md-5"
          />
          <p className="col-12 col-md-6 ms-md-5 mt-3">
            Société indépendante gérée par M. Thomas FERET Je suis issu d'un BTS
            maintenance industrielle. Après 10 ans d'expérience en maintenance
            (électricité, automatisme, mécanique, pneumatique, hydraulique),
            j'ai suivi une formation de 8 mois en froid commercial "monteur
            dépanneur frigoriste" à l'AFPA de Cannes-la-Bocca. Après un an en
            tant qu'employé frigoriste, j'ai créé ma société Steam Froid en
            octobre 2018.
          </p>
        </div>
      </section>
    </div>
  );
}
