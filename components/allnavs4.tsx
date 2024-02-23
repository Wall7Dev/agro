import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "./drwawer-menu";
import PortalDrawer from "./portal-drawer";
import styles from "./allnavs4.module.css";

const Allnavs4: NextPage = () => {
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

  return (
    <>
      <header className={styles.allnavs}>
        <nav className={styles.navdesktop} id="navBar">
          <div className={styles.logorightnavlink}>
            <div className={styles.logoasset}>
              <button className={styles.arrowframe}>
                <div className={styles.oursubsidiarylogos} id="ourSubsidiaries">
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group53.svg"
                    onClick={onClipPathGroupClick}
                  />
                  <img
                    className={styles.clipPathGroup1}
                    alt=""
                    src="/clip-path-group54@2x.png"
                    onClick={onClipPathGroup1Click}
                  />
                  <img
                    className={styles.clipPathGroup2}
                    alt=""
                    src="/clip-path-group55@2x.png"
                    onClick={onClipPathGroup2Click}
                  />
                  <img
                    className={styles.oursubsidiarylogosChild}
                    alt=""
                    src="/group-93912.svg"
                  />
                </div>
                <img
                  className={styles.images21}
                  alt=""
                  src="/images-2-119@2x.png"
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
                  src="/logo20@2x.png"
                />
              </div>
            </div>
            <nav className={styles.rightnavlink}>
              <div className={styles.homec} onClick={onHomeCContainerClick}>
                <button className={styles.linkAbout} onClick={onLinkAboutClick}>
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
                  src="/line-116@2x.png"
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
                className={styles.clientspartners}
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
                <img
                  className={styles.contactusContainerChild}
                  alt=""
                  src="/line-117@2x.png"
                />
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
                <div className={styles.oursubsidiarylogos} id="ourSubsidiaries">
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group56.svg"
                    onClick={onClipPathGroup3Click}
                  />
                  <img
                    className={styles.clipPathGroup1}
                    alt=""
                    src="/clip-path-group57@2x.png"
                    onClick={onClipPathGroup12Click}
                  />
                  <img
                    className={styles.clipPathGroup2}
                    alt=""
                    src="/clip-path-group58@2x.png"
                    onClick={onClipPathGroup22Click}
                  />
                  <img
                    className={styles.oursubsidiarylogosChild}
                    alt=""
                    src="/group-93911.svg"
                  />
                </div>
                <img
                  className={styles.images21}
                  alt=""
                  src="/images-2-120@2x.png"
                />
              </button>
              <div className={styles.lgoframe1}>
                <img
                  className={styles.logoIcon}
                  id="logo"
                  alt=""
                  src="/logo21@2x.png"
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
                <div className={styles.oursubsidiarylogos} id="ourSubsidiaries">
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group59.svg"
                    onClick={onClipPathGroup4Click}
                  />
                  <img
                    className={styles.clipPathGroup1}
                    alt=""
                    src="/clip-path-group60@2x.png"
                    onClick={onClipPathGroup13Click}
                  />
                  <img
                    className={styles.clipPathGroup2}
                    alt=""
                    src="/clip-path-group61@2x.png"
                    onClick={onClipPathGroup23Click}
                  />
                  <img
                    className={styles.oursubsidiarylogosChild}
                    alt=""
                    src="/group-93911.svg"
                  />
                </div>
                <img
                  className={styles.images21}
                  alt=""
                  src="/images-2-121@2x.png"
                />
              </button>
              <div className={styles.lgoframe1}>
                <img
                  className={styles.logoIcon}
                  id="logo"
                  alt=""
                  src="/logo22@2x.png"
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
                <div className={styles.oursubsidiarylogos} id="ourSubsidiaries">
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group50.svg"
                    onClick={onClipPathGroup5Click}
                  />
                  <img
                    className={styles.clipPathGroup1}
                    alt=""
                    src="/clip-path-group62@2x.png"
                    onClick={onClipPathGroup14Click}
                  />
                  <img
                    className={styles.clipPathGroup2}
                    alt=""
                    src="/clip-path-group63@2x.png"
                    onClick={onClipPathGroup24Click}
                  />
                  <img
                    className={styles.oursubsidiarylogosChild}
                    alt=""
                    src="/group-93911.svg"
                  />
                </div>
                <img
                  className={styles.images21}
                  alt=""
                  src="/images-2-122@2x.png"
                />
              </button>
              <div className={styles.lgoframe1}>
                <img
                  className={styles.logoIcon3}
                  id="logo"
                  alt=""
                  src="/logo23@2x.png"
                />
              </div>
            </div>
            <img
              className={styles.rightnavlinkIcon}
              alt=""
              src="/rightnavlink6@2x.png"
            />
          </div>
        </nav>
      </header>
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

export default Allnavs4;
