import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I create responsive, user-friendly interfaces using JavaScript, CSS, and frameworks like React, ensuring seamless experiences across all devices with a focus on performance and accessibility.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I build scalable and secure server-side applications using Node.js, PHP, and Express, with robust APIs and efficient database management through MongoDB and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Content Writing</h3>
              <p>
              I craft compelling content for both technical and non-technical audiences, from insightful documentation and blogs to engaging creative writing that captures attention.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
              I excel at solving complex problems using C++, leveraging data structures and algorithms (DSA) to design efficient solutions and optimize code for high performance and reliability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
