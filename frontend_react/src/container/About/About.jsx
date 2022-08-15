import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

{/* Array of objects  */}
const abouts = [
    // each object must have title, description,
    { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01},
    { title: 'Backend', description: 'I am a good web developer', imgUrl: images.about02},
    { title: 'Java Development', description: 'I am a good web developer', imgUrl: images.about03},
    { title: 'Full Stack Development', description: 'I am a good web developer', imgUrl: images.about04}

];

const About = () => {
    //return react fragment
    return (
        <>
        {/* H2 Slogan  */}
        <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
        
        {/* Dynamically Loop over About Section */}
        <div className="app__profiles">
           {/* each about instant return */}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            //framer motion 'tween'
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={(about.imgUrl)} alt={about.title} />
            {/* In-line styling  */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About