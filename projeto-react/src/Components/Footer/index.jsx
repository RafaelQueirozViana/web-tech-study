import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Meu Projeto</h2>

      <p>Desenvolvido com React</p>

      <div className="social">
        <a href="#">Instagram</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>

      <p className="copyright">
        © 2026 Meu Projeto. Todos os direitos reservados.
      </p>
    </footer>
  );
}
