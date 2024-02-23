import type { NextPage } from "next";
import styles from "./dsktop-banner.module.css";

const DsktopBanner: NextPage = () => {
  return (
    <section className={styles.dsktopBanner1}>
      <img className={styles.download2Icon} alt="" src="/download-21@2x.png" />
      <img className={styles.download5Icon} alt="" src="/download-52@2x.png" />
      <img className={styles.downloadIcon} alt="" src="/download1@2x.png" />
      <img className={styles.download5Icon1} alt="" src="/download-53@2x.png" />
      <img className={styles.download3Icon} alt="" src="/download-31@2x.png" />
      <img className={styles.captureIcon} alt="" src="/capture1@2x.png" />
      <img className={styles.mofaColorIcon} alt="" src="/mofa-color1@2x.png" />
      <img className={styles.imagesIcon} alt="" src="/images1@2x.png" />
      <img className={styles.download6Icon} alt="" src="/download-61@2x.png" />
      <img className={styles.images1Icon} alt="" src="/images-11@2x.png" />
      <img className={styles.download1Icon} alt="" src="/download-11@2x.png" />
    </section>
  );
};

export default DsktopBanner;
