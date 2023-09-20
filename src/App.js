import Header from "./components/Header";
import styles from "./App.module.scss";
import Chart from "./components/Chart";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Chart />
    </div>
  );
}

export default App;
