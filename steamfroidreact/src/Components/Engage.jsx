import "../style/Engage.css";

export function Engage() {
  return (
    <section className="col-md-11 mt-5 engage">
      <h3 className="mb-4">Nos engagements</h3>
      <div className="d-md-flex">
        <div class="engagement mt-3 me-4">
          <span>Conseils avisés</span>
          <br />
          Que ce soit pour trouver une solution de dimensionnement ou pour
          trouver l'équipement le plus adapté à votre projet, nous vous
          conseillerons et répondrons avec plaisir à toutes vos questions.
        </div>
        <div class="engagement mt-3 me-4">
          <span>Devis respectés</span>
          <br />
          Notre statut d'indépendant nous permet d'éviter les intermédiaires et
          donc de vous proposer des devis aux tarifs compétitifs sans aucune
          mauvaise surprise.
        </div>
        <div class="engagement mt-3 me-4">
          <span>Horaires flexibles</span>
          <br />
          Nous sommes très flexibles sur nos horaires et jours de travail ce qui
          nous permet de nous adapter à vos besoins et disponibilités.
        </div>
        <div class="engagement mt-3 me-4">
          <span>Compétences techniques</span>
          <br />
          Nos compétences variées nous permet de vous proposer des prestations
          complètes sans besoin de faire appel à d'autres professionnels.
        </div>
      </div>
    </section>
  );
}
