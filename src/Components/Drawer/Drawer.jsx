import React, {useState} from "react";
import styled from "styled-components";
import hamburguer from "../../assets/hamburguerbutton.png";
import style from "../Drawer/Drawer.module.css";

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({isOpen}) => (isOpen ? "0" : "-256px")};
  width: 256px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 999;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 100px;
  z-index: 1000;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
`;

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const renderButtonIcon = () => {
    return <img src={hamburguer} alt="Menu" />;
  };

  return (
    <>
      <Button onClick={toggleDrawer}>{renderButtonIcon()}</Button>
      <Backdrop
        style={{display: isOpen ? "block" : "none"}}
        onClick={toggleDrawer}
      />
      <DrawerContainer isOpen={isOpen}>
        <div className={style.container}>
          <nav className={style.navBackdrop}>
            <ul>
              <li>
                <a href="/">🏠 Home</a>
              </li>
              <li>
                <a href="/blog">🛜 Acessar o blog</a>
              </li>
              <li>
                <a href="/#contato">✉️ Realizar contato</a>
              </li>
              <li>
                <a href="/#saiba-mais">🔍 Saiba mais</a>
              </li>
              <li>
                <a href="/cms">👩‍👦 CMS</a>
              </li>
            </ul>
          </nav>
        </div>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
