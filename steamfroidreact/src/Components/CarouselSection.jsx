import Carousel from "react-bootstrap/Carousel";
import clim from "../img/carousel/clim.jpg";
import clim2 from "../img/carousel/clim2.jpg";
import gainable from "../img/carousel/gainable.jpg";
import plomberie from "../img/carousel/plomberie.jpg";
import thomasRappel from "../img/carousel/ThomasRappel.jpg";

export function CarouselSection() {
  return (
    <Carousel className="w-50 mx-auto pt-5 mb-5">
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
          <p>Installation d'une climatisation gainable dans le faux plafond</p>
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
  );
}
