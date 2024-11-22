function SecondBanner() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://fia.com.br/wp-content/uploads/2022/06/criptomoedas-o-que-sao-para-que-servem-como-investir.jpg)",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        width: "100%",
        height: "674px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{marginTop: "1.6em", fontSize: "3rem", color: "white"}}>
          Área interessante para coisas interessantes
        </h1>
        <button
          style={{
            padding: "10px 30px",
            fontSize: "18px",
            border: "2px solid white",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            outline: "none",
            marginTop: "2em",
          }}
        >
          Meu Botão
        </button>
      </div>
    </div>
  );
}

export default SecondBanner;
