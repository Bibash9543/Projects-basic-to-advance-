import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import "./ForAll.css";
import Buttons from "./Buttons";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  const [name, setName] = useState("Bibash");
  const [mail, setMail] = useState("test@test.com");
  const [text, setText] = useState("Test message");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setMail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <>
      <section className={styles.contactForm}>
        <div className={styles.form}>
          <div className={styles.upper_btn}>
            <Buttons
              text="VIA SUPPORT CHAT"
              icons={<MdMessage fontSize={"24px"} />}
            />
            <Buttons text="VIA CALL" icons={<FaPhone fontSize={"24px"} />} />
          </div>
          <Buttons
            isOutline={true}
            text="VIA EMAIL FORM"
            icons={<HiMail fontSize={"24px"} />}
          />
          <form onSubmit={onSubmit}>
            <div className={styles.text}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.text}>
              <label htmlFor="E-mail">Email</label>
              <input type="mail" name="E-mail" />
            </div>
            <div className={styles.text}>
              <label htmlFor="name">Text</label>
              <textarea name="text" rows={"8"} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Buttons text="SUBMIT" />
            </div>
            {/* <div>
              <p>
                Name: {name}
                <br />
                Email: {mail}
                <br />
                Text: {text}
              </p>
            </div> */}
          </form>
        </div>

        <div className={styles.contactImg}>
          <img src="/service.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
