import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const { isOutline, icons, text } = props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icons}
      {text}
    </button>
  );
};

export default Buttons;
