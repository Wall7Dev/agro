import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Transform from "./transform";
import FooterFrames1 from "./footer-frames1";
import FooterFrames from "./footer-frames";
import styles from "./f-o-o-t-e-r-c-o-m-p-o-n-e-n-t.module.css";

const FOOTERCOMPONENT: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onNowWereTextClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onNowWereText2Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onNowWereText3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereText4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
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
      <footer className={styles.footer}>
        <div
          className={styles.transformParent}
          id="footercontent"
          data-animate-on-scroll
        >
          <Transform onFramesWithTextClick={onFrameButtonClick} />
          <FooterFrames1
            line1="/line-1@2x.png"
            onNowWereText3Click={onNowWereTextClick}
            onNowWereText4Click={onNowWereText2Click}
            onDownloadButtonsContainer3Click={onFrameContainer3Click}
            onNowWereText6Click={onNowWereText3Click}
          />
          <FooterFrames
            propTop="-57.69%"
            onArrowIconClick={onArrowIconClick}
            onNowWereText19Click={onNowWereText4Click}
          />
        </div>
      </footer>
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

export default FOOTERCOMPONENT;
