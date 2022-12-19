import styles from "./App.module.css";
import logoImage from "./assets/powered.png";

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>Olá</div>
        <div className={styles.rightSide}>Olá 2</div>
      </div>
    </div>
  );
};

export default App;
