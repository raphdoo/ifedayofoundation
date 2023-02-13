import styles from "../styles";

const Donate = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-tertiary p-[2px] cursor-pointer`} onClick={() => window.open('https://gifter.com.ng/event/2244#.YCp-KxoYcmY')}>
    <div className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full`}>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-center font-poppins hover:text-[22px]">
        Donate <br/> Today
      </p>
    </div>
  </div>
);

export default Donate;