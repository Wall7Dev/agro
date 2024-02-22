import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./nav-desktop.module.css";

const NavDesktop: NextPage = () => {
  const router = useRouter();

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

  return (
    <nav className={styles.navdesktop} id="navBar">
      <div className={styles.logorightnavlink}>
        <div className={styles.logoasset}>
          <button className={styles.arrowframe}>
            <div className={styles.oursubsidiarylogos} id="ourSubsidiaries">
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
            <img className={styles.images21} alt="" src="/images-2-1@2x.png" />
          </button>
          <div className={styles.lgoframe} onClick={onLgoFrameContainerClick}>
            <img
              className={styles.logoIcon}
              id="logo"
              alt=""
              src="/logo@2x.png"
            />
          </div>
        </div>
        <nav className={styles.rightnavlink}>
          <div className={styles.homec} onClick={onHomeCContainerClick}>
            <div className={styles.linkAbout} onClick={onLinkAboutClick}>
              Home
            </div>
            <img className={styles.homecChild} alt="" src="/line-1@2x.png" />
          </div>
          <button className={styles.aboutus} onClick={onAboutUsClick}>
            <div className={styles.linkPricing} onClick={onLinkPricingClick}>
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
            <div className={styles.linkPricing3} onClick={onLinkPricing4Click}>
              Media
            </div>
          </button>
          <button
            className={styles.contactusContainer}
            onClick={onContactUsContainerClick}
          >
            <div className={styles.contactUs} onClick={onContactUsTextClick}>
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
  );
};

export default NavDesktop;
