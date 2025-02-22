import { useEffect} from 'react';
import './profile-typewriter.scss';
import Typed from "typed.js";

function ProfileTypewriter() {

    useEffect(() => {
        const options = {
            strings: ["Front End Developer.", "ReactJS Developer.", "JavaScript Developer.", "UI/UX Developer."],
            typeSpeed: 50,
            backSpeed: 50,
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