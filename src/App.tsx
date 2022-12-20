import { useState } from "react";
import styles from "./App.module.css";
import logoImage from "./assets/powered.png";
import { categories, calculateIMC } from "./helpers/imc";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    } else {
      alert("Informe todos os campos (altura e peso)");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 172 (em cm)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(e.target.valueAsNumber)}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 70 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(e.target.valueAsNumber)}
          />
          <button onClick={handleCalculateButton}>Calcular IMC</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {categories.map((item, key) => (
              <div className={styles.categories} key={key}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
