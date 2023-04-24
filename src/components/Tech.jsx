import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { backendTechnologies,frontendTechnologies,mobileTechnologies  } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <h2 className={styles.sectionHeadText}>Technologies</h2>
    <p className={styles.sectionSubText}>Web Apps & APIs</p>
</motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {backendTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    
    </div>

    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Frontend</p>
</motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {frontendTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    
    </div>

    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Mobile</p>
</motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {mobileTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
