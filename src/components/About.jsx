import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-[#00ffa9] to-[#00ff20] p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#00243c] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
       Finwin Solutions is a leading software and web development company 
       that specializes in creating custom solutions for businesses of all sizes. 
       Our team of experienced developers, designers, and project managers 
       are dedicated to delivering innovative and effective solutions 
       that help our clients achieve their goals.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
       At Finwin Solutions, we believe in providing the highest quality service to our clients.
        We understand that each project is unique and requires a tailored approach. 
        That's why we work closely with our clients to understand their needs and goals,
         and develop customized solutions that meet their specific requirements.
         Our team is made up of highly skilled professionals who have years of experience in
        software and web development. We pride ourselves on staying 
        up-to-date with the latest technologies and industry trends, 
        and we use this knowledge to deliver cutting-edge solutions to our clients.
      </motion.p>

     

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
       We have a proven track record of delivering successful projects for clients across a wide range of industries, 
       including healthcare, finance, e-commerce, and more. 
       Our expertise includes web and mobile app development, software development, UX/UI design, and project management.
       At Finwin Solutions, we are committed to providing exceptional customer service and support. 
       We believe that communication is key to the success of any project, 
       and we work closely with our clients throughout the development process to 
       ensure that their needs are met and their expectations are exceeded.
      </motion.p>

     
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
      Thank you for considering Finwin Solutions for your software and web development needs. 
      We look forward to working with you and helping you achieve your goals.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
