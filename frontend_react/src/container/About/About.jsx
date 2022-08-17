import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {AppWrap, MotionWrap } from '../../wrapper';
import {urlFor, client} from '../../client';
import './About.scss';

const About = () => {

    //fetch real dynamic data using react and sanity instead of static data
    //useState field
    const [abouts, setAbouts] = useState([]);

    //only need to run once when component loads
    useEffect(() => {
        const query = '*[_type == "abouts"]';
        //imported client above
        client.fetch(query).then((data) => { 
            setAbouts(data);
        });
    }, []);

    //return react fragment
    return (
        <>
        {/* H2 Slogan - one line to fix spacing*/}
        <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
        
        {/* Dynamically Loop over About Section */}
        <div className="app__profiles">
           {/* each about instant return */}
        {abouts.map((about, index) => (
          <motion.div
          //attributes
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            //framer motion 'tween'
            transition ={{ duration: 0.5, type: 'tween' }}
            //classname for styling
            className="app__profile-item"
            key={about.title + index}
          >
              {/*sanity function UrlFor*/}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            {/* In-line styling  */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

//motionwrap & appwrap syntax
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg" 
);