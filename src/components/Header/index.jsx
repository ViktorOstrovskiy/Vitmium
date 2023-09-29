import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>VITVIUM</span>
      <span className={styles.sub_title}>Особистий помічник</span>
    </div>
  );
};

export default Header;
