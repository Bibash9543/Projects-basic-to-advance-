import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.left}>
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p className={styles.para1}>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={styles.btn}>
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className={styles.shopping}>
          <p>Also Available On</p>
          <div className={styles.smallLogo}>
            <img src="/images/amazon.png" alt="Amazon" />
            <img src="/images/flipkart.png" alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="/images/shoe_image.png" alt="Shoe" />
      </div>
    </main>
  );
};
export default Hero;
