import React, {useState, useEffect} from 'react';
import styles from "../styles";
import {MdTipsAndUpdates} from 'react-icons/md';
import Donate from './Donate';
import { hero } from '../assets';

import AnimatedText from "../utils/Animate";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
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
    <section ref={ref} id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px]  mb-2">
          <MdTipsAndUpdates className="text-tertiary  h-[25px] w-[25px]"/>
          <p className={`${styles.paragraph} ml-2 text-tertiary text-semibold`}>
            ...Since 2019
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h2
          animate={sectionInfoHeadingCtrl}
          {...animationProps} className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-secondary ss:leading-[100.8px] leading-[75px]">
            Ifedayo
          </motion.h2>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Donate />
          </div>
        </div>

        <motion.h2
          animate={sectionInfoHeadingCtrl}
          {...animationProps} className="font-poppins font-semibold ss:text-[68px] text-[52px] text-secondary ss:leading-[100.8px] leading-[75px] w-full">
          Foundation.
        </motion.h2>
        <p className={`${styles.paragraph} text-tertiary max-w-[470px] mt-5`}>
          <AnimatedText isTextAnimationStart={isTextAnimationStart}>
          Born out of the need to outpour love towards vulnerable communities. We provide support and care for people in need with focus on local communities and families...
          </AnimatedText>
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xl:px-0 sm:px-16 px-6 rounded-full`}>
        <motion.img animate={imageCtrl} {...animationProps} src={hero} alt="image" className="w-[100%] h-[auto] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Donate />
      </div>
    </section>
  );
};

export default Hero;
