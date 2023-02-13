import styles from "./styles";

import {
  Navbar,
  AboutUs,
  Gallery,
  Hero,
  Founder,
  Stats,
  Footer,
  SocialMedia,
  Sponsor,
  Video
} from './components';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <AboutUs />
        <Video />
        <Sponsor />
        <Gallery />
        <SocialMedia />
        <Founder />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
