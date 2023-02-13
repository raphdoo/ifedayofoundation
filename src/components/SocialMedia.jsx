import React, {useState} from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';

import styles, {layout} from '../styles';
import { socialMedia } from "../constants";
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 } from '../assets';

const imagegallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]


const SocialMedia = () => {   
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    if(direction === 'left'){
      scrollRef.current.scrollLeft -= 300;
    }else{
      scrollRef.current.scrollLeft += 300;
    }
  }


  return (
    <section id="events" className={`${layout.section} `}>

      <div className={layout.sectionInfo}>
        <div className="h-[2px] bg-tertiary w-[100%] sm:w-[40%] mb-4" />
        <h2 className={styles.heading2}>Follow Us on Social Media</h2>
        <p
          className={`${styles.paragraph} max-w-[475px] text-justify text-tertiary mt-5`}
        >
          Stay updated with our news and events by following our social media pages
        </p>

        <div className="flex flex-row md:mt-6 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[24px] hover:w-[26px] h-[24px] hover:h-[26px]  object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={social.link ? () => window.open(social.link) : console.log("no link provided")}
          />
        ))}
      </div>
        
      </div>

      <div className={`${layout.sectionImg} max-w-[100%] md:max-w-[50%] relative `} onClick={() => window.open(socialMedia[0].link)}>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {
            imagegallery.map((image, index)=>{
              return (
                <div className={`app__gallery-images_card ${styles.flexCenter}`}  key={index+1}>
                  <img src={image} alt="galleryImage" />
                  <BsInstagram className='app__gallery__image-icon'/>
                </div>
              )
            })
          }
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon text-[24px] hover:text-[32px] text-secondary' onClick={()=> scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon text-[24px] hover:text-[32px] text-secondary' onClick={()=> scroll('right')}/>

        </div> 
      </div>
    </section>
  );
}

export default SocialMedia
