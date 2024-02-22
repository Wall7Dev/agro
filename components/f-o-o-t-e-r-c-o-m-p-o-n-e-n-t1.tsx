import type { NextPage } from "next";
import Footer from "./footer";
import styles from "./f-o-o-t-e-r-c-o-m-p-o-n-e-n-t1.module.css";

const FOOTERCOMPONENT1: NextPage = () => {
  return (
    <div className={styles.footerComponent}>
      <div className={styles.logoAutoscrollframe}>
        <div className={styles.dsktopBanner2}>
          <img
            className={styles.download2Icon}
            alt=""
            src="/download-2@2x.png"
          />
          <img
            className={styles.download5Icon}
            alt=""
            src="/download-5@2x.png"
          />
          <img className={styles.downloadIcon} alt="" src="/download@2x.png" />
          <img
            className={styles.download5Icon1}
            alt=""
            src="/download-5@2x.png"
          />
          <img
            className={styles.download3Icon}
            alt=""
            src="/download-3@2x.png"
          />
          <img className={styles.captureIcon} alt="" src="/capture@2x.png" />
          <img
            className={styles.mofaColorIcon}
            alt=""
            src="/mofa-color@2x.png"
          />
          <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
          <img
            className={styles.download6Icon}
            alt=""
            src="/download-6@2x.png"
          />
          <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
          <img
            className={styles.download1Icon}
            alt=""
            src="/download-1@2x.png"
          />
        </div>
        <section className={styles.dsktopBanner1}>
          <img
            className={styles.download5Icon2}
            alt=""
            src="/download-5@2x.png"
          />
          <img
            className={styles.download3Icon1}
            alt=""
            src="/download-3@2x.png"
          />
          <img
            className={styles.download5Icon3}
            alt=""
            src="/download-5@2x.png"
          />
          <img className={styles.captureIcon1} alt="" src="/capture@2x.png" />
          <img
            className={styles.mofaColorIcon1}
            alt=""
            src="/mofa-color@2x.png"
          />
          <img className={styles.imagesIcon1} alt="" src="/images@2x.png" />
          <img
            className={styles.download6Icon1}
            alt=""
            src="/download-6@2x.png"
          />
          <img
            className={styles.download1Icon1}
            alt=""
            src="/download-1@2x.png"
          />
          <img className={styles.downloadIcon1} alt="" src="/download@2x.png" />
          <img
            className={styles.download2Icon1}
            alt=""
            src="/download-2@2x.png"
          />
          <img className={styles.images1Icon1} alt="" src="/images-1@2x.png" />
        </section>
      </div>
      <Footer />
      <div className={styles.frameParent}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.nowWereParent}>
          <div className={styles.nowWere}>
            No 24 Maseru Street,East Legon -Accra
          </div>
          <div className={styles.nowWere1}>
            © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOOTERCOMPONENT1;
