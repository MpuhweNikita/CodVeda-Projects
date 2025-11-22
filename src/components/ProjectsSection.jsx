import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", description: "Advanced animation with React & Framer Motion" },
  { title: "Project 2", description: "Interactive UI components for CodVeda" },
  { title: "Project 3", description: "Smooth page transitions and scroll effects" },
];

function ProjectsSection() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center", background: "#f5f5f5" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>My Projects</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "250px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
