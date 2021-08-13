import { FiCheck, FiMinus, FiPlus } from "react-icons/fi";

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const options = ["React", "Vue", "Angular"];
  const [option, setOption] = useState("");

  console.log(option);

  return (
    <>
      <div className="box">
        <div className="title">
          <img
            src="https://cdn.discordapp.com/attachments/678967152639737864/872949332519829505/download.png"
            alt=""
          />
        </div>

        <div className="form">
          <div>
            <h3>Quais Stickers?</h3>
          </div>
          {options.map((option, i) => (
            <div>
              <div key={i} onClick={() => setOption(option)} className="select">
                <div>
                  <FiCheck className="icon"> </FiCheck>
                </div>
              </div>
              <p className="option">{option}</p>
            </div>
          ))}
          <div>
            <h3>Quantos stickers de cada?</h3>
            <div className="boxCount">
              <button
                disabled={count === 0 ? true : false}
                onClick={() => setCount(count - 1)}
                className="count"
              >
                <FiMinus className="iconCount"></FiMinus>
              </button>
              <div>
                <p className="countNumber iconCount">
                  <input
                    className="inputCount "
                    type="number"
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    value={count}
                  />
                </p>
              </div>
              <button onClick={() => setCount(count + 1)} className="count">
                <FiPlus className="iconCount"></FiPlus>
              </button>
            </div>
          </div>
          <h3>Observações:</h3>
          <textarea type="text" className="observations" />
        </div>
        <div className="footer">
          <button className="enviar">Enviar</button>
        </div>
      </div>
    </>
  );
}

export default App;
