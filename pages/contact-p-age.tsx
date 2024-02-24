import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import Allnavs4 from "../components/allnavs4";
import FrameComponent4 from "../components/frame-component4";
import CONTACTFORM from "../components/c-o-n-t-a-c-t-f-o-r-m";
import { useRouter } from "next/router";
import FOOTERCOMPONENT3 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t3";
import styles from "./contact-p-age.module.css";

const ContactPAge: NextPage = () => {
  const router = useRouter();
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
    router.push("/product-services");
  }, [router]);

  const onArrowIconClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onArrowIcon2Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsText2Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onArrowIcon3Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsText3Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <main className={styles.contactpage}>
      <Allnavs4 />
      <div className={styles.formsHero}>
        <section className={styles.workwithframe}>
          <section className={styles.frameParent}>
            <FrameComponent4 />
            <CONTACTFORM />
          </section>
        </section>
      </div>
      <div className={styles.outTeam}>
        <div className={styles.dktpTeamFaqCta}>
          <img
            className={styles.dktpTeamFaqCtaChild}
            alt=""
            src="/vector-213@2x.png"
          />
          <img
            className={styles.dktpTeamFaqCtaItem}
            alt=""
            src="/vector-233.svg"
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
            src="/vector-223.svg"
          />
          <div className={styles.cardgropupo} data-animate-on-scroll>
            <div className={styles.xorse}>
              <div className={styles.xoseAhlijaTeam}>
                <img className={styles.baseIcon} alt="" src="/base131@2x.png" />
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
              <img className={styles.baseIcon1} alt="" src="/base141@2x.png" />
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
              <img className={styles.baseIcon2} alt="" src="/base151@2x.png" />
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
                  src="/group-2062@2x.png"
                />
                <div className={styles.weSupportAgribusinessIndustParent}>
                  <b
                    className={styles.weSupportAgribusinessContainer}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.weSupportAgribusiness}
                    >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                    <p className={styles.weSupportAgribusiness}>
                      for a Better Result.
                    </p>
                  </b>
                  <div
                    className={styles.vectorParent}
                    onClick={onFrameContainerClick}
                  >
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/arrow-93.svg"
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
            <div className={styles.baseWrapper}>
              <div className={styles.base} />
            </div>
          </div>
          <div className={styles.faqframe}>
            <div className={styles.faq}>
              <div className={styles.frequently}>
                <b className={styles.faq1}>FAQ</b>
                <b className={styles.frequentlyAskedQueContainer}>
                  <p
                    className={styles.weSupportAgribusiness}
                  >{`Frequently `}</p>
                  <p className={styles.weSupportAgribusiness}>
                    Asked Questions
                  </p>
                </b>
                <div className={styles.allowsOrganizations}>
                  <p
                    className={styles.weSupportAgribusiness}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weSupportAgribusiness}>
                    enquiries for fast response.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.faqs}>
              <div className={styles.faq11}>
                <div className={styles.whereFrame}>
                  <div className={styles.whatDoesThePlatformDoParent}>
                    <div className={styles.whatDoesThePlatformDo}>
                      <b className={styles.whatIsMean}>
                        What does the platform do ?
                      </b>
                    </div>
                    <div className={styles.roundplus}>
                      <img
                        className={styles.combinedShapeIcon}
                        alt=""
                        src="/combined-shape3.svg"
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
                    <p className={styles.weOfferA}>
                      We offer a comprehensive suite of agriculturally inclined
                      digitalsolutions. Use the contact us button at the button
                      of the site to reach us.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.faq2}>
                <div className={styles.whereFrame}>
                  <div className={styles.whatDoesThePlatformDoParent}>
                    <div className={styles.whatDoesThePlatformDo}>
                      <b className={styles.whatIsMean}>
                        How can i access the platform ?
                      </b>
                    </div>
                    <div className={styles.roundplus1}>
                      <img
                        className={styles.combinedShapeIcon}
                        alt=""
                        src="/combined-shape3.svg"
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
                    <p className={styles.weOfferA}>
                      We offer a comprehensive suite of agriculturally inclined
                      digitalsolutions. Use the contact us button at the button
                      of the site to reach us.
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
                        src="/combined-shape3.svg"
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
                    <p className={styles.weOfferA}>
                      Agrospectrum Limited is a for-profit entity that provides
                      Agric business enterprises with top notch digital
                      solutions.
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
                        src="/combined-shape3.svg"
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
                      className={styles.weOfferA2}
                    >{`We offer a comprehensive suite of digital solutions `}</p>
                    <p
                      className={styles.weSupportAgribusiness}
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
                        src="/combined-shape3.svg"
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
                    <p className={styles.weOfferA}>
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
          <img className={styles.taChild} alt="" src="/vector-2111@2x.png" />
          <img className={styles.taItem} alt="" src="/vector-234.svg" />
          <div className={styles.outteam2}>
            <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
          </div>
          <div className={styles.outteam3}>
            <div className={styles.ourTeam1}>
              Our Team - The big brains behind Agrospectrum
            </div>
          </div>
          <img className={styles.taInner} alt="" src="/vector-224.svg" />
          <div className={styles.cardgropupo1} data-animate-on-scroll>
            <div className={styles.xorse1}>
              <div className={styles.xoseAhlijaTeam1}>
                <img
                  className={styles.baseIcon3}
                  alt=""
                  src="/base161@2x.png"
                />
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
              <img className={styles.baseIcon4} alt="" src="/base17@2x.png" />
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
              <img className={styles.baseIcon5} alt="" src="/base18@2x.png" />
              <div className={styles.groupDiv}>
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
                  src="/group-2063@2x.png"
                />
                <div className={styles.weSupportAgribusinessIndustGroup}>
                  <b
                    className={styles.weSupportAgribusinessContainer1}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.weSupportAgribusiness}
                    >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                    <p className={styles.weSupportAgribusiness}>
                      for a Better Result.
                    </p>
                  </b>
                  <div
                    className={styles.vectorGroup}
                    onClick={onFrameContainer2Click}
                  >
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/arrow-94.svg"
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
            <div className={styles.baseWrapper}>
              <div className={styles.base1} />
            </div>
          </div>
          <div className={styles.faqframe1}>
            <div className={styles.faq}>
              <div className={styles.frequently2}>
                <b className={styles.faq7}>FAQ</b>
                <b className={styles.frequentlyAskedQueContainer1}>
                  <p
                    className={styles.weSupportAgribusiness}
                  >{`Frequently `}</p>
                  <p className={styles.weSupportAgribusiness}>
                    Asked Questions
                  </p>
                </b>
                <div className={styles.allowsOrganizations1}>
                  <p
                    className={styles.weSupportAgribusiness}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weSupportAgribusiness}>
                    enquiries for fast response.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.faqs1}>
              <div className={styles.faq12}>
                <div className={styles.whereFrame5}>
                  <div className={styles.whatDoesThePlatformDoParent}>
                    <div className={styles.whatDoesThePlatformDo}>
                      <b className={styles.whatIsMean5}>
                        What does the platform do ?
                      </b>
                    </div>
                    <div className={styles.roundplus5}>
                      <img
                        className={styles.combinedShapeIcon5}
                        alt=""
                        src="/combined-shape4.svg"
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
                    <p className={styles.weOfferA3}>
                      We offer a comprehensive suite of agriculturally inclined
                      digitalsolutions. Use the contact us button at the button
                      of the site to reach us.
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
                        src="/combined-shape4.svg"
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
                    <p className={styles.weOfferA3}>
                      We offer a comprehensive suite of agriculturally inclined
                      digitalsolutions. Use the contact us button at the button
                      of the site to reach us.
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
                        src="/combined-shape4.svg"
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
                    <p className={styles.weOfferA3}>
                      Agrospectrum Limited is a for-profit entity that provides
                      Agric business enterprises with top notch digital
                      solutions.
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
                        src="/combined-shape4.svg"
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
                      className={styles.weOfferA5}
                    >{`We offer a comprehensive suite of digital solutions `}</p>
                    <p
                      className={styles.weSupportAgribusiness}
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
                        src="/combined-shape4.svg"
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
                    <p className={styles.weOfferA3}>
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
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/vector-2121@2x.png" />
          <img className={styles.item} alt="" src="/vector-235.svg" />
          <div className={styles.outteam4}>
            <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
          </div>
          <div className={styles.outteam5}>
            <div className={styles.ourTeam1}>
              Our Team - The big brains behind Agrospectrum
            </div>
          </div>
          <img className={styles.inner} alt="" src="/vector-225.svg" />
          <div className={styles.cardgropupo2} data-animate-on-scroll>
            <div className={styles.xorse2}>
              <div className={styles.xoseAhlijaTeam2}>
                <img className={styles.baseIcon6} alt="" src="/base19@2x.png" />
                <div className={styles.block1Parent1}>
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
              <img className={styles.baseIcon7} alt="" src="/base20@2x.png" />
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
              <img className={styles.baseIcon8} alt="" src="/base211@2x.png" />
              <div className={styles.block1Parent2}>
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
                  src="/group-20621@2x.png"
                />
                <div className={styles.weSupportAgribusinessIndustContainer}>
                  <b
                    className={styles.weSupportAgribusinessContainer2}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.weSupportAgribusiness}
                    >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                    <p className={styles.weSupportAgribusiness}>
                      for a Better Result.
                    </p>
                  </b>
                  <div
                    className={styles.vectorContainer}
                    onClick={onFrameContainer3Click}
                  >
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/arrow-95.svg"
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
            <div className={styles.baseWrapper}>
              <div className={styles.base2} />
            </div>
          </div>
          <div className={styles.faqframe2}>
            <div className={styles.faq}>
              <div className={styles.frequently4}>
                <b className={styles.faq9}>FAQ</b>
                <b className={styles.frequentlyAskedQueContainer2}>
                  <p
                    className={styles.weSupportAgribusiness}
                  >{`Frequently `}</p>
                  <p className={styles.weSupportAgribusiness}>
                    Asked Questions
                  </p>
                </b>
                <div className={styles.allowsOrganizations2}>
                  <p
                    className={styles.weSupportAgribusiness}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weSupportAgribusiness}>
                    enquiries for fast response.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.faqs2}>
              <div className={styles.faq13}>
                <div className={styles.whereFrame10}>
                  <div className={styles.whatDoesThePlatformDoParent}>
                    <div className={styles.whatDoesThePlatformDo}>
                      <b className={styles.whatIsMean10}>
                        What does the platform do ?
                      </b>
                    </div>
                    <div className={styles.roundplus10}>
                      <img
                        className={styles.combinedShapeIcon10}
                        alt=""
                        src="/combined-shape5.svg"
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
                    <p className={styles.weOfferA6}>
                      We offer a comprehensive suite of agriculturally inclined
                      digitalsolutions. Use the contact us button at the button
                      of the site to reach us.
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
                        src="/combined-shape5.svg"
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
                    <p className={styles.weOfferA6}>
                      We offer a comprehensive suite of agriculturally inclined
                      digitalsolutions. Use the contact us button at the button
                      of the site to reach us.
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
                        src="/combined-shape5.svg"
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
                    <p className={styles.weOfferA6}>
                      Agrospectrum Limited is a for-profit entity that provides
                      Agric business enterprises with top notch digital
                      solutions.
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
                        src="/combined-shape6.svg"
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
                      className={styles.weOfferA8}
                    >{`We offer a comprehensive suite of digital solutions `}</p>
                    <p
                      className={styles.weSupportAgribusiness}
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
                        src="/combined-shape7.svg"
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
      </div>
      <FOOTERCOMPONENT3 />
    </main>
  );
};

export default ContactPAge;
