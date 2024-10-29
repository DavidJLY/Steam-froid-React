import React from "react";
import "../style/About.css";
import portraitThomas from "../img/portraitThomas.jpg";

export function About() {
  return (
    <div>
      <section className="pb-5">
        <h2 className="title text-center">A propos de Steam Froid</h2>
        <div className="mt-3 d-flex flex-column flex-md-row">
          <img
            src={portraitThomas}
            alt="portrait"
            className="portrait col-6 mx-auto col-md-3 me-md-5"
          />
          <p className="col-11 col-md-6 mt-md-5 ms-md-5 text-md-center mt-3 mx-auto about-text">
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
