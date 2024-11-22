import style from "./CardMain.module.css";

function CardsMain() {
  return (
    <a className={style.cardContainer} href="/">
      <div className={style.cardMedia} title="Cartão C"></div>
      <div className={style.cardContent}>
        <div className={style.cardTitle}>
          <span className={style.titleText}>Cartão C</span>
        </div>
        <div className={style.cardDescription}>
          <span className={style.descriptionText}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </a>
  );
}

export default CardsMain;
