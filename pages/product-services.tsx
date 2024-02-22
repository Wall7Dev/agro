import type { NextPage } from "next";
import Allnavs3 from "../components/allnavs3";
import Component from "../components/component";
import Climate from "../components/climate";
import Aggregation from "../components/aggregation";
import FOOTERCOMPONENT1 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t1";
import styles from "./product-services.module.css";

const ProductServices: NextPage = () => {
  return (
    <div className={styles.productServices}>
      <Allnavs3 />
      <section className={styles.allherops}>
        <Component />
        <div className={styles.allherops960}>
          <div className={styles.bgBlurParent}>
            <img className={styles.bgBlurIcon} alt="" src="/bg-blur.svg" />
            <div className={styles.empoweringFarmersAndUnlockWrapper}>
              <div className={styles.empoweringFarmersAndContainer}>
                <span className={styles.empowering}>{`Empowering `}</span>
                <span className={styles.farmers}>Farmers</span>
                <span className={styles.empowering}>{`, and `}</span>
                <span className={styles.farmers}>Unlocking Ghana's</span>
                <span className={styles.empowering}>{` `}</span>
                <span className={styles.farmers}>Agricultural</span>
                <span className={styles.empowering}> Potential</span>
              </div>
            </div>
            <div className={styles.aRevolutionaryDigitalInnoWrapper}>
              <div
                className={styles.aRevolutionaryDigital}
              >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
            </div>
            <div className={styles.scrollDown}>
              <div className={styles.scrollDownChild} />
            </div>
          </div>
        </div>
        <div className={styles.allherops420}>
          <div className={styles.bgBlurParent}>
            <img className={styles.bgBlurIcon} alt="" src="/bg-blur.svg" />
            <div className={styles.empoweringFarmersAndUnlockContainer}>
              <div className={styles.empoweringFarmersAndContainer}>
                <p className={styles.empowering1}>{`Empowering `}</p>
                <p className={styles.farmers1}>
                  <span className={styles.farmers}>Farmers</span>
                  <span className={styles.span1}>{`, `}</span>
                </p>
                <p className={styles.andUnlockingGhanasAgricult}>
                  <span className={styles.span1}>{`and `}</span>
                  <span className={styles.farmers}>
                    Unlocking Ghana's Agricultural
                  </span>
                  <span className={styles.span1}> Potential</span>
                </p>
              </div>
            </div>
            <div className={styles.aRevolutionaryDigitalInnoContainer}>
              <div
                className={styles.aRevolutionaryDigital1}
              >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
            </div>
            <div className={styles.scrollDown}>
              <div className={styles.scrollDownChild} />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.climate}>
        <div className={styles.frame1082Parent}>
          <img className={styles.frame1082} alt="" src="/frame-108-2@2x.png" />
          <div className={styles.subsidyProgramParent}>
            <div className={styles.subsidyProgram}>
              <p className={styles.andUnlockingGhanasAgricult}>
                <b className={styles.subsidy}>Subsidy</b>
                <span> Program</span>
              </p>
              <p className={styles.p}></p>
            </div>
            <div className={styles.theSubsidyIs}>
              The Subsidy is a 7step process; which begins with Registration or
              on-boarding of farmers who are not already registered in the
              system, after which there is the establishment of the subsidy rate
              and allocation to beneficiaries.
            </div>
            <div className={styles.theSubsidyIs}>
              Thereafter, a reconciliation and settlement system is also
              established to determine how beneficiaries will get access to the
              inputs. The subsidy module registers input supply chain members or
              providers like wholesalers and retailers to track the redemption
              process.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.climate1}>
        <div className={styles.frame1082Parent}>
          <div className={styles.subsidyProgramParent}>
            <div className={styles.farmerKyc}>
              <p className={styles.andUnlockingGhanasAgricult}>
                <span>{`Farmer `}</span>
                <b className={styles.subsidy}>KYC</b>
                <span className={styles.span2}></span>
              </p>
            </div>
            <div
              className={styles.theSubsidyIs}
            >{`This is also known as the farmer registration process. The term KYC refers to know your customer. The farmer KYC takes the farmer through an on-boarding process or registration where data and biometric entries are taken to allow the farmers become integrated into a client’s system. `}</div>
            <div className={styles.theSubsidyIs}>
              It was first used by the Ministry of Food and Agriculture(MOFA)
              for the E- Agric programme for the 5 northern regions of Ghana.
              The application is a mobile and web based software, which all
              other institutions can adopt to collect data devoid of errors.
            </div>
          </div>
          <img className={styles.frame1082} alt="" src="/frame-108-21@2x.png" />
        </div>
      </div>
      <Climate
        frame1082="/frame-108-22@2x.png"
        inputCredit="Input-Credit"
        managementSystem="  management System 
"
        theInputCreditManagementS="The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. "
        theProductAllowsForEasyDo="The product allows for easy documentation and management of inputs given at the beginning of the farming season; expected returns, provides farmers with agronomic advice, allows agents to monitor farmers progress during the season and adherence to timely schedules of farm practices."
      />
      <Aggregation />
      <Climate
        frame1082="/frame-108-24@2x.png"
        inputCredit="Climate"
        managementSystem=" Smart Agric program"
        theInputCreditManagementS="This solution by Agrospectrum limited focuses on providing climate friendly agricultural information, predict weather, disaster risk mitigation and agronomic advice through channels like Interactive Voice Recognition (IVR), a call centre and SMS a to farmers intermittently in various languages."
        theProductAllowsForEasyDo="Currently, it is run in 9 local languages, English and French. It currently provides cultivation advice for twelve crops with plans underway to integrate many other crops."
        propHeight="724px"
        propHeight1="unset"
      />
      <div className={styles.climate1}>
        <div className={styles.frame1082Parent}>
          <div className={styles.subsidyProgramParent}>
            <div className={styles.farmerKyc}>
              <p className={styles.andUnlockingGhanasAgricult}>
                <b className={styles.subsidy}>{`Farmer `}</b>
                <span>registration</span>
              </p>
            </div>
            <div className={styles.theSubsidyIs}>
              The farmer registration application is a mobile and web based
              software, which all other institutions can adopt to collect data
              devoid of errors. The registration process starts registering
              basic member data digitally; capturing their photo, fingerprint
              details, digital signatures,
            </div>
            <div className={styles.theSubsidyIs}>
              This solution has been used by MOFA in registering over 1.6
              million farmers in the five northern regions.
            </div>
          </div>
          <img className={styles.frame1082} alt="" src="/frame-108-25@2x.png" />
        </div>
      </div>
      <FOOTERCOMPONENT1 />
    </div>
  );
};

export default ProductServices;
