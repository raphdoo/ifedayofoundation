import React, {useState, useEffect} from 'react';
import styles, {layout} from '../styles';
import { ceo } from '../assets';

import { quote } from '../assets';

import AnimatedText from "../utils/Animate";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Founder = () => {

  const [isTextAnimationStart, setIsTextAnimationStart] = useState(false);
  const sectionInfoHeadingCtrl = useAnimationControls();
  const sectionAppCtrl = useAnimationControls();
  const imageCtrl = useAnimationControls();
  

  const animationSequence = async () => {
    await sectionInfoHeadingCtrl
      .start({ scale: [1.5, 1], opacity: 1 })
      .then(setIsTextAnimationStart(true));
    await imageCtrl.start({ opacity: 1, scale: 1 });
    return await sectionAppCtrl.start({ opacity: 1, scale: [1.5, 1] });
  };

  const animationProps = {
    initial: { opacity: 0, scale: 0 },
    transition: {
      duration: 1,
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="founder"
      className={`${styles.marginY} flex flex-col justify-start align-center bg-secondary mt-10 mb-10`}
    >
      <div>
        <h2 className={`${styles.heading2} flex-1 text-center mt-10 text-white`}>Our Founder</h2>

      </div>
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionImgReverse} rounded-full mb-10 md:mb-0`}>
          <img
            src={ceo}
            alt="sponsor"
            className="w-[50%] md:w-[80%] h-[auto] rounded-full relative z-[5]"
          />
        </div>

        <div className={`${layout.sectionInfo} px-5`}>
          <div className="h-[2px] bg-tertiary w-[50%] sm:w-[40%] mb-4 hidden md:block" />
          <h2 className={`${styles.heading3} text-white hidden md:block`}>Meet Our Founder</h2>
          <div className='flex flex-col w-full mt-10'>
            <div className='flex flex-row justify-start items-end'>
              <img src={quote} alt="quote" className='md:block  w-[47px] h-[40px] mr-5 mb-5'></img>
              <p className={`${styles.paragraph} max-w-[100%] md:pr-10 text-tertiary`}>
              <AnimatedText isTextAnimationStart={isTextAnimationStart}>
                We hope to rescue thousands of children from the streets and slums of Africa
              </AnimatedText>
              </p>
            </div>
            <p className={`${styles.paragraph} max-w-[100%] md:pr-10 text-tertiary mt-2`}>
            <AnimatedText isTextAnimationStart={isTextAnimationStart}>
              Helping to improve their quality of life and giving them a better future
            </AnimatedText>
            </p>
          </div>
          

          <div className='mt-10'>
            <p className='p__cormorant text-white'>Ifeoluwa Adeosun</p>
            <p className={` ${styles.paragraph} text-white mt-2`}>Program Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
