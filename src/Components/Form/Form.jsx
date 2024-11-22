import style from "./Form.module.css";

function Form() {
  return (
    <div className={style.container + " flex flex-col items-center"}>
      <div className={style.titleContainer + " mt-4 text-3xl"}>
        <h1 className="text-black">Entre em contato</h1>
      </div>
      <div className={style.formContainer + " w-full max-w-3xl"}>
        <div className={style.gridContainer}>
          <div className={style.nameContainer + " mb-4"}>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              className={
                style.inputField +
                " w-full px-4 py-2 border border-gray-300 rounded"
              }
            />
          </div>
          <div className={style.contactContainer + " grid gap-4 grid-cols-2"}>
            <div className={style.emailContainer + " mb-4 flex-1"}>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={
                  style.inputField +
                  " w-full px-4 py-2 border border-gray-300 rounded"
                }
              />
            </div>
            <div className={style.phoneContainer + " mb-4 flex-1"}>
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Celular
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Celular"
                className={
                  style.inputField +
                  " w-full px-4 py-2 border border-gray-300 rounded"
                }
              />
            </div>
          </div>
          <div className={style.messageContainer + " mb-4"}>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Mensagem
            </label>
            <textarea
              id="message"
              placeholder="Mensagem"
              rows="4"
              className={
                style.textareaField +
                " w-full px-4 py-2 border border-gray-300 rounded"
              }
            ></textarea>
          </div>
        </div>
      </div>
      <div className={style.submitButtonContainer}>
        <button
          className={
            style.submitButton +
            " px-6 py-3 bg-white border border-black rounded cursor-pointer hover:bg-black hover:text-white"
          }
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Form;
