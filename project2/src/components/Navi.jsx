import styles from "./Navi.module.css";
import "./ForAll.css";
const Navi = () => {
  return (
    <>
      <nav className="container">
        <div className={styles.logo}>
          <img src="/frame.png" alt="logo" />
        </div>
        <div className={styles.link}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navi;
