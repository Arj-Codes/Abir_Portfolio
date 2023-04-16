import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import  {SectionWrapper}  from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5*index,0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
      options={{
        max:45,
        scale:1,
        speed:450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="title" className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a front-end engineer and modern technology enthusiast, I am
        passionate about creating visually appealing and intuitive user
        interfaces that provide seamless experiences to users. I enjoy keeping
        up with the latest advancements in modern web technologies and
        incorporating them into my work to enhance the user experience. I am
        skilled in using popular front-end frameworks such as React and Angular
        to build responsive and scalable applications. My attention to detail
        and ability to adapt to changing technologies enable me to create
        innovative and engaging web applications that meet the needs of today's
        users. I believe that staying on top of emerging trends and technologies
        is essential to creating modern and effective user interfaces, and I am
        committed to ongoing learning and development in this field.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
