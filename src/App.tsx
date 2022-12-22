import { useState } from "react";
import styles from "./App.module.css";
import logoImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { categories, calculateIMC, Category } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Category | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(weightField, heightField));
    } else {
      alert("Informe todos os campos (altura e peso)");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
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
            placeholder="Digite a sua altura. Ex: 1.72 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(e.target.valueAsNumber)}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 70 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(e.target.valueAsNumber)}
            disabled={toShow ? true : false}
          />
          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular IMC
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {categories.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
