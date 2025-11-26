import { useEffect, useState } from "react";
import styles from "../styles/CookingStar.module.css";
import { cookingAvatars, counters, cuisines } from "../data/CardsData";
import WhyChooseUs from "./WhyChooseSection";
import ContactSection from "./ContactSection";
import CookingSection from "./CookingStarInA";

const CookingStar = () => {
    const [counts, setCounts] = useState(counters.map(() => 0));
    
    useEffect(() => {
        const $ = window.$;
        if ($) {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                responsive: {
                    0: { items: 1 },
                    576: { items: 2 },
                    768: { items: 3 },
                    992: { items: 4 },
                },
            });
        }
    }, []);


    useEffect(() => {
        counters.forEach((counter, index) => {
            let start = 0;
            const end = counter.count;
            const duration = 2000;
            const increment = end / (duration / 50);

            const interval = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(interval);
                }
                setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(start);
                    return newCounts;
                });
            }, 50);
        });
    }, []);

    return (
        <>
            <section className={`${styles.cookingWithStar} text-center`}>
                <div className="container">
                    <div className="row">

                      
                        <div
                            className="col-sm-12 mrb-20"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                       
                        >
                            <div className="title pad-b10">
                                <h2>#CookingStarInANewAvatar</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        {cookingAvatars.map((avatar, index) => (
                            <div
                                className="col-6 col-md-4 col-lg-3 mrb-30"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                key={index}
                            >
                                <div className={styles.innerBox}>
                                    <figure>
                                        <img src={avatar} />
                                    </figure>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>



            {/* ----------------------#CookingStarInANewAvatar--------------- */}
            <CookingSection />

            {/* ---------------cuisineConnect--------------- */}

            <section className={`${styles.cuisineConnect} text-center`}>
                <div className="container">
                    <div className="row">
                        
                            <div className="col-sm-12 mrb-20" data-aos="fade-up" data-aos-duration="2000">
                            <div className="pad-b10">
                                <h2>Cuisine Connect</h2>
                                <p>
                                    Crafted for every cuisine - Explore authentic recipes and
                                    international dishes
                                </p>
                            </div>
                        </div>

                        {/* Cuisine Cards */}
                        {cuisines.map((cuisine, index) => (
                            <div
                                className="col-sm-3 cuisine-col mrb-30"
                                key={index}
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <div className={styles.innerBox}>
                                    <figure>
                                        <img src={cuisine.img} alt={cuisine.title} />
                                    </figure>
                                    <h4 className={styles.title}>{cuisine.title}</h4>


                                    <ul className={styles.listStyle}>
                                        <li>
                                            <span className={styles.icon}>{cuisine.timeIcon} </span>
                                            {cuisine.time}

                                        </li>
                                        <li>
                                            <span className={styles.icon}>{cuisine.servingsIcon} </span>
                                            {cuisine.servings}
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* --------------ourApproach-------------- */}
            <section className={styles.ourApproach}>
                <div className="container">
                    <div className="row align-items-center" data-aos="fade-up" data-aos-duration="1000">
                        <div className={`col-sm-12 ${styles.leftGrid}`}>
                            <div className={styles.inner}>
                                <div className={styles.content}>
                                    <div className={styles.subTitle}>
                                        <span>Global Presence</span></div>
                                    <h2>Serving 70+ nations worldwide with premium basmati rice</h2>
                                </div>

                                <div className="mrb-20">
                                    <h4 className="mrb-15">Worldwide Distribution Network</h4>
                                    <p>
                                        From the fertile fields of India to dining tables across continents, Leysha basmati rice has established a trusted presence in over 70 countries. Our global distribution network ensures that quality and authenticity reach everyone.
                                    </p>
                                </div>

                                <ul className={styles.counter}>
                                    {counters.map((counter, index) => (
                                        <li key={index}>
                                            <span>
                                                {counts[index]}<small>+</small>
                                            </span>
                                            {counter.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------Why Choose Section-------------- */}
            <WhyChooseUs />

            {/* --------------Contact Section-------------- */}
            <ContactSection />
        </>

    );
};

export default CookingStar;
