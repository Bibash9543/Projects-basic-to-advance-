import styles from "./App.module.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className={styles.logo}>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className={styles.listNav}>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>

        <button className={styles.btnNav}>LogIn</button>
      </nav>
    </>
  );
};
export default Nav;
