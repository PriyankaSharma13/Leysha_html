import styles from "../styles/WhatWeDo.module.css";
import whatWeDoItems from "../data/whatWeDoData";
import { Link } from "react-router-dom";
import AboutSection from "./AboutSection";

const WhatWeDo = () => {
    return (
        <>
            <section className={`text-center ${styles.whatWeDo}`}>
                <div className="container">
                    <div className="row">
                        <div 
                            className="col-sm-12 wwd-full  "
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className={`${styles.content} align-items-end mrb-40 `}>
                                <div className={styles.subTitle}>
                                    <span>What we do</span>
                                </div>
                                <h2>From The Heart of India</h2>
                                <p>
                                    For generations, the Leysha family has cultivated excellence in the fertile plains
                                    of Northern India, where the purest waters and richest soil give birth to the world's finest basmati rice.
                                </p>
                            </div>
                        </div>

                        {whatWeDoItems.map((item, index) => (
                           
                                 <div
                                key={index}
                                className="col-sm-3 wwd-col"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className={styles.infoBox}>
                                    <div className={styles.topArea}>
                                        <figure><img src={item.img} alt={item.title} /></figure>
                                        <p>{item.text}</p>
                                    </div>

                                    <div className={styles.bottomArea}>
                                        <Link to="/">
                                            <span className={styles.icon}>{item.icon}</span>
                                            {item.title}
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <AboutSection />

        </>
    );
};

export default WhatWeDo;
