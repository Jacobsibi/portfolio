import React from 'react'


//one prop to know which section it's currently on
const NavigationDots = ( { active }) => (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    //if active === item then background color = "" or empty object
                    style={active === item ? {backgroundColor: '#313BAC'} : {}} 
                />
            ))}
        </div>
);

export default NavigationDots
