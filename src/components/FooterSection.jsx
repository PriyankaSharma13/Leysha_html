import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import styles from "../styles/Footer.module.css";
import logo from "../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";

const FooterSection = () => {
    const [showButton, setShowButton] = useState(false);
    const progressPathRef = useRef(null);

    useEffect(() => {
        const progressPath = progressPathRef.current;
        const pathLength = progressPath.getTotalLength();

        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;

            setShowButton(scroll > 50);
        };

        window.addEventListener("scroll", updateProgress);
        updateProgress(); 

        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className={styles.footer}>
            <div
                className={`${styles.progressWrap} ${showButton ? styles.activeProgress : ""}`}
                onClick={scrollToTop}
            >
                <svg
                    className={styles.progressCircle}
                    width="46"
                    height="46"
                    viewBox="0 0 100 100"
                >
                    <path
                        ref={progressPathRef}
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        stroke="#be251f"
                        strokeWidth="4"
                        fill="none"
                    />
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <div className={`col-sm-3 ${styles.footerCol}`}>

                        <div className={styles.wg1}>
                            <div className={styles.ftLogo}>
                                <a href="#">
                                    <img src={logo} alt="Logo" />
                                </a>
                            </div>

                            <p className={styles.ftText}>
                                Premium basmati rice crafted for every cuisine. Four decades of
                                excellence, serving 70+ nations worldwide.
                            </p>

                            <div className={styles.ftIcons}>
                                <a href="#"><span> <FaFacebookF /></span></a>
                                <a href="#"><span><FaInstagram /></span></a>
                                <a href="#"><span> <FaLinkedinIn /></span></a>
                                <a href="#"><span><FaTwitter /></span></a>
                            </div>
                        </div>
                    </div>


                    <div className={`col-sm-3 ${styles.footerCol}`}>
                        <div className={styles.wg1}>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Why Leysha</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Global Presence</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`col-sm-3 ${styles.footerCol}`}>
                        <div className={styles.wg1}>
                            <h4>Products</h4>
                            <ul>
                                <li><a href="#">Leysha Victory</a></li>
                                <li><a href="#">Leysha Bahaar</a></li>
                                <li><a href="#">Leysha Premium</a></li>
                                <li><a href="#">Product Brochure</a></li>
                                <li><a href="#">Nutritional Info</a></li>
                                <li><a href="#">Cooking Guide</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`col-sm-3 ${styles.footerCol}`}>
                        <div className={styles.wg1}>
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Quality Assurance</a></li>
                                <li><a href="#">Distributors</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press Kit</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            <div className={styles.ftBottom}>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6">
                            <p className={styles.copyright}>
                                © 2025 Leysha Basmati Rice. All rights reserved.
                            </p>
                        </div>

                        <div className="col-sm-6">
                            <ul className={styles.bottomLinks}>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    );
};

export default FooterSection;
