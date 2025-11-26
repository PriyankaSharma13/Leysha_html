import  { useEffect } from "react";
import styles from "../styles/CookingStar.module.css";
import img1 from "../assets/images/cuisine-connect-01.jpg";
import img2 from "../assets/images/cuisine-connect-02.jpg";
import img3 from "../assets/images/cuisine-connect-03.jpg";
import img4 from "../assets/images/cuisine-connect-04.jpg";

const socialWidgets = [
    { className: "sk-ww-facebook-page-posts", id: "25623192" },
    { className: "sk-instagram-feed", id: "25623185" },
    { className: "sk-ww-youtube-channel-videos", id: "25623187" },
];

const cuisineData = [
    { img: img1, title: "Authentic Biryani", time: "45 mins", serve: "4-6 servings" },
    { img: img2, title: "Vegetable Pulao", time: "30 mins", serve: "4 servings" },
    { img: img3, title: "Asian Fried Rice", time: "20 mins", serve: "3-4 servings" },
    { img: img4, title: "Mediterranean Rice", time: "35 mins", serve: "4 servings" },
];

const CookingSection = () => {
    useEffect(() => {
        const scripts = [
            "https://widgets.sociablekit.com/facebook-page-posts/widget.js",
            "https://widgets.sociablekit.com/instagram-feed/widget.js",
            "https://widgets.sociablekit.com/youtube-channel-videos/widget.js",
        ];

        scripts.forEach((src) => {
            const script = document.createElement("script");
            script.src = src;
            script.defer = true;
            document.body.appendChild(script);
        });
    }, []);

    return (
        <>
            <section className={`${styles.cookingWithStar} ${styles.cookingWithStar1} text-center`}>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 mrb-20 text-center">
                            <div className={styles.title}>
                                <h2>#CookingStarInANewAvatar</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        {socialWidgets.map((widget, index) => (
                            <div
                                className={`col-sm-4  mrb-30  ${styles.cwsCol}`}
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                key={index}
                            >
                                <div className={styles.innerBox}>
                                    <div className={widget.className} data-embed-id={widget.id}></div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ----------- Cuisine Connect Section --------------- */}
            <section className={styles.cuisineConnect}>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 mrb-20 text-center">
                            <div className={styles.title}>
                                <h2>Cuisine Connect</h2>
                                <p>Crafted for every cuisine - Explore international dishes</p>
                            </div>
                        </div>

               {/* ---------------  Dynamic Cuisine Boxes ---------------  */}
                        {cuisineData.map((item, index) => (
                            <div className="col-sm-3 mrb-30" key={index}>
                                <div className={styles.innerBox}>
                                    <figure>
                                        <img src={item.img} alt={item.title} />
                                    </figure>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>

                                    <ul className={styles.listStyle}>
                                        <li>
                                            <i className="fa-solid fa-clock"></i> {item.time}
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-users"></i> {item.serve}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/*------------ Our Approach Section -------------------*/}
            <section className={styles.ourApproach}>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-sm-12 text-center mrb-30">
                            <div className={styles.inner}>

                                <div className={styles.content}>
                                    <div className={styles.subTitle}><span>Global Presence</span></div>
                                    <h2>Serving 70+ nations worldwide</h2>
                                </div>

                                <div className="mrb-20">
                                    <h4>Worldwide Distribution Network</h4>
                                    <p>
                                        From the fertile fields of India to dining tables across continents,
                                        Leysha basmati rice is trusted in 70+ countries.
                                    </p>
                                </div>

                                <ul className={styles.counter}>
                                    <li><span>70+</span> Countries</li>
                                    <li><span>5+</span> Continents</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CookingSection;
