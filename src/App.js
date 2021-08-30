import { FiMinus, FiPlus } from "react-icons/fi";

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const options = ["React", "Vue", "Angular"];
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorCount, setIsErrorCount] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      stickers: options.filter((optionn) => e.target[optionn].checked),
      count,
      message,
    };
    if (request.stickers.length === 0) {
      setIsError(true);
      console.log(isError, "teste");
    } else if (count === 0) {
      setIsErrorCount(true);
      console.log(isError, "teste2");
    } else if (request.stickers.length && count) {
      setIsActive(true);
    }
  };

  return (
    <>
      <div className="box">
        <div className="title">
          <div className="primaryTitle">
            <div>Formulario</div>
            <div>para compra de</div>
            <div className="pacote"> Pacote de Stickers</div>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/678967152639737864/872949332519829505/download.png"
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="primaryBox">
            <div>
              <h3>Quais Stickers? </h3>
            </div>
            {options.map((option, i) => (
              <div>
                <input
                  type="checkbox"
                  name={option}
                  className={` checkbox  ${isActive === true && "disabled"} ${
                    isError === true && "error"
                  }`}
                />
                <label className="option">{option}</label>
              </div>
            ))}
            <div>
              <h3>Quantos stickers de cada?</h3>
              <div className="boxCount">
                <button
                  disabled={count === 0 ? true : false}
                  onClick={() => setCount(count - 1)}
                  className={` count ${isActive === true && "disabled"}`}
                  type="button"
                >
                  <FiMinus className="iconCount"></FiMinus>
                </button>
                <div>
                  <input
                    className={` countNumber iconCount inputCount  ${
                      isErrorCount === true && "error"
                    }`}
                    type="number"
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    value={count ? count : 0}
                    min="0"
                  />
                </div>
                <button
                  disabled={count === 100 ? true : false}
                  onClick={() => setCount(count + 1)}
                  className={` count ${isActive === true && "disabled"}`}
                  type="button"
                >
                  <FiPlus className="iconCount"></FiPlus>
                </button>
              </div>
            </div>
            <h3>Observações:</h3>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="observations"
            />
          </div>

          <div className="footer">
            <button
              disabled={isActive === true ? true : false}
              type="submit"
              className={` enviar  ${isActive === true && "disabled"}`}
            >
              Enviar
            </button>
            <p className={` deactivate  ${isActive === true && "active"}`}>
              Formulário enviado com sucesso!
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
