import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        textAlign: "center",
        padding: "0 20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to CodVeda Projects</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Advanced React & Framer Motion animations for modern web experiences
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "5px",
          background: "#ff7e5f",
          color: "white",
          cursor: "pointer"
        }}
      >
        Explore Projects
      </button>
    </motion.section>
  );
}

export default HeroSection;
