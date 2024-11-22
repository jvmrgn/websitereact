import style from "./Banner.module.css";
import img from "../../assets/logo.png";

function Banner() {
  return (
    <div className={style.container}>
      <div className={style.center}>
        <img src={img} className={style.logo}></img>
        <h1 className={style.title}>Titulo do Banner</h1>
        <h2 className={style.subtitle}>Texto do Subtitulo</h2>
      </div>
    </div>
  );
}

export default Banner;
