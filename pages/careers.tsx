import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./careers.module.css";

const Careers: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);
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

  const onLgoFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeCContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAbout2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onLinkPricingClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onLinkPricing2Click = useCallback(() => {
    // Please sync "product_services" to the project
  }, []);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onLinkPricing3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onLinkPricing4Click = useCallback(() => {
    router.push("/media");
  }, [router]);

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

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
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

  const openDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(true);
  }, []);

  const closeDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(false);
  }, []);

  const onContactUsContainer2Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsText3Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onClipPathGroup5Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup14Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup24Click = useCallback(() => {
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

  const onFrameButton1Click = useCallback(() => {
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

  return (
    <>
      <main className={styles.careers} id="careerMain">
        <header className={styles.allnavs}>
          <nav className={styles.navdesktop} id="navBar">
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
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup2Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-939.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-1@2x.png"
                  />
                </button>
                <div
                  className={styles.lgoframe}
                  onClick={onLgoFrameContainerClick}
                >
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo16@2x.png"
                  />
                </div>
              </div>
              <nav className={styles.rightnavlink}>
                <div className={styles.homec} onClick={onHomeCContainerClick}>
                  <button
                    className={styles.linkAbout}
                    onClick={onLinkAboutClick}
                  >
                    <div
                      className={styles.linkAbout1}
                      onClick={onLinkAbout2Click}
                    >
                      Home
                    </div>
                  </button>
                  <img
                    className={styles.homecChild}
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <button className={styles.aboutus} onClick={onAboutUsClick}>
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricingClick}
                  >
                    About Us
                  </div>
                </button>
                <button
                  className={styles.producAndServices}
                  onClick={onProducAndServicesClick}
                >
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricing2Click}
                  >{`Product & Services`}</div>
                </button>
                <button
                  className={styles.aboutus}
                  onClick={onClientspartnersClick}
                >
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricing3Click}
                  >{`Clients & Partners`}</div>
                </button>
                <button className={styles.aboutus} onClick={onMediaClick}>
                  <div
                    className={styles.linkPricing3}
                    onClick={onLinkPricing4Click}
                  >
                    Media
                  </div>
                </button>
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
                <div className={styles.handburger}>
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerItem} />
                  <div className={styles.handburgerInner} />
                </div>
              </nav>
            </div>
          </nav>
          <nav className={styles.nav} id="navBar">
            <div className={styles.logorightnavlink1}>
              <div className={styles.logoasset1}>
                <button className={styles.arrowframe1}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroup3Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup12Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup22Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-939.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-1@2x.png"
                  />
                </button>
                <div className={styles.lgoframe1}>
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo17@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink1}>
                <div className={styles.handburger1} onClick={openDrwawerMenu}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.handburgerChild2} />
                </div>
                <button
                  className={styles.contactusContainer1}
                  onClick={onContactUsContainer1Click}
                >
                  <div
                    className={styles.contactUs1}
                    onClick={onContactUsText2Click}
                  >
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav className={styles.nav1} id="navBar">
            <div className={styles.logorightnavlink1}>
              <div className={styles.logoasset1}>
                <button className={styles.arrowframe2}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroup4Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup13Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup23Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-939.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-1@2x.png"
                  />
                </button>
                <div className={styles.lgoframe1}>
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo17@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink1}>
                <div className={styles.handburger1} onClick={openDrwawerMenu1}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.handburgerChild2} />
                </div>
                <button
                  className={styles.contactusContainer1}
                  onClick={onContactUsContainer2Click}
                >
                  <div
                    className={styles.contactUs1}
                    onClick={onContactUsText3Click}
                  >
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav className={styles.nav2} id="navBar">
            <div className={styles.logorightnavlink1}>
              <div className={styles.logoasset1}>
                <button className={styles.arrowframe3}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroup5Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup14Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup24Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-939.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-1@2x.png"
                  />
                </button>
                <div className={styles.lgoframe1}>
                  <img
                    className={styles.logoIcon3}
                    id="logo"
                    alt=""
                    src="/logo18@2x.png"
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
        <header className={styles.careersInner}>
          <div className={styles.careersParent}>
            <div className={styles.careers1} data-animate-on-scroll>
              <h1 className={styles.careers2} data-animate-on-scroll>
                Careers
              </h1>
            </div>
            <div className={styles.rec}>
              <div className={styles.recChild} />
            </div>
          </div>
        </header>
        <section className={styles.allMakeAnEnquiry}>
          <div className={styles.desktopMakeEnquiry}>
            <section className={styles.frameParent}>
              <div className={styles.workWithUsWrapper}>
                <h1 className={styles.workWithUsContainer}>
                  <span className={styles.workWith}>{`Work with `}</span>
                  <span className={styles.us}>Us</span>
                </h1>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.careersWrapper}>
                  <h5 className={styles.careers3} data-animate-on-scroll>
                    CAREERS
                  </h5>
                </div>
                <p
                  className={styles.ourInnovativeGroupBelievesWrapper}
                  data-animate-on-scroll
                >
                  <div className={styles.ourInnovativeGroup}>
                    Our innovative group believes in the value and talent in
                    team work. Join the ever growing team of creative minds and
                    talents. Browse through our available positions or send an
                    open application by attaching your CV
                  </div>
                </p>
              </div>
            </section>
            <div className={styles.contactForm}>
              <div className={styles.enquiryTypeWrapper}>
                <div className={styles.enquiryType}>Enquiry type</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.generalWrapper}>
                  <div className={styles.general}>General</div>
                </div>
                <div className={styles.business}>
                  <div className={styles.general}>Business</div>
                </div>
                <div className={styles.generalWrapper}>
                  <div className={styles.general}>Careers</div>
                </div>
              </div>
              <input
                className={styles.contactFormChild}
                placeholder="Name"
                type="text"
              />
              <input
                className={styles.contactFormChild}
                placeholder="Phone"
                type="text"
              />
              <input
                className={styles.contactFormChild}
                placeholder="Email"
                type="text"
              />
              <div className={styles.frameDiv}>
                <input
                  className={styles.frameChild}
                  placeholder="Choose file"
                  type="text"
                />
                <input
                  className={styles.noFileChosen}
                  placeholder="No file chosen"
                  type="text"
                />
              </div>
              <input
                className={styles.frameInput}
                placeholder="Type your message here"
                type="text"
              />
              <div className={styles.contactFormInner1}>
                <button className={styles.sendWrapper}>
                  <div className={styles.send}>send</div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.footerComponent}>
          <footer className={styles.footer}>
            <div className={styles.component1}>
              <div className={styles.frameParent1}>
                <div className={styles.download5Parent}>
                  <img
                    className={styles.download5Icon}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.download5Icon1}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.captureIcon}
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className={styles.mofaColorIcon}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className={styles.download3Icon}
                    alt=""
                    src="/download-3@2x.png"
                  />
                  <img
                    className={styles.imagesIcon}
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className={styles.download6Icon}
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className={styles.download1Icon}
                    alt=""
                    src="/download-1@2x.png"
                  />
                  <img
                    className={styles.downloadIcon}
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className={styles.download2Icon}
                    alt=""
                    src="/download-2@2x.png"
                  />
                </div>
                <div className={styles.download5Group}>
                  <img
                    className={styles.download5Icon}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.download5Icon1}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.captureIcon}
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className={styles.mofaColorIcon}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className={styles.download3Icon}
                    alt=""
                    src="/download-3@2x.png"
                  />
                  <img
                    className={styles.imagesIcon}
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className={styles.download6Icon}
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className={styles.download1Icon}
                    alt=""
                    src="/download-1@2x.png"
                  />
                  <img
                    className={styles.downloadIcon}
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className={styles.download2Icon}
                    alt=""
                    src="/download-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.transformParent}
              id="footercontent"
              data-animate-on-scroll
            >
              <div className={styles.transform}>
                <div className={styles.careersWrapper}>
                  <div className={styles.nowWere}>TRANSFORM with</div>
                </div>
                <div className={styles.nowWereContainer}>
                  <div className={styles.nowWere1}>AGROSPECTRUM</div>
                </div>
                <div className={styles.nuncUltricesTellusWrapper}>
                  <div className={styles.nuncUltricesTellusContainer}>
                    <p
                      className={styles.transformYourAgricultural}
                    >{`Transform your agricultural practices and `}</p>
                    <p className={styles.transformYourAgricultural}>
                      <span className={styles.cultivateSuccessWith}>
                        cultivate success with
                      </span>
                      <b className={styles.cultivateSuccessWith}>
                        {" "}
                        industry's best
                      </b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className={styles.transformYourAgricultural}>
                      <span>{`and fostering a connected `}</span>
                      <b className={styles.cultivateSuccessWith}>
                        global community
                      </b>
                    </p>
                  </div>
                </div>
                <button
                  className={styles.getInTouchWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.getInTouch}>GET IN TOUCH</div>
                </button>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.nowWereParent}>
                    <div className={styles.nowWere2}>business</div>
                    <div className={styles.frameParent4}>
                      <div className={styles.nowWereFrame}>
                        <div
                          className={styles.nowWere3}
                          onClick={onNowWereTextClick}
                        >
                          CAREERS
                        </div>
                      </div>
                      <div className={styles.nowWereFrame}>
                        <div
                          className={styles.nowWere4}
                          onClick={onNowWereText2Click}
                        >{`ABOUT US `}</div>
                      </div>
                      <div className={styles.nowWereWrapper2}>
                        <div className={styles.nowWere5}>PRIVACY POLICY</div>
                      </div>
                      <div
                        className={styles.nowWereGroup}
                        onClick={onFrameContainer3Click}
                      >
                        <div
                          className={styles.nowWere6}
                          onClick={onNowWereText3Click}
                        >
                          PARTNERS
                        </div>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/line-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.nowWereParent1}>
                      <div className={styles.nowWere7}>{`CONTACT US `}</div>
                      <div className={styles.nowWere8}>Agrospectrum Ltd.</div>
                    </div>
                    <div className={styles.nowWereParent2}>
                      <div className={styles.nowWere9}>EAST LEGON office</div>
                      <div className={styles.nowWereParent3}>
                        <div className={styles.nowWere10}>No 24 Maseru St</div>
                        <div className={styles.nowWere10}>East Legon,</div>
                        <div className={styles.nowWere10}>Accra - ghana</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.nowWereParent4}>
                    <div className={styles.nowWere13}>BSL HEAD OFFICE</div>
                    <div className={styles.nowWere14}>No 24 Botwe</div>
                    <div className={styles.nowWere14}>Dzorwulu - Accra</div>
                  </div>
                  <div className={styles.nowWereParent5}>
                    <div className={styles.nowWere13}>TAMALE office</div>
                    <div className={styles.nowWereParent6}>
                      <div className={styles.nowWere17}>Tamale.</div>
                      <div className={styles.nowWere18}>16 Dagomba Road,</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent7}>
                <button className={styles.vectorParent}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/arrow-10.svg"
                    onClick={onArrowIconClick}
                  />
                  <div
                    className={styles.nowWere19}
                    onClick={onNowWereText4Click}
                  >
                    GET DIRECTION
                  </div>
                </button>
                <div className={styles.nowWereParent7}>
                  <div className={styles.nowWere20}>
                    <div className={styles.nowWere21}>PHONE</div>
                  </div>
                  <div className={styles.nowWere22}>+233(0) 593 808 064</div>
                </div>
                <div className={styles.nowWereParent8}>
                  <div className={styles.nowWere23}>
                    <div className={styles.nowWere24}>EMAIL</div>
                  </div>
                  <div className={styles.nowWere25}>
                    <div className={styles.nowWere26}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
                <div className={styles.nowWereParent9}>
                  <div className={styles.nowWere27}>
                    <div className={styles.nowWere28}>{`FOLLOW US `}</div>
                  </div>
                  <div className={styles.instagramParent}>
                    <div className={styles.instagram}>
                      <img
                        className={styles.groupIcon1}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.frame}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className={styles.contactFormInner1}>
            <div className={styles.lineWrapper}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.nowWereParent10}>
              <div className={styles.nowWere29}>
                No 24 Maseru Street,East Legon -Accra
              </div>
              <div className={styles.nowWere30}>
                © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </main>
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

export default Careers;
