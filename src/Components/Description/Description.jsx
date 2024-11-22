import style from "./Description.module.css";
import img from "../../assets/download.png";

function Description() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Descrição do Site</h1>
      <div className={style.containerText}>
        <div className={style.img}>
          <img src={img} className={style.imgSrc}></img>
        </div>
        <div className={style.containerInside}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            corrupti suscipit vitae quasi possimus mollitia quibusdam, nesciunt
            ea ut odit harum earum nulla facere obcaecati rerum quis enim fuga
            quam!
          </p>
        </div>
      </div>

      <div className={style.containerText}>
        <div className={style.containerInsideLeft}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            corrupti suscipit vitae quasi possimus mollitia quibusdam, nesciunt
            ea ut odit harum earum nulla facere obcaecati rerum quis enim fuga
            quam!
          </p>
        </div>
        <div className={style.img}>
          <img src={img} className={style.imgSrc}></img>
        </div>
      </div>

      <div className={style.containerText}>
        <div className={style.img}>
          <img src={img} className={style.imgSrc}></img>
        </div>
        <div className={style.containerInside}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            corrupti suscipit vitae quasi possimus mollitia quibusdam, nesciunt
            ea ut odit harum earum nulla facere obcaecati rerum quis enim fuga
            quam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
