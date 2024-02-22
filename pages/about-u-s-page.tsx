import type { NextPage } from "next";
import { useEffect } from "react";
import Allnavs2 from "../components/allnavs2";
import Container from "../components/container";
import Leading from "../components/leading";
import LeaderSections from "../components/leader-sections";
import ContainerOurSubsidiar from "../components/container-our-subsidiar";
import FOOTERCOMPONENT2 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t2";
import styles from "./about-u-s-page.module.css";

const AboutUSPage: NextPage = () => {
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
    <main className={styles.aboutusPage} id="6-aboutsUs-pageMain">
      <Allnavs2 />
      <section className={styles.herosec} id="aboutUs_herosection">
        <div
          className={styles.weAreTransformingAfricanAgWrapper}
          data-animate-on-scroll
        >
          <div
            className={styles.weAreTransformingContainer}
            data-animate-on-scroll
          >
            <p className={styles.weAreTransforming}>
              <span className={styles.weAre}>{`We are `}</span>
              <span className={styles.transforming}>Transforming</span>
            </p>
            <p className={styles.weAreTransforming}>
              <span className={styles.transforming}>{` `}</span>
              <span className={styles.africanAgricultureOne}>
                {" "}
                African agriculture, one innovation
              </span>
            </p>
            <p className={styles.atATime}>{` at a time. `}</p>
          </div>
        </div>
      </section>
      <Container />
      <Leading />
      <LeaderSections />
      <ContainerOurSubsidiar />
      <FOOTERCOMPONENT2 />
    </main>
  );
};

export default AboutUSPage;
