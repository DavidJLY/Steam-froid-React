import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Devis() {
  const [email, setEmail] = useState("");
  const [emplacement, setEmplacement] = useState("");
  const [marque, setMarque] = useState("");
  const [prixFinal, setPrixFinal] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // Fonction pour calculer le prix final
  const calculatePrice = () => {
    let prixMarque = 0;
    let prixEmplacement = 0;

    // Prix par marque
    if (marque === "daikin") {
      prixMarque = 2000;
    } else if (marque === "mitsubishi") {
      prixMarque = 1800;
    } else if (marque === "electric") {
      prixMarque = 1500;
    }

    // Prix par emplacement
    if (emplacement === "chambre") {
      prixEmplacement = 500;
    } else if (emplacement === "sejour") {
      prixEmplacement = 700;
    }

    // Calcul du prix final
    const prix = prixMarque + prixEmplacement;
    setPrixFinal(prix);
    setShowAlert(true);
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    calculatePrice();
  };

  return (
    <div className="devis-container">
      <h3>Obtenez votre devis</h3>
      <form onSubmit={handleSubmit}>
        <div className="emplacement mb-3">
          <label>Emplacement du bloc de climatisation :</label>
          <br />
          <input
            type="radio"
            name="place"
            value="chambre"
            onChange={(e) => setEmplacement(e.target.value)}
          />
          Chambre
          <br />
          <input
            type="radio"
            name="place"
            value="sejour"
            onChange={(e) => setEmplacement(e.target.value)}
          />
          Séjour
        </div>
        <div className="materiel mb-3">
          <label>Choix de la marque du matériel :</label>
          <br />
          <input
            type="radio"
            name="marque"
            value="daikin"
            onChange={(e) => setMarque(e.target.value)}
          />
          Daikin
          <br />
          <input
            type="radio"
            name="marque"
            value="mitsubishi"
            onChange={(e) => setMarque(e.target.value)}
          />
          Mitsubishi
          <br />
          <input
            type="radio"
            name="marque"
            value="electric"
            onChange={(e) => setMarque(e.target.value)}
          />
          Electric
        </div>
        <div className="email mb-3">
          <label>Votre e-mail :</label>
          <br />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" variant="primary">
          Envoyer le devis
        </Button>
      </form>
      {showAlert && prixFinal !== null && (
        <p className="mt-3">
          Le devis pour une installation de marque <strong>{marque}</strong>{" "}
          dans la <strong>{emplacement}</strong> est de{" "}
          <strong>{prixFinal} €</strong>. Un e-mail sera envoyé à{" "}
          <strong>{email}</strong>.
        </p>
      )}
    </div>
  );
}
