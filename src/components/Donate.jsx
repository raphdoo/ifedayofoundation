import styles from '../styles';

const Donate = () => (
  <div
    className={`${styles.flexCenter} w-[100px] h-[100px] rounded-full bg-tertiary p-[2px] cursor-pointer hover:bg-hover_bg`}
    onClick={() => window.open('https://eyowo.me/EYW_EIkTTkhzi7G5B8L')}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-tertiary w-[100%] h-[100%] rounded-full hover:bg-hover_bg hover:bg-unique`}
    >
      <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-center font-poppins  text-white ">
        Donate <br /> Today
      </p>
    </div>
  </div>
);

export default Donate;
