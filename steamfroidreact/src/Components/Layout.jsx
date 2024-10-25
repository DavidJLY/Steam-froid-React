import React from "react";
import "../style/Layout.css";
import logo from "../img/logo.webp";
import { Navbar } from "react-bootstrap";
import { ModalDevis } from "./ModalDevis";

export function Header() {
  return (
    <header>
      <Navbar variant="light" expand="lg" className="p-2 py-3 headerBackground">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" id="logo" width="250" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="navbar-nav">
          <ModalDevis />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-light text-dark text-center py-4">
      <p>&copy; 2024 | Steam Froid | Tous droits réservés</p>
    </footer>
  );
}
