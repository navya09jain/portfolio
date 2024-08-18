import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      {/* Top Blur Element */}
      <div className={styles.topBlur}></div>

      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>

      {/* Bottom Blur Element */}
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
