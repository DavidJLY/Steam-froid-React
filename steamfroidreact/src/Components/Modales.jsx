import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import blocMural from "../img/blocMural.jpg";
// import plomberie from "../img/plomberie.jpg";

export function ModalFroid() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex flex-column">
      {/* <img src={blocMural} alt="Climatisation" className="img-thumbnail" /> */}

      {/* Bouton pour ouvrir la modale */}
      <Button
        variant="primary"
        className="mt-3 btn-modal w-50 mx-auto"
        onClick={handleShow}
      >
        Climatisation
      </Button>

      {/* Composant Modale */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="modalFroid"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modalFroid">Climatisation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Froid commercial</li>
            Installation et raccordement groupe froid et exportateur (hors
            montage des panneaux de chambre froide).
            <li>Climatisation</li>
            Installation, entretien et dépannage (split, console, cassette et
            gainable). Marques préférée : Mitsubishi, Daikin et Toshiba.
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export function ModalPlombElec() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex flex-column mt-5 mb-5">
      {/* <img src={plomberie} alt="Plomberie" className="img-thumbnail" /> */}
      {/* Bouton pour ouvrir la modale */}
      <Button
        variant="primary"
        className="w-50 mx-auto btn-modal"
        onClick={handleShow}
      >
        Electricité-Plomberie
      </Button>

      {/* Composant Modale */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg" // Taille large, équivalent à "modal-lg"
        aria-labelledby="ModalPlombElec"
        centered // Pour centrer la modale
      >
        <Modal.Header closeButton>
          <Modal.Title id="ModalPlombElec">Electricité-Plomberie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Electricité-Plomberie</li>
            <ul>
              <li>Travaux neufs/rénovation de salle de bain</li>
              <li>Toilettes, chauffe-eau classique</li>
              <li>installation de chauffe-eau à énergie solaire, etc...</li>
            </ul>
            <li>Électricité</li>
            <ul>
              <li>Dépannage de matériel industriel</li>
              <li>Installation électrique domestique</li>
              <li>Portail électrique, etc...</li>
            </ul>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
