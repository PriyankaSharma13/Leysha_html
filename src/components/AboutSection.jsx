import styles from "../styles/WhatWeDo.module.css";
import aboutImg from "../assets/images/about-01.jpg";
import { Link } from "react-router-dom";
import { certifications, internationalCerts, } from "../data/CardsData";
import { useEffect } from "react";
import CookingStar from "./CookingStar";
import ProductsSection from "./OurProducts";

const AboutSection = () => {
    useEffect(() => {
        const init = () => {
            const $ = window.$;
            if ($ && $.fn) {

                try {
                    $("#owl-demo-2").trigger("destroy.owl.carousel").removeClass("owl-loaded");
                    $("#owl-demo-3").trigger("destroy.owl.carousel").removeClass("owl-loaded");
                } catch (e) { /* ignore errors */ }

                $("#owl-demo-2").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    slideTransition: 'linear',
                    autoplayTimeout: 2000,
                    autoplaySpeed: 2000,
                    responsive: {
                        0: { items: 2 },
                        576: { items: 2 },
                        992: { items: 2 },
                        1200: { items: 4 },
                    },
                });

                $("#owl-demo-3").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: false,
                    center: true,
                    rtl: true,
                    autoplay: true,
                    slideTransition: 'linear',
                    autoplayTimeout: 2000,
                    autoplaySpeed: 2000,
                    responsive: {
                        0: { items: 2 },
                        576: { items: 2 },
                        992: { items: 2 },
                        1200: { items: 4 },
                    },
                });
            }
        };

        const t = setTimeout(init, 200);
        return () => clearTimeout(t);
    }, []);
    return (
        <>


            <section className={`pad-t20 ${styles.aboutWrap}`}>
                <div className="container">
                    <div
                        className={`row ${styles.aboutrow}`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >

                        {/* Left Side Image */}
                        <div className={`col-sm-6 ${styles.aboutLeft}`}>
                            <div className={styles.aboutBox}>
                                <figure>
                                    <img src={aboutImg} alt="About" />
                                </figure>
                            </div>
                        </div>

                        {/* Right Side Text */}
                        <div className={`col-sm-6 text-center ${styles.aboutRight}`}>
                            <div className={`mrb-20 ${styles.subTitle}`}>
                                <span>Our Legacy</span>
                            </div>

                            <h2 className="mrb-20">About Us</h2>

                            <p>
                                <b>Four decades of trust, excellence, and authentic basmati rice heritage</b>
                            </p>

                            <p>
                                Since 1983, SSIEL has been at the forefront of basmati rice excellence.
                                What began as a vision to share India's finest grains with the world has
                                grown into a global legacy spanning 70 nations.
                            </p>

                            <p>
                                From the royal kitchens of ancient India to modern dining tables worldwide,
                                our commitment to quality has remained unwavering.
                                Each grain tells a story of tradition, craftsmanship, and perfection.
                            </p>

                            <p className="mrb-0">
                                <Link to="#" className="btn">View More</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* ------------Products ------------------ */}
            <ProductsSection />


            {/* ------------Logo GRID ------------------ */}
            <section className={styles.logoGrid}>
                <div className="inner">
                    <div className="container">
                        <div className="row" data-aos="fade-up" data-aos-duration="1000">
                            {/* Left Grid */}


                            <div className={`col-sm-6 ${styles.leftGrid}`}>
                                <h2 className="mrb-15 text-center">
                                    Certifications & Quality Assurance
                                </h2>
                                <div
                                    className={`owl-carousel owl-theme ${styles.owlCarouselMask}`}
                                    id="owl-demo-2"
                                >
                                    {certifications.map((cert, index) => (
                                        <div className={styles.item} key={index}>
                                            <figure>
                                                <img src={cert.img} alt={cert.title} />
                                            </figure>
                                            <h5>{cert.title}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Grid */}
                            <div className={`${styles.rightGrid} col-sm-6`}>
                                <h2 className="mrb-15 text-center">International Certifications</h2>
                                <div
                                    className={`${styles.owlCarouselMask} owl-carousel owl-theme`}
                                    id="owl-demo-3"
                                >
                                    {internationalCerts.map((cert, index) => (
                                        <div className={styles.item} key={index}>
                                            <figure>
                                                <img src={cert.img} alt="International Cert" />
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ------------CookingStar Section ------------------ */}
            <CookingStar />

        </>

    );
};

export default AboutSection;
