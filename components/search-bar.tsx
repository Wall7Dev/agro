import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./search-bar.module.css";

const SearchBar: NextPage = () => {
  const router = useRouter();

  const onFrameSectionClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameSection1Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameSection2Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <div className={styles.ourprojectframe}>
      <div className={styles.opf1}>
        <h1 className={styles.ourProjects}>Our Projects</h1>
        <div className={styles.theNationssBest}>
          The nations’s best digital Agric Platform
        </div>
      </div>
      <section className={styles.opf2}>
        <section className={styles.frameParent} onClick={onFrameSectionClick}>
          <div className={styles.nationwideParent}>
            <div className={styles.nationwide}>@Nationwide</div>
            <img className={styles.baseIcon} alt="" src="/base@2x.png" />
            <div className={styles.aFlagshipProgram}>
              A flagship program of the MoFA(Ghana) that used Agrospectrum’s
              mobile application provide input Subsidy to farmers.
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.block1Parent}>
                <div className={styles.block1Parent}>
                  <div className={styles.rectangle} />
                </div>
                <div className={styles.eSubsidy}>{`E-Subsidy `}</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.nationwideParent}>
              <div className={styles.nationwide1}>@nationwide</div>
              <img className={styles.baseIcon} alt="" src="/base@2x.png" />
              <div className={styles.aCreditProgramContainer}>
                <span
                  className={styles.aCreditProgram}
                >{`A credit program spearheaded by `}</span>
                <span className={styles.mayAndLotte}>May and Lotte,</span>
                <span className={styles.aCreditProgram}>
                  {" "}
                  leveraged our cutting-edge solutions at the crucial redemption
                  stage for a streamlined process.
                </span>
              </div>
              <div className={styles.groupContainer}>
                <div className={styles.block1Group}>
                  <div className={styles.block1Group}>
                    <div className={styles.rectangle1} />
                  </div>
                  <div
                    className={styles.inputCreditMgt}
                  >{`Input Credit Mgt. `}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles.projectCardParent}
          onClick={onFrameSection1Click}
        >
          <div className={styles.nationwideParent}>
            <div className={styles.northernGhana}>@Northern Ghana</div>
            <img className={styles.baseIcon} alt="" src="/base@2x.png" />
            <div className={styles.anEnumerationProgram}>
              An enumeration program by the Government of Ghana through the
              Ministry of Food and Agriculture that profiles farmers for
              inclusion.
            </div>
            <div className={styles.projectCardInner}>
              <div className={styles.frameContainer}>
                <div className={styles.farmerRegistrationWrapper}>
                  <div
                    className={styles.farmerRegistration}
                  >{`Farmer Registration   `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.nationwideParent}>
            <div className={styles.nationwide2}>@Nationwide</div>
            <img className={styles.baseIcon} alt="" src="/base@2x.png" />
            <div
              className={styles.ourClimateSmartSolution}
            >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
            <div className={styles.groupFrame}>
              <div className={styles.block1Container}>
                <div className={styles.block1Container}>
                  <div className={styles.rectangle2} />
                </div>
                <div className={styles.climateSmartProgram}>
                  Climate Smart Program
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles.projectCardParent}
          onClick={onFrameSection2Click}
        >
          <div className={styles.nationwideParent}>
            <div className={styles.nationwide3}>@Nationwide</div>
            <img className={styles.baseIcon4} alt="" src="/base@2x.png" />
            <div
              className={styles.imagineAFuture}
            >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
            <div className={styles.groupWrapper1}>
              <div className={styles.block1Parent}>
                <div className={styles.block1Parent}>
                  <div className={styles.rectangle} />
                </div>
                <div className={styles.farmerKyc}>FARMER KYC</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.nationwideParent}>
              <div className={styles.savanna}>@Savanna</div>
              <img className={styles.baseIcon} alt="" src="/base@2x.png" />
              <div className={styles.runByOurContainer}>
                <p className={styles.runByOurClientsMayAndLot}>
                  <span
                    className={styles.runByOur}
                  >{`Run by our clients `}</span>
                  <span className={styles.mayAndLotte1}>May and Lotte,</span>
                  <span className={styles.aCreditProgram}>
                    {" "}
                    employed solutions from Agrospectum to streamline purchases
                    and payments for the aggregated commodities.
                  </span>
                </p>
              </div>
              <div className={styles.groupWrapper2}>
                <div className={styles.block1Parent1}>
                  <div className={styles.block1Parent1}>
                    <div className={styles.rectangle4} />
                  </div>
                  <div className={styles.aggregationProgram}>
                    Aggregation Program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className={styles.projectArrow}>
        <img
          className={styles.projectArrowChild}
          alt=""
          src="/frame-1210@2x.png"
        />
        <div className={styles.navigation}>
          <div className={styles.divider} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
