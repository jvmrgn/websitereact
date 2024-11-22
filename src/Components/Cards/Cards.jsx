import style from "./Cards.module.css";
import CardsMain from "./CardsMain/Cards.jsx";

function Cards() {
  return (
    <div className={style.backGround}>
      <div className={style.container}>
        <h1 className={style.title}>Conheça o Site</h1>
        <h2 className={style.subtitle}>
          Mais informações sobre os principais links do site.
        </h2>
        <div className={style.gridContainer}>
          <div className={style.gridItem}>
            <CardsMain />
          </div>
          <div className={style.gridItem}>
            <CardsMain />
          </div>
          <div className={style.gridItem}>
            <CardsMain />
          </div>
          <div className={style.gridItem}>
            <CardsMain />
          </div>
          <div className={style.gridItem}>
            <CardsMain />
          </div>
          <div className={style.gridItem}>
            <CardsMain />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
