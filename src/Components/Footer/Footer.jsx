import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.navLinks}>
        <a href="/" className={style.link}>
          Home
        </a>
        <a href="/blog" className={style.link}>
          Acessar o blog
        </a>
        <a href="/#contato" className={style.link}>
          Realizar contato
        </a>
        <a href="/#saiba-mais" className={style.link}>
          Saiba mais
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
