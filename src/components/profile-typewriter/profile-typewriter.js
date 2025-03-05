import { useEffect} from 'react';
import './profile-typewriter.scss';
import Typed from "typed.js";

function ProfileTypewriter() {

    useEffect(() => {
        const options = {
            strings: ["A Front End Developer.", "A ReactJS Developer.", "A JavaScript Developer."],
            typeSpeed: 30,
            backSpeed: 30,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|"
        };

        const typed = new Typed(".typewriter-txt", options);

        return () => {
            typed.destroy();
        };
    }, []);
    
  return (
    <div className='typewriter-container'>
        <span className='typewriter-txt'></span>
    </div>
  )
}

export default ProfileTypewriter;