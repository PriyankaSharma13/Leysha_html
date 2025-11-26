import { FaLocationDot, FaPhoneVolume, FaEnvelopeCircleCheck, FaClock } from "react-icons/fa6";
import styles from "../styles/CookingStar.module.css";
import FooterSection from "./FooterSection";

const contactData = [
    {
        icon: <FaLocationDot className={styles.iconInner} />,
        title: "Head Office",
        text: (
            <>
                SSIEL Corporate Office 123 Business District
                New Delhi, India 110001
            </>
        ),
    },
    {
        icon: <FaPhoneVolume className={styles.iconInner} />,
        title: "Our Phone Number",
        text: (
            <>
                <a href="tel:+911112345678">+91 11 1234 5678</a> ,{" "}
                <a href="tel:1187654321">11 8765 4321</a>
            </>
        ),
    },
    {
        icon: <FaEnvelopeCircleCheck className={styles.iconInner} />,
        title: "Our Contact Mail",
        text: (
            <>
                <a href="mailto:info@leysha.com">info@leysha.com</a> ,{" "}
                <a href="mailto:sales@leysha.com">sales@leysha.com</a>
            </>
        ),
    },
    {
        icon: <FaClock className={styles.iconInner} />,
        title: "Our Business Hours",
        text: (
            <>
                Monday - Friday: 9:00 AM - 6:00 PM <br />
                Saturday: 9:00 AM - 1:00 PM
            </>
        ),
    },
];

const ContactSection = () => {
    return (
        <>

            <section className={styles.contactWrap}>
                <div className="container">
                    <div className="row">
                      {/* ------------Left side---------- */}
                        <div className={`${styles.contactleft} col-sm-6 mrb-30`}>
                            <h2>Get In Touch</h2>
                            <p>
                                Ready to bring Leysha basmati rice to your business? Contact us for inquiries and partnerships.
                            </p>

                            <address>
                                {contactData.map((item, index) => (
                                    <div key={index} className={styles.contactBox}>

                                        <div className={styles.icon}>
                                            {item.icon}
                                        </div>
                                        <div className={styles.content}>
                                            <p>
                                                <span>{item.title}</span> {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </address>
                        </div>

                        {/* ------------------Right Side ------------  */}
                        <div className={`${styles.contactRight} col-sm-6 mrb-30`}>

                            <div className={styles.contactPadd}>
                                <h3>Send Us a Message</h3>

                                <form>
                                    <div className={`${styles.formGroup} col-sm-6`}>
                                        <input className={styles.formControl}  placeholder="Full Name :" type="text" />
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-6`}>
                                        <input className={styles.formControl}  placeholder="Phone Number :" type="text" />
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-6`}>
                                        <input className={styles.formControl}  placeholder="E-mail Address:" type="text" />
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-6`}>
                                        <select className={styles.formControl}>
                                            <option value="Service">Select Business Type</option>
                                            <option value="Service">Distributor</option>
                                            <option value="Service">Retailer</option>
                                            <option value="Service">Wholesaler</option>
                                        </select>
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-6`}>
                                        <input className={styles.formControl} placeholder="Company Name:" type="text" />
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-6`}>
                                        <input className={styles.formControl} placeholder="Country/Region:" type="text" />
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-12`}>
                                       
                                        <textarea   className={styles.formControl} placeholder="Tell us about your requirements:"></textarea>
                                    </div>

                                    <div className={`${styles.formGroup} col-sm-12`}>
                                        <button className={styles.btn} type="submit">
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </>
    );
};

export default ContactSection;
