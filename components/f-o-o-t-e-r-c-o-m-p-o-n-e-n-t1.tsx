import type { NextPage } from "next";
import Footer from "./footer";
import styles from "./f-o-o-t-e-r-c-o-m-p-o-n-e-n-t1.module.css";

const FOOTERCOMPONENT1: NextPage = () => {
  return (
    <div className={styles.footerComponent}>
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
