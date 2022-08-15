import React from 'react'


//one prop to know which section it's currently on
const NavigationDots = ( { active }) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (

            <a 
                href={`#${item}`} 
                onClick={() => setToggle(false)}
            >
                {item}
            </a>

            ))}
        </div>
    )
}

export default NavigationDots
