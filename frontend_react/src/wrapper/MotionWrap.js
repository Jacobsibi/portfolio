//Purpose of MotionWrap is to Animate each section past Header w/ Higher order component HOC()
import React from 'react';
import {motion} from 'framer-motion';

//return higher order component
const MotionWrap = (Component, classNames) => function HOC() {
    return (
      <motion.div
      //y axis to slowly animate IN
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.5}}
          //dynamic -> template string for className
          className={`${classNames} app__flex`}
        
      >
          {/* most important step -> render component inside */}
          <Component />
      </motion.div>
    )
}

export default MotionWrap

