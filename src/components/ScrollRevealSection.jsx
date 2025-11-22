import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sections = [
  { title: "Feature 1", description: "High-performance React components" },
  { title: "Feature 2", description: "Smooth animations with Framer Motion" },
  { title: "Feature 3", description: "Responsive design for all devices" },
];

function ScrollRevealSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Why Choose Us</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ delay: index * 0.2 }}
            style={{
              background: "#f0f0f0",
              padding: "30px",
              borderRadius: "10px",
              width: "250px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{sec.title}</h3>
            <p>{sec.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ScrollRevealSection;
