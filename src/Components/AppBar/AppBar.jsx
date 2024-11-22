import style from "./AppBar.module.css";
import img from "../../assets/logo.png";
import githubLogo from "../../assets/github-mark.png";
import Drawer from "../Drawer/Drawer.jsx";

function AppBar() {
  return (
    <div className={style.container}>
      <a className={style.appNameAnchor}>
        <div>
          <img src={img} className={style.logo} />
        </div>
        <div>
          <p className={style.projectName}>Assessment</p>
        </div>
      </a>

      <nav className={style.containerAppBar}>
        <div className={style.containerBotoes}>
          <a className={style.botaoApp}>Acessar Blog</a>
          <a className={style.botaoApp}>Realizar Contato</a>
        </div>

        <div className={style.containerLateral}>
          <img src={githubLogo} className={style.githubLogo} />
          <Drawer className={style.hamburguer} />
        </div>
      </nav>
    </div>
  );
}

export default AppBar;
