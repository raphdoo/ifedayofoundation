import React, { useEffect } from 'react';
import styles, { layout } from '../styles';
import Button from './Button';
import { features } from '../constants';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, title, content, index, delay, featureCtrl }) => {
  return (
    <motion.div
      initial={{ x: 800, opacity: 0 }}
      animate={featureCtrl}
      transition={{
        duration: 1.2,
        delay: delay,
      }}
      className={`flex flex-row p-2 rounded-[20px] ${
        index !== features.length - 1 ? 'mb-6' : 'mb-0'
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-secondary text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-justify text-secondary text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const featureCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationSequence = async () => {
    await featureCtrl.start({ x: 0, opacity: 1 });
    return await buttonCtrl.start({ scale: [1.5, 1], opacity: 1 });
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);
  return (
    <section ref={ref} id="aboutUs" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="h-[2px] bg-tertiary w-[100%] sm:w-[40%] mb-4" />
        <h2 className={styles.heading2}>Our Story</h2>
        <p className={`${styles.paragraph} max-w-[475px] text-tertiary mt-5`}>
          Ifedayo Foundation was born out of the need to outpour love towards
          vulnerable communities and individuals. The NGO works in line of
          Sustainable Development Goal 3 (SDG 3) - Health and Wellbeing. In this
          light, various medical/ total wellness outreach has been held in over
          20 communities in its 2 years of operating.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={buttonCtrl}
          transition={{
            duration: 1.2,
          }}
        >
          <Button text={'Join us'} styles={`mt-10`} />
        </motion.div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
            delay={0.5 + (index * 2) / 10}
            featureCtrl={featureCtrl}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
