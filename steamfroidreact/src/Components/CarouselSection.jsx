import React, { useState } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";
import "../style/CarouselSection.css";
import clim from "../img/carousel/clim.jpg";
import clim2 from "../img/carousel/clim2.jpg";
import gainable from "../img/carousel/gainable.jpg";
import plomberie from "../img/carousel/plomberie.jpg";
import thomasRappel from "../img/carousel/ThomasRappel.jpg";

export function CarouselSection() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="d-flex flex-column">
        <Button
          variant="primary"
          onClick={handleOpenModal}
          className="my-3 btn-modal mx-auto w-50"
        >
          Galerie de Réalisations
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Galerie de Réalisations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel className="w-100">
            <Carousel.Item>
              <img
                src={thomasRappel}
                alt="travail sur corde"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Oser prendre de la hauteur</h3>
                <p>Aucune marche n'est trop haute...</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={clim}
                alt="unité intérieure de climatisation"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Unité intérieure de climatisation</h3>
                <p>Installation d'une climatisation monobloc</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={clim2}
                alt="unité intérieure de climatisation"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Unité intérieure de climatisation</h3>
                <p>Installation d'une climatisation monobloc</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={gainable}
                alt="Climatisation encastrée avec gaines dans faux-plafond"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Climatisation gainable</h3>
                <p>
                  Installation d'une climatisation gainable dans le faux plafond
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={plomberie}
                alt="Plomberie nouvellement refaite"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Refection du systeme de plomberie</h3>
                <p>Installation de plomberie avec soudures</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
