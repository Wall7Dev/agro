import type { NextPage } from "next";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import NavDesktop from "../components/nav-desktop";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import { useRouter } from "next/router";
import DsktopBanner1 from "../components/dsktop-banner1";
import DsktopBanner from "../components/dsktop-banner";
import DesktopSection from "../components/desktop-section";
import DesktopStatsSec from "../components/desktop-stats-sec";
import ProductAndServicesSec from "../components/product-and-services-sec";
import ParentCaurosol from "../components/parent-caurosol";
import SearchBar from "../components/search-bar";
import Frameinstagram from "../components/frameinstagram";
import FOOTERCOMPONENT from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t";
import styles from "./index.module.css";

const Homepage: NextPage = () => {
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);
  const router = useRouter();
  const [isDrwawerMenu1Open, setDrwawerMenu1Open] = useState(false);

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onClipPathGroup3Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup12Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup22Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(true);
  }, []);

  const closeDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(false);
  }, []);

  const onContactUsContainer1Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsText2Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onClipPathGroup4Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup13Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup23Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
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

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon11Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon19Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onArrowIconClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameContainer5Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onArrowIcon2Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsText2Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameContainer6Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onArrowIcon3Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsText3Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <>
      <div className={styles.homepage}>
        <header className={styles.allnavs}>
          <NavDesktop />
          <nav className={styles.nav} id="navBar">
            <div className={styles.logorightnavlink}>
              <div className={styles.logoasset}>
                <button className={styles.arrowframe}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group3.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group4@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group5@2x.png"
                      onClick={onClipPathGroup2Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-9391.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-11@2x.png"
                  />
                </button>
                <div className={styles.lgoframe}>
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink}>
                <div className={styles.handburger} onClick={openDrwawerMenu}>
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerInner} />
                </div>
                <button
                  className={styles.contactusContainer}
                  onClick={onContactUsContainerClick}
                >
                  <div
                    className={styles.contactUs}
                    onClick={onContactUsTextClick}
                  >
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav className={styles.nav1} id="navBar">
            <div className={styles.logorightnavlink}>
              <div className={styles.logoasset}>
                <button className={styles.arrowframe1}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group6.svg"
                      onClick={onClipPathGroup3Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group7@2x.png"
                      onClick={onClipPathGroup12Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group8@2x.png"
                      onClick={onClipPathGroup22Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-9392.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-12@2x.png"
                  />
                </button>
                <div className={styles.lgoframe}>
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo2@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink}>
                <div className={styles.handburger} onClick={openDrwawerMenu1}>
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerInner} />
                </div>
                <button
                  className={styles.contactusContainer}
                  onClick={onContactUsContainer1Click}
                >
                  <div
                    className={styles.contactUs}
                    onClick={onContactUsText2Click}
                  >
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav className={styles.nav2} id="navBar">
            <div className={styles.logorightnavlink}>
              <div className={styles.logoasset}>
                <button className={styles.arrowframe2}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group9.svg"
                      onClick={onClipPathGroup4Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group10@2x.png"
                      onClick={onClipPathGroup13Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group11@2x.png"
                      onClick={onClipPathGroup23Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-9393.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-13@2x.png"
                  />
                </button>
                <div className={styles.lgoframe}>
                  <img
                    className={styles.logoIcon2}
                    id="logo"
                    alt=""
                    src="/logo3@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.rightnavlinkIcon}
                alt=""
                src="/rightnavlink@2x.png"
              />
            </div>
          </nav>
        </header>
        <section className={styles.allhero}>
          <section className={styles.desktop}>
            <b
              className={styles.digitalization}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.frameParent} data-animate-on-scroll>
              <div className={styles.platformWrapper}>
                <b className={styles.platform}>Platform</b>
              </div>
              <b className={styles.forTheFuture}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlWrapper}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAnContainer}>
                <p
                  className={styles.weProvideAn}
                >{`We provide an ecosystem for all the players in the agricultural supply chain to `}</p>
                <p
                  className={styles.weProvideAn}
                >{`function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className={styles.weProvideAn}>
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div className={styles.pageNumbers} data-animate-on-scroll>
              <div className={styles.paginations}>
                <Box className={styles.wrapper} sx={{ width: 50.9 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsItem}
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className={styles.pageNumbersInner}>
                <div className={styles.parent}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer}>
              <img
                className={styles.scrooldowncontainerChild}
                alt=""
                src="/frame-7.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section}>
            <b
              className={styles.digitalization1}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.frameGroup} data-animate-on-scroll>
              <div className={styles.platformContainer}>
                <b className={styles.platform1}>Platform</b>
              </div>
              <b className={styles.forTheFuture1}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlContainer}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAnContainer1}>
                <p
                  className={styles.weProvideAn}
                >{`We provide an ecosystem for all the players in the agricultural supply chain to `}</p>
                <p
                  className={styles.weProvideAn}
                >{`function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className={styles.weProvideAn}>
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div className={styles.pageNumbers1} data-animate-on-scroll>
              <div className={styles.paginations1}>
                <Box className={styles.wrapper} sx={{ width: 35.2 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsInner}
                  alt=""
                  src="/group-1881.svg"
                />
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-1891.svg"
                />
              </div>
              <div className={styles.pageNumbersChild}>
                <div className={styles.group}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer1}>
              <img
                className={styles.scrooldowncontainerItem}
                alt=""
                src="/frame-71.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section1}>
            <b
              className={styles.digitalization2}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.frameContainer} data-animate-on-scroll>
              <div className={styles.platformFrame}>
                <b className={styles.platform2}>Platform</b>
              </div>
              <b className={styles.forTheFuture2}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlFrame}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAnContainer2}>
                <p
                  className={styles.weProvideAn}
                >{`We provide an ecosystem for all the players in the agricultural supply chain to function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className={styles.weProvideAn}>
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div className={styles.pageNumbers2} data-animate-on-scroll>
              <div className={styles.paginations2}>
                <Box className={styles.wrapper} sx={{ width: 28.7 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild1}
                  alt=""
                  src="/group-1882.svg"
                />
                <img
                  className={styles.paginationsChild2}
                  alt=""
                  src="/group-1892.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameDiv}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer2}>
              <img
                className={styles.scrooldowncontainerInner}
                alt=""
                src="/frame-72.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section2}>
            <b
              className={styles.digitalization3}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.frameParent1} data-animate-on-scroll>
              <div className={styles.platformWrapper1}>
                <b className={styles.platform3}>Platform</b>
              </div>
              <b className={styles.forTheFuture3}>{`for the  future `}</b>
            </div>
            <div
              className={styles.agrospectrumLimitedIsALeadWrapper}
              data-animate-on-scroll
            >
              <div
                className={styles.agrospectrumLimitedIs}
              >{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </div>
            <div className={styles.pageNumbers3} data-animate-on-scroll>
              <div className={styles.paginations3}>
                <Box className={styles.wrapper} sx={{ width: 12.6 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild3}
                  alt=""
                  src="/group-1883.svg"
                />
                <img
                  className={styles.paginationsChild4}
                  alt=""
                  src="/group-1893.svg"
                />
              </div>
              <div className={styles.pageNumbersInner1}>
                <div className={styles.parent1}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer3}>
              <img
                className={styles.frameIcon}
                alt=""
                src="/frame-73.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section3}>
            <b className={styles.digitalization4}>{`Digitalization `}</b>
            <div className={styles.frameParent2} data-animate-on-scroll>
              <div className={styles.platformWrapper2}>
                <b className={styles.platform4}>Platform</b>
              </div>
              <b className={styles.forTheFuture4}>{`for the  future `}</b>
            </div>
            <section
              className={styles.agrospectrumLimitedIsALeadContainer}
              data-animate-on-scroll
            >
              <div
                className={styles.agrospectrumLimitedIs1}
              >{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </section>
            <div className={styles.pageNumbers4}>
              <div className={styles.paginations4}>
                <Box className={styles.wrapper} sx={{ width: 10.6 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild5}
                  alt=""
                  src="/group-1884.svg"
                />
                <img
                  className={styles.paginationsChild6}
                  alt=""
                  src="/group-1894.svg"
                />
              </div>
              <div className={styles.pageNumbersInner2}>
                <div className={styles.parent2}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer4}>
              <img
                className={styles.scrooldowncontainerChild1}
                alt=""
                src="/frame-7@2x.png"
                data-animate-on-scroll
              />
            </div>
          </section>
        </section>
        <img className={styles.homepageChild} alt="" src="/ellipse-5.svg" />
        <div className={styles.allaotuscrollsectioln}>
          <div className={styles.logoAutoscrollframe}>
            <DsktopBanner1 />
            <DsktopBanner />
          </div>
        </div>
        <section className={styles.whyWorkUs}>
          <DesktopSection />
        </section>
        <section className={styles.statsSection}>
          <DesktopStatsSec />
          <div className={styles.statsSec3}>
            <div className={styles.instanceParent} data-animate-on-scroll>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m1}>1. 7 M+</div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered1}>
                    Farmers Registered
                  </div>
                </div>
                <div className={styles.instanceChild} />
                <div
                  className={styles.registratedAndKyc}
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m1}>60+</div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered1}>
                    Districts Covered
                  </div>
                </div>
                <div className={styles.instanceChild} />
                <div
                  className={styles.registratedAndKycContainer}
                  data-animate-on-scroll
                >
                  <p className={styles.weProvideAn}>
                    With our technology, we have successfully
                  </p>
                  <p className={styles.weProvideAn}>
                    run several partner programs across
                  </p>
                  <p className={styles.weProvideAn}>sixty districts.</p>
                </div>
              </div>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m1}>20M+</div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div
                    className={styles.farmersRegistered1}
                  >{`Farming Acres `}</div>
                </div>
                <div className={styles.instanceChild} />
                <div
                  className={styles.registratedAndKycContainer}
                  data-animate-on-scroll
                >
                  <p
                    className={styles.weProvideAn}
                  >{`We have documented millions of farming `}</p>
                  <p className={styles.weProvideAn}>
                    lands, detailing their per seasonal
                  </p>
                  <p className={styles.weProvideAn}>cultivation and yields.</p>
                </div>
              </div>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m1}>5 Acres</div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered1}>
                    Average farm size
                  </div>
                </div>
                <div className={styles.instanceChild} />
                <div
                  className={styles.registratedAndKyc}
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statsSec31}>
            <div className={styles.instanceGroup} data-animate-on-scroll>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>1. 7 M+</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered9}>
                    Farmers Registered
                  </div>
                </div>
                <div className={styles.instanceChild1} />
                <div
                  className={styles.registratedAndKyc2}
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>60+</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered9}>
                    Districts Covered
                  </div>
                </div>
                <div className={styles.instanceChild1} />
                <div
                  className={styles.registratedAndKycContainer2}
                  data-animate-on-scroll
                >
                  <p className={styles.weProvideAn}>
                    With our technology, we have successfully
                  </p>
                  <p className={styles.weProvideAn}>
                    run several partner programs across
                  </p>
                  <p className={styles.weProvideAn}>sixty districts.</p>
                </div>
              </div>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>20M+</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div
                    className={styles.farmersRegistered9}
                  >{`Farming Acres `}</div>
                </div>
                <div className={styles.instanceChild1} />
                <div
                  className={styles.registratedAndKycContainer2}
                  data-animate-on-scroll
                >
                  <p
                    className={styles.weProvideAn}
                  >{`We have documented millions of farming `}</p>
                  <p className={styles.weProvideAn}>
                    lands, detailing their per seasonal
                  </p>
                  <p className={styles.weProvideAn}>cultivation and yields.</p>
                </div>
              </div>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>5 Acres</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered9}>
                    Average farm size
                  </div>
                </div>
                <div className={styles.instanceChild1} />
                <div
                  className={styles.registratedAndKyc2}
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.frameParent3} data-animate-on-scroll>
              <div className={styles.frameWrapper}>
                <div className={styles.instanceContainer}>
                  <div className={styles.mParent6}>
                    <div className={styles.m16} data-animate-on-scroll>
                      <div className={styles.m17}>20M+</div>
                    </div>
                    <div
                      className={styles.farmersRegistered16}
                      data-animate-on-scroll
                    >
                      <div
                        className={styles.farmersRegistered9}
                      >{`Farming Acres `}</div>
                    </div>
                    <div className={styles.instanceChild5} />
                    <div
                      className={styles.registratedAndKycContainer4}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We have documented millions of farming `}</p>
                      <p className={styles.weProvideAn}>
                        lands, detailing their per seasonal
                      </p>
                      <p className={styles.weProvideAn}>
                        cultivation and yields.
                      </p>
                    </div>
                  </div>
                  <div className={styles.mParent6}>
                    <div className={styles.m16} data-animate-on-scroll>
                      <div className={styles.m17}>5 Acres</div>
                    </div>
                    <div
                      className={styles.farmersRegistered16}
                      data-animate-on-scroll
                    >
                      <div className={styles.farmersRegistered9}>
                        Average farm size
                      </div>
                    </div>
                    <div className={styles.instanceChild5} />
                    <div
                      className={styles.registratedAndKyc4}
                      data-animate-on-scroll
                    >
                      We collected data on average farm size per farmer,
                      including thousands of livestock farmers covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.instanceParent1}>
                <div className={styles.mParent6}>
                  <div className={styles.m16} data-animate-on-scroll>
                    <div className={styles.m17}>1. 7 M+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered16}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered9}>
                      Farmers Registered
                    </div>
                  </div>
                  <div className={styles.instanceChild5} />
                  <div
                    className={styles.registratedAndKyc4}
                    data-animate-on-scroll
                  >
                    registrated and KYC for regular farmers, commercial farmers
                    outgrower farmer across the northern region
                  </div>
                </div>
                <div className={styles.mParent6}>
                  <div className={styles.m16} data-animate-on-scroll>
                    <div className={styles.m17}>60+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered16}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered9}>
                      Districts Covered
                    </div>
                  </div>
                  <div className={styles.instanceChild5} />
                  <div
                    className={styles.registratedAndKycContainer4}
                    data-animate-on-scroll
                  >
                    <p className={styles.weProvideAn}>
                      With our technology, we have successfully
                    </p>
                    <p className={styles.weProvideAn}>
                      run several partner programs across
                    </p>
                    <p className={styles.weProvideAn}>sixty districts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div6}>
            <div className={styles.frameParent4} data-animate-on-scroll>
              <div className={styles.frameWrapper}>
                <div className={styles.instanceParent2}>
                  <div className={styles.mParent10}>
                    <div className={styles.m24} data-animate-on-scroll>
                      <div className={styles.m25}>20M+</div>
                    </div>
                    <div
                      className={styles.farmersRegistered24}
                      data-animate-on-scroll
                    >
                      <div
                        className={styles.farmersRegistered9}
                      >{`Farming Acres `}</div>
                    </div>
                    <div className={styles.instanceChild9} />
                    <div
                      className={styles.registratedAndKycContainer6}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We have documented millions of farming `}</p>
                      <p className={styles.weProvideAn}>
                        lands, detailing their per seasonal
                      </p>
                      <p className={styles.weProvideAn}>
                        cultivation and yields.
                      </p>
                    </div>
                  </div>
                  <div className={styles.mParent10}>
                    <div className={styles.m24} data-animate-on-scroll>
                      <div className={styles.m25}>5 Acres</div>
                    </div>
                    <div
                      className={styles.farmersRegistered24}
                      data-animate-on-scroll
                    >
                      <div className={styles.farmersRegistered9}>
                        Average farm size
                      </div>
                    </div>
                    <div className={styles.instanceChild9} />
                    <div
                      className={styles.registratedAndKyc6}
                      data-animate-on-scroll
                    >
                      We collected data on average farm size per farmer,
                      including thousands of livestock farmers covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.instanceParent3}>
                <div className={styles.mParent10}>
                  <div className={styles.m24} data-animate-on-scroll>
                    <div className={styles.m25}>1. 7 M+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered24}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered9}>
                      Farmers Registered
                    </div>
                  </div>
                  <div className={styles.instanceChild9} />
                  <div
                    className={styles.registratedAndKyc6}
                    data-animate-on-scroll
                  >
                    registrated and KYC for regular farmers, commercial farmers
                    outgrower farmer across the northern region
                  </div>
                </div>
                <div className={styles.mParent10}>
                  <div className={styles.m24} data-animate-on-scroll>
                    <div className={styles.m25}>60+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered24}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered9}>
                      Districts Covered
                    </div>
                  </div>
                  <div className={styles.instanceChild9} />
                  <div
                    className={styles.registratedAndKycContainer6}
                    data-animate-on-scroll
                  >
                    <p className={styles.weProvideAn}>
                      With our technology, we have successfully
                    </p>
                    <p className={styles.weProvideAn}>
                      run several partner programs across
                    </p>
                    <p className={styles.weProvideAn}>sixty districts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.whatweofferSection}>
          <ProductAndServicesSec />
          <div className={styles.productAndServicesSec4}>
            <b className={styles.whatWeOffer} data-animate-on-scroll>
              What we Offer
            </b>
            <div
              className={styles.productAndServicesSec4Inner}
              data-animate-on-scroll
            >
              <div className={styles.inTheHeartOfGhanasVibranWrapper}>
                <div className={styles.inTheHeartContainer}>
                  <p
                    className={styles.weProvideAn}
                  >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                  <p className={styles.weProvideAn}>
                    beacon of innovation poised to transform the industry
                    through the power of digitalization.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-94@2x.png"
                data-animate-on-scroll
              />
              <div className={styles.frameParent6}>
                <div
                  className={styles.inputCreditManagementSystemParent}
                  data-animate-on-scroll
                >
                  <b className={styles.inputCreditManagementSystem}>
                    input-Credit Management Systems
                  </b>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.inTheHeartOfGhanasVibranWrapper}>
                  <div className={styles.theInputCredit} data-animate-on-scroll>
                    the input credit management system allows VCEs and
                    Aggregators to give farmers access to input on credit and
                    pay back with produce
                  </div>
                </div>
                <div
                  className={styles.thisProductDigitalisesTheIWrapper}
                  data-animate-on-scroll
                >
                  <div className={styles.thisProductDigitalises}>
                    This product digitalises the input-credit process while
                    promoting efficiency and productivity on the part of the
                    farmer. This solution ensures easy documentation and
                    management of inputs given at the beginning of the farming
                    season; gives insights to expected returns, provides farmers
                    with agronomic advice, allows agents to monitor farmers
                    progress during the season and adherence to timely schedules
                    of farm practices. It also documents and manages the
                    recovery process by the VCEs and aggregators.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectArrowParent}>
              <div className={styles.projectArrow}>
                <img
                  className={styles.paginationsIcon}
                  alt=""
                  src="/paginations1.svg"
                />
              </div>
              <div className={styles.navigation}>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.inputCreditManagementSystemGroup}>
              <div className={styles.inputCreditManagementSystem1}>
                input-Credit Management Systems
              </div>
              <div className={styles.thisProductAlsoContainer}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec41}>
            <div className={styles.whatWeOffer1}>
              <b className={styles.whatWeOffer2} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.theInputCredit1} data-animate-on-scroll>
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div className={styles.whatWeOfferInner} data-animate-on-scroll>
                <div className={styles.inTheHeartOfGhanasVibranContainer}>
                  <div className={styles.inTheHeartContainer}>
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={styles.whatWeOfferChild}
                alt=""
                src="/frame-94@2x.png"
                data-animate-on-scroll
              />
              <div
                className={styles.thisProductDigitalisesTheIContainer}
                data-animate-on-scroll
              >
                <div className={styles.thisProductDigitalises1}>
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className={styles.inputCreditManagementSystemContainer}
                data-animate-on-scroll
              >
                <b className={styles.inputCreditManagementSystem2}>
                  input-Credit Management Systems
                </b>
                <div className={styles.groupChild} />
              </div>
              <div className={styles.navigation1} data-animate-on-scroll>
                <div className={styles.div7}></div>
                <div className={styles.divider1} />
                <div className={styles.div8}></div>
              </div>
              <img
                className={styles.projectArrowIcon}
                alt=""
                src="/project-arrow.svg"
                data-animate-on-scroll
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent1}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem3}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer1}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec42}>
            <div className={styles.whatWeOffer3}>
              <b className={styles.whatWeOffer4} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.frameParent7}>
                <div className={styles.inTheHeartOfGhanasVibranFrame}>
                  <div
                    className={styles.inTheHeartContainer2}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/frame-94@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.frameParent9} data-animate-on-scroll>
                    <div className={styles.inputCreditManagementSystemParent2}>
                      <b className={styles.inputCreditManagementSystem4}>
                        input-Credit Management Systems
                      </b>
                      <div className={styles.frameChild1} />
                    </div>
                    <div className={styles.theInputCredit2}>
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className={styles.thisProductDigitalisesTheIFrame}>
                      <div className={styles.thisProductDigitalises}>
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationParent}>
              <div className={styles.navigation2}>
                <div className={styles.div9}></div>
                <div className={styles.divider2} />
                <div className={styles.div10}></div>
              </div>
              <img
                className={styles.projectArrowIcon1}
                alt=""
                src="/project-arrow1.svg"
              />
            </div>
          </div>
          <div className={styles.productAndServicesSec43}>
            <div className={styles.whatWeOffer5}>
              <b className={styles.whatWeOffer6} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.frameParent10}>
                <div className={styles.inTheHeartOfGhanasVibranWrapper1}>
                  <div
                    className={styles.inTheHeartContainer3}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent11}>
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/frame-94@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.frameParent12} data-animate-on-scroll>
                    <div className={styles.inputCreditManagementSystemParent3}>
                      <b className={styles.inputCreditManagementSystem5}>
                        input-Credit Management Systems
                      </b>
                      <div className={styles.frameChild3} />
                    </div>
                    <div className={styles.theInputCredit2}>
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className={styles.thisProductDigitalisesTheIWrapper1}>
                      <div className={styles.thisProductDigitalises}>
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationGroup}>
              <div className={styles.navigation3}>
                <div className={styles.div11}></div>
                <div className={styles.divider3} />
                <div className={styles.div12}></div>
              </div>
              <img
                className={styles.projectArrowIcon2}
                alt=""
                src="/project-arrow2.svg"
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent4}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem6}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer2}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ParentCaurosol />
        <div className={styles.parentCaurosol1200}>
          <section className={styles.section4}>
            <div
              className={styles.inner}
              onClick={onFrameContainerClick}
              data-animate-on-scroll
            >
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionWrapper}>
                  <h1 className={styles.mission}>Mission</h1>
                </div>
                <img
                  className={styles.leftGroupIcon1}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.toExtendDigitalization}>
              To extend digitalization and innovation to agriculture through
              diverse technological channels
            </div>
          </section>
          <section className={styles.section5} data-scroll-to="section5">
            <div className={styles.child} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionWrapper}>
                  <h1 className={styles.mission}>Integrity</h1>
                </div>
                <img
                  className={styles.leftGroupIcon3}
                  alt=""
                  src="/left-group@2x.png"
                  onClick={onLeftGroupIcon3Click}
                />
              </div>
            </div>
            <div className={styles.ourCredibilityAs}>
              Our credibility as a brand is evident in the authenticity of our
              products but and also in the numerous partnerships with the
              players.
            </div>
          </section>
          <section className={styles.section6} data-scroll-to="section4">
            <div className={styles.inner1} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.logorightnavlink}>
                  <h1 className={styles.resourcefulness}>Resourcefulness</h1>
                </div>
                <img
                  className={styles.leftGroupIcon1}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.ourCredibilityAs}>
              Our credibility as a brand is evident in the authenticity of our
              products but and also in the numerous partnerships with the
              players.
            </div>
          </section>
          <section className={styles.section7}>
            <div className={styles.child} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionWrapper}>
                  <h1 className={styles.mission}>Innovation</h1>
                </div>
                <img
                  className={styles.leftGroupIcon1}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.weOfferAContainer}>
              <p className={styles.weProvideAn}>
                We offer a huge arsenal of logistics and expertise to
              </p>
              <p className={styles.weProvideAn}>
                strategize and tackle most agro challenges
              </p>
            </div>
          </section>
        </div>
        <div className={styles.parentCaurosol12001}>
          <section className={styles.section8}>
            <div
              className={styles.inner3}
              onClick={onFrameContainer2Click}
              data-animate-on-scroll
            >
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon8}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionContainer}>
                  <h1 className={styles.mission}>Mission</h1>
                </div>
                <img
                  className={styles.leftGroupIcon9}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.toExtendDigitalization1}>
              To extend digitalization and innovation to agriculture through
              diverse technological channels
            </div>
          </section>
          <section className={styles.section9} data-scroll-to="section3">
            <div className={styles.inner4} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon8}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionContainer}>
                  <h1 className={styles.mission}>Integrity</h1>
                </div>
                <img
                  className={styles.leftGroupIcon11}
                  alt=""
                  src="/left-group@2x.png"
                  onClick={onLeftGroupIcon11Click}
                />
              </div>
            </div>
            <div className={styles.ourCredibilityAs2}>
              Our credibility as a brand is evident in the authenticity of our
              products but and also in the numerous partnerships with the
              players.
            </div>
          </section>
          <section className={styles.section10} data-scroll-to="section2">
            <div className={styles.inner1} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon8}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.logorightnavlink}>
                  <h1 className={styles.resourcefulness1}>Resourcefulness</h1>
                </div>
                <img
                  className={styles.leftGroupIcon9}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.ourCredibilityAs2}>
              Our credibility as a brand is evident in the authenticity of our
              products but and also in the numerous partnerships with the
              players.
            </div>
          </section>
          <section className={styles.section11}>
            <div className={styles.inner4} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon8}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionContainer}>
                  <h1 className={styles.mission}>Innovation</h1>
                </div>
                <img
                  className={styles.leftGroupIcon9}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.weOfferAContainer1}>
              <p className={styles.weProvideAn}>
                We offer a huge arsenal of logistics and expertise to
              </p>
              <p className={styles.weProvideAn}>
                strategize and tackle most agro challenges
              </p>
            </div>
          </section>
        </div>
        <div className={styles.parentCaurosol12002}>
          <section className={styles.section12}>
            <div
              className={styles.inner7}
              onClick={onFrameContainer3Click}
              data-animate-on-scroll
            >
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon16}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionFrame}>
                  <h1 className={styles.mission}>Mission</h1>
                </div>
                <img
                  className={styles.leftGroupIcon17}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.toExtendDigitalization2}>
              To extend digitalization and innovation to agriculture through
              diverse technological channels
            </div>
          </section>
          <section className={styles.section13} data-scroll-to="section1">
            <div className={styles.inner8} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon16}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionFrame}>
                  <h1 className={styles.mission}>Integrity</h1>
                </div>
                <img
                  className={styles.leftGroupIcon19}
                  alt=""
                  src="/left-group@2x.png"
                  onClick={onLeftGroupIcon19Click}
                />
              </div>
            </div>
            <div className={styles.ourCredibilityAs4}>
              Our credibility as a brand is evident in the authenticity of our
              products but and also in the numerous partnerships with the
              players.
            </div>
          </section>
          <section className={styles.section14} data-scroll-to="section">
            <div className={styles.inner1} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon16}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.logorightnavlink}>
                  <h1 className={styles.resourcefulness2}>Resourcefulness</h1>
                </div>
                <img
                  className={styles.leftGroupIcon17}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.ourCredibilityAs4}>
              Our credibility as a brand is evident in the authenticity of our
              products but and also in the numerous partnerships with the
              players.
            </div>
          </section>
          <section className={styles.section15}>
            <div className={styles.inner8} data-animate-on-scroll>
              <div className={styles.logorightnavlink}>
                <img
                  className={styles.leftGroupIcon16}
                  alt=""
                  src="/left-group@2x.png"
                />
                <div className={styles.missionFrame}>
                  <h1 className={styles.mission}>Innovation</h1>
                </div>
                <img
                  className={styles.leftGroupIcon17}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.weOfferAContainer2}>
              <p className={styles.weProvideAn}>
                We offer a huge arsenal of logistics and expertise to
              </p>
              <p className={styles.weProvideAn}>
                strategize and tackle most agro challenges
              </p>
            </div>
          </section>
        </div>
        <section className={styles.section6partners}>
          <div className={styles.ourprojectframeParent}>
            <SearchBar />
            <Frameinstagram />
          </div>
        </section>
        <div className={styles.outTeam}>
          <div className={styles.dktpTeamFaqCta}>
            <img
              className={styles.dktpTeamFaqCtaChild}
              alt=""
              src="/vector-21@2x.png"
            />
            <img
              className={styles.dktpTeamFaqCtaItem}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.outteam}>
              <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
            </div>
            <div className={styles.outteam1}>
              <div className={styles.ourTeam1}>
                Our Team - The big brains behind Agrospectrum
              </div>
            </div>
            <img
              className={styles.dktpTeamFaqCtaInner}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.cardgropupo} data-animate-on-scroll>
              <div className={styles.xorse}>
                <div className={styles.xoseAhlijaTeam}>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div className={styles.block1Parent}>
                    <div className={styles.block1}>
                      <div className={styles.rectangle} />
                    </div>
                    <div className={styles.xoseAhlijahSweParent}>
                      <div className={styles.xoseAhlijahSwe}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro}>
                <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
                <div className={styles.block11}>
                  <div className={styles.rectangle1} />
                </div>
                <div className={styles.castroAntwiDansoParent}>
                  <div className={styles.castroAntwiDanso}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam}>
                <img className={styles.baseIcon2} alt="" src="/base@2x.png" />
                <div className={styles.block1Group}>
                  <div className={styles.block12}>
                    <div className={styles.rectangle2} />
                  </div>
                  <div className={styles.otisAApalooParent}>
                    <div className={styles.otisAApaloo}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.gradientmsgWrapper}>
                <div className={styles.gradientmsg}>
                  <img
                    className={styles.gradientmsgChild}
                    alt=""
                    src="/group-206@2x.png"
                  />
                  <div className={styles.weSupportAgribusinessIndustParent}>
                    <b
                      className={styles.weSupportAgribusinessContainer}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                      <p className={styles.weProvideAn}>for a Better Result.</p>
                    </b>
                    <div
                      className={styles.vectorParent}
                      onClick={onFrameContainer4Click}
                    >
                      <img
                        className={styles.arrowIcon}
                        alt=""
                        src="/arrow-9.svg"
                        onClick={onArrowIconClick}
                      />
                      <div
                        className={styles.viewProducts}
                        onClick={onViewProduCtsTextClick}
                      >
                        view produCts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectArrow}>
                <div className={styles.base} />
              </div>
            </div>
            <div className={styles.faqframe}>
              <div className={styles.faq}>
                <div className={styles.frequently}>
                  <b className={styles.faq1}>FAQ</b>
                  <b className={styles.frequentlyAskedQueContainer}>
                    <p className={styles.weProvideAn}>{`Frequently `}</p>
                    <p className={styles.weProvideAn}>Asked Questions</p>
                  </b>
                  <div className={styles.allowsOrganizations}>
                    <p
                      className={styles.weProvideAn}
                    >{`Browse through our mostly asked questions and `}</p>
                    <p className={styles.weProvideAn}>
                      enquiries for fast response.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.faqs}>
                <div className={styles.faq11}>
                  <div className={styles.whereFrame}>
                    <div className={styles.logorightnavlink}>
                      <div className={styles.whatDoesThePlatformDo}>
                        <b className={styles.whatIsMean}>
                          What does the platform do ?
                        </b>
                      </div>
                      <div className={styles.roundplus}>
                        <img
                          className={styles.combinedShapeIcon}
                          alt=""
                          src="/combined-shape.svg"
                        />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup1}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        What does the platform do?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq2}>
                  <div className={styles.whereFrame}>
                    <div className={styles.logorightnavlink}>
                      <div className={styles.whatDoesThePlatformDo}>
                        <b className={styles.whatIsMean}>
                          How can i access the platform ?
                        </b>
                      </div>
                      <div className={styles.roundplus1}>
                        <img
                          className={styles.combinedShapeIcon}
                          alt=""
                          src="/combined-shape.svg"
                        />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup2}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        How can i access the platform ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq3}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer}>
                        Is the platform free ?
                      </b>
                      <div className={styles.roundplus2}>
                        <img
                          className={styles.combinedShapeIcon}
                          alt=""
                          src="/combined-shape.svg"
                        />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup2}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        {" "}
                        Is the platform free ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        Agrospectrum Limited is a for-profit entity that
                        provides Agric business enterprises with top notch
                        digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq4}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer}>
                        What are some of your partners ?
                      </b>
                      <div className={styles.roundplus3}>
                        <img
                          className={styles.combinedShapeIcon}
                          alt=""
                          src="/combined-shape.svg"
                        />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup4}>
                    <div className={styles.whatAreSomeContainer}>
                      <p className={styles.whatAreSome}>
                        What are some of your partners ?
                      </p>
                      <p className={styles.blankLine3}>
                        <b>&nbsp;</b>
                      </p>
                      <p
                        className={styles.weOfferA5}
                      >{`We offer a comprehensive suite of digital solutions `}</p>
                      <p
                        className={styles.weProvideAn}
                      >{`We are proud to let you know our diligence and hardwork has paid greatly. MOFA, YARA, IGNITIA, MAY & LOTTE , SMG Agro, Agromite, ISDA, SESI technologies are few of the prominent partners that we deal with.`}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq5}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer}>
                        What do i stand to benefit ?
                      </b>
                      <div className={styles.roundplus4}>
                        <img
                          className={styles.combinedShapeIcon}
                          alt=""
                          src="/combined-shape.svg"
                        />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup2}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        What do i stand to benefit ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        With Agrospectrum’s solutions your business gets to
                        maximize profit and increase productivity. Farmers can
                        have access to a wide array of extension, agronomic
                        information, climate smart advice and certification that
                        will allow their produce break into global markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ta}>
            <img className={styles.taChild} alt="" src="/vector-21@2x.png" />
            <img className={styles.taItem} alt="" src="/vector-231.svg" />
            <div className={styles.outteam2}>
              <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
            </div>
            <div className={styles.outteam3}>
              <div className={styles.ourTeam1}>
                Our Team - The big brains behind Agrospectrum
              </div>
            </div>
            <img className={styles.taInner} alt="" src="/vector-221.svg" />
            <div className={styles.cardgropupo1} data-animate-on-scroll>
              <div className={styles.xorse1}>
                <div className={styles.xoseAhlijaTeam1}>
                  <img className={styles.baseIcon3} alt="" src="/base@2x.png" />
                  <div className={styles.block1Container}>
                    <div className={styles.block13}>
                      <div className={styles.rectangle13} />
                    </div>
                    <div className={styles.xoseAhlijahSweGroup}>
                      <div className={styles.xoseAhlijahSwe1}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead1}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro1}>
                <img className={styles.baseIcon4} alt="" src="/base@2x.png" />
                <div className={styles.block14}>
                  <div className={styles.rectangle14} />
                </div>
                <div className={styles.castroAntwiDansoGroup}>
                  <div className={styles.castroAntwiDanso1}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager1}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam1}>
                <img className={styles.baseIcon5} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent1}>
                  <div className={styles.block15}>
                    <div className={styles.rectangle15} />
                  </div>
                  <div className={styles.otisAApalooGroup}>
                    <div className={styles.otisAApaloo1}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst1}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cta1}>
              <div className={styles.gradientmsgContainer}>
                <div className={styles.gradientmsg1}>
                  <img
                    className={styles.gradientmsgItem}
                    alt=""
                    src="/group-206@2x.png"
                  />
                  <div className={styles.weSupportAgribusinessIndustGroup}>
                    <b
                      className={styles.weSupportAgribusinessContainer1}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                      <p className={styles.weProvideAn}>for a Better Result.</p>
                    </b>
                    <div
                      className={styles.vectorGroup}
                      onClick={onFrameContainer5Click}
                    >
                      <img
                        className={styles.frameChild4}
                        alt=""
                        src="/arrow-91.svg"
                        onClick={onArrowIcon2Click}
                      />
                      <div
                        className={styles.viewProducts}
                        onClick={onViewProduCtsText2Click}
                      >
                        view produCts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectArrow}>
                <div className={styles.base1} />
              </div>
            </div>
            <div className={styles.faqframe1}>
              <div className={styles.faq}>
                <div className={styles.frequently2}>
                  <b className={styles.faq7}>FAQ</b>
                  <b className={styles.frequentlyAskedQueContainer1}>
                    <p className={styles.weProvideAn}>{`Frequently `}</p>
                    <p className={styles.weProvideAn}>Asked Questions</p>
                  </b>
                  <div className={styles.allowsOrganizations1}>
                    <p
                      className={styles.weProvideAn}
                    >{`Browse through our mostly asked questions and `}</p>
                    <p className={styles.weProvideAn}>
                      enquiries for fast response.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.faqs1}>
                <div className={styles.faq12}>
                  <div className={styles.whereFrame5}>
                    <div className={styles.logorightnavlink}>
                      <div className={styles.whatDoesThePlatformDo}>
                        <b className={styles.whatIsMean5}>
                          What does the platform do ?
                        </b>
                      </div>
                      <div className={styles.roundplus5}>
                        <img
                          className={styles.combinedShapeIcon5}
                          alt=""
                          src="/combined-shape1.svg"
                        />
                        <div className={styles.rectangle16} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle17} />
                  <div className={styles.poppup11}>
                    <div className={styles.whatDoesTheContainer1}>
                      <p className={styles.whatDoesThe1}>
                        What does the platform do?
                      </p>
                      <p className={styles.blankLine5}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA6}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq21}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo6}>
                      <b className={styles.whatDoesTheContainer1}>
                        How can I access the platform ?
                      </b>
                      <div className={styles.roundplus6}>
                        <img
                          className={styles.combinedShapeIcon5}
                          alt=""
                          src="/combined-shape1.svg"
                        />
                        <div className={styles.rectangle16} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle17} />
                  <div className={styles.poppup21}>
                    <div className={styles.whatDoesTheContainer1}>
                      <p className={styles.whatDoesThe1}>
                        How can i access the platform ?
                      </p>
                      <p className={styles.blankLine5}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA6}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq31}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer1}>
                        Is the platform free ?
                      </b>
                      <div className={styles.roundplus7}>
                        <img
                          className={styles.combinedShapeIcon5}
                          alt=""
                          src="/combined-shape1.svg"
                        />
                        <div className={styles.rectangle16} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle17} />
                  <div className={styles.poppup21}>
                    <div className={styles.whatDoesTheContainer1}>
                      <p className={styles.whatDoesThe1}>
                        {" "}
                        Is the platform free ?
                      </p>
                      <p className={styles.blankLine5}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA6}>
                        Agrospectrum Limited is a for-profit entity that
                        provides Agric business enterprises with top notch
                        digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq41}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer1}>
                        What are some of your partners ?
                      </b>
                      <div className={styles.roundplus8}>
                        <img
                          className={styles.combinedShapeIcon5}
                          alt=""
                          src="/combined-shape1.svg"
                        />
                        <div className={styles.rectangle16} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle17} />
                  <div className={styles.poppup41}>
                    <div className={styles.whatAreSomeContainer1}>
                      <p className={styles.whatAreSome1}>
                        What are some of your partners ?
                      </p>
                      <p className={styles.blankLine8}>
                        <b>&nbsp;</b>
                      </p>
                      <p
                        className={styles.weOfferA8}
                      >{`We offer a comprehensive suite of digital solutions `}</p>
                      <p
                        className={styles.weProvideAn}
                      >{`We are proud to let you know our diligence and hardwork has paid greatly. MOFA, YARA, IGNITIA, MAY & LOTTE , SMG Agro, Agromite, ISDA, SESI technologies are few of the prominent partners that we deal with.`}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq51}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer1}>
                        What do i stand to benefit ?
                      </b>
                      <div className={styles.roundplus9}>
                        <img
                          className={styles.combinedShapeIcon5}
                          alt=""
                          src="/combined-shape1.svg"
                        />
                        <div className={styles.rectangle16} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle17} />
                  <div className={styles.poppup21}>
                    <div className={styles.whatDoesTheContainer1}>
                      <p className={styles.whatDoesThe1}>
                        What do i stand to benefit ?
                      </p>
                      <p className={styles.blankLine5}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA6}>
                        With Agrospectrum’s solutions your business gets to
                        maximize profit and increase productivity. Farmers can
                        have access to a wide array of extension, agronomic
                        information, climate smart advice and certification that
                        will allow their produce break into global markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div13}>
            <img className={styles.item} alt="" src="/vector-21@2x.png" />
            <img className={styles.vectorIcon} alt="" src="/vector-232.svg" />
            <div className={styles.outteam4}>
              <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
            </div>
            <div className={styles.outteam5}>
              <div className={styles.ourTeam1}>
                Our Team - The big brains behind Agrospectrum
              </div>
            </div>
            <img className={styles.child1} alt="" src="/vector-222.svg" />
            <div className={styles.cardgropupo2} data-animate-on-scroll>
              <div className={styles.xorse2}>
                <div className={styles.xoseAhlijaTeam2}>
                  <img className={styles.baseIcon6} alt="" src="/base@2x.png" />
                  <div className={styles.block1Parent2}>
                    <div className={styles.block16}>
                      <div className={styles.rectangle26} />
                    </div>
                    <div className={styles.xoseAhlijahSweContainer}>
                      <div className={styles.xoseAhlijahSwe2}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead2}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro2}>
                <img className={styles.baseIcon7} alt="" src="/base@2x.png" />
                <div className={styles.block17}>
                  <div className={styles.rectangle27} />
                </div>
                <div className={styles.castroAntwiDansoContainer}>
                  <div className={styles.castroAntwiDanso2}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager2}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam2}>
                <img className={styles.baseIcon8} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent3}>
                  <div className={styles.block18}>
                    <div className={styles.rectangle28} />
                  </div>
                  <div className={styles.otisAApalooContainer}>
                    <div className={styles.otisAApaloo2}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst2}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cta2}>
              <div className={styles.gradientmsgFrame}>
                <div className={styles.gradientmsg2}>
                  <img
                    className={styles.gradientmsgInner}
                    alt=""
                    src="/group-206@2x.png"
                  />
                  <div className={styles.weSupportAgribusinessIndustContainer}>
                    <b
                      className={styles.weSupportAgribusinessContainer2}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                      <p className={styles.weProvideAn}>for a Better Result.</p>
                    </b>
                    <div
                      className={styles.vectorContainer}
                      onClick={onFrameContainer6Click}
                    >
                      <img
                        className={styles.frameChild5}
                        alt=""
                        src="/arrow-92.svg"
                        onClick={onArrowIcon3Click}
                      />
                      <div
                        className={styles.viewProducts}
                        onClick={onViewProduCtsText3Click}
                      >
                        view produCts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectArrow}>
                <div className={styles.base2} />
              </div>
            </div>
            <div className={styles.faqframe2}>
              <div className={styles.faq}>
                <div className={styles.frequently4}>
                  <b className={styles.faq9}>FAQ</b>
                  <b className={styles.frequentlyAskedQueContainer2}>
                    <p className={styles.weProvideAn}>{`Frequently `}</p>
                    <p className={styles.weProvideAn}>Asked Questions</p>
                  </b>
                  <div className={styles.allowsOrganizations2}>
                    <p
                      className={styles.weProvideAn}
                    >{`Browse through our mostly asked questions and `}</p>
                    <p className={styles.weProvideAn}>
                      enquiries for fast response.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.faqs2}>
                <div className={styles.faq13}>
                  <div className={styles.whereFrame10}>
                    <div className={styles.logorightnavlink}>
                      <div className={styles.whatDoesThePlatformDo}>
                        <b className={styles.whatIsMean10}>
                          What does the platform do ?
                        </b>
                      </div>
                      <div className={styles.roundplus10}>
                        <img
                          className={styles.combinedShapeIcon10}
                          alt=""
                          src="/combined-shape2.svg"
                        />
                        <div className={styles.rectangle29} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle30} />
                  <div className={styles.poppup12}>
                    <div className={styles.whatDoesTheContainer2}>
                      <p className={styles.whatDoesThe2}>
                        What does the platform do?
                      </p>
                      <p className={styles.blankLine10}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA9}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq22}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo11}>
                      <b className={styles.whatDoesTheContainer2}>
                        How can I access the platform ?
                      </b>
                      <div className={styles.roundplus11}>
                        <img
                          className={styles.combinedShapeIcon10}
                          alt=""
                          src="/combined-shape2.svg"
                        />
                        <div className={styles.rectangle29} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle30} />
                  <div className={styles.poppup22}>
                    <div className={styles.whatDoesTheContainer2}>
                      <p className={styles.whatDoesThe2}>
                        How can i access the platform ?
                      </p>
                      <p className={styles.blankLine10}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA9}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq32}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer2}>
                        Is the platform free ?
                      </b>
                      <div className={styles.roundplus12}>
                        <img
                          className={styles.combinedShapeIcon10}
                          alt=""
                          src="/combined-shape2.svg"
                        />
                        <div className={styles.rectangle29} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle30} />
                  <div className={styles.poppup22}>
                    <div className={styles.whatDoesTheContainer2}>
                      <p className={styles.whatDoesThe2}>
                        {" "}
                        Is the platform free ?
                      </p>
                      <p className={styles.blankLine10}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA9}>
                        Agrospectrum Limited is a for-profit entity that
                        provides Agric business enterprises with top notch
                        digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq42}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer2}>
                        What are some of your partners ?
                      </b>
                      <div className={styles.roundplus13}>
                        <img
                          className={styles.combinedShapeIcon10}
                          alt=""
                          src="/combined-shape2.svg"
                        />
                        <div className={styles.rectangle29} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle30} />
                  <div className={styles.poppup42}>
                    <div className={styles.whatAreSomeContainer2}>
                      <p className={styles.whatAreSome2}>
                        What are some of your partners ?
                      </p>
                      <p className={styles.blankLine13}>
                        <b>&nbsp;</b>
                      </p>
                      <p
                        className={styles.weOfferA11}
                      >{`We offer a comprehensive suite of digital solutions `}</p>
                      <p
                        className={styles.weProvideAn}
                      >{`We are proud to let you know our diligence and hardwork has paid greatly. MOFA, YARA, IGNITIA, MAY & LOTTE , SMG Agro, Agromite, ISDA, SESI technologies are few of the prominent partners that we deal with.`}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq52}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer2}>
                        What do i stand to benefit ?
                      </b>
                      <div className={styles.roundplus14}>
                        <img
                          className={styles.combinedShapeIcon10}
                          alt=""
                          src="/combined-shape2.svg"
                        />
                        <div className={styles.rectangle29} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle30} />
                  <div className={styles.poppup22}>
                    <div className={styles.whatDoesTheContainer2}>
                      <p className={styles.whatDoesThe2}>
                        What do i stand to benefit ?
                      </p>
                      <p className={styles.blankLine10}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA9}>
                        With Agrospectrum’s solutions your business gets to
                        maximize profit and increase productivity. Farmers can
                        have access to a wide array of extension, agronomic
                        information, climate smart advice and certification that
                        will allow their produce break into global markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FOOTERCOMPONENT />
      </div>
      {isDrwawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu}
        >
          <DrwawerMenu onClose={closeDrwawerMenu} />
        </PortalDrawer>
      )}
      {isDrwawerMenu1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu1}
        >
          <DrwawerMenu onClose={closeDrwawerMenu1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Homepage;
