import styles, { layout } from "../styles";

import Button from "./Button";
import { sponsor } from "../assets";

const Sponsor = () => (
  <section id="sponsor" className={`${layout.sectionReverse} `}>
    <div className={layout.sectionImgReverse}>
      <img src={sponsor} alt="sponsor" className="w-[100%] sm:w-[80%] h-[auto] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <div className='h-[2px] bg-tertiary w-[100%] sm:w-[40%] mb-4'/>
      <h2 className={styles.heading2}>
        Be a Partner or Sponsor
      </h2>
      <p className={`${styles.paragraph} max-w-[475px] text-justify text-tertiary mt-5`}>
      Be a sponsor for our next outreach via a donation or Partner with our organisation.
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Sponsor;
