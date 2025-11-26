import styles from "../styles/WhyChooseUs.module.css"; 
import img01 from "../assets/images/img-01.png"; 

const WhyChooseUs = () => {
  const items = [
    {
      id: "01",
      icon: "fa-crown",
      title: "Leysha",
      description:
        "Four decades of expertise in basmati rice cultivation, processing, and distribution. Our heritage speaks through every grain we deliver.",
      list: [
        "40+ years of experience",
        "Traditional farming methods",
        "Royal heritage recipes",
      ],
    },
    {
      id: "02",
      icon: "fa-award",
      title: "Quality",
      description:
        "Rigorous quality control at every step ensures only the finest grains reach your table. Excellence is our standard, not our goal.",
      list: [
        "Premium grain selection",
        "Advanced processing technology",
        "Multiple quality checkpoints",
      ],
    },
    {
      id: "03",
      icon: "fa-heart",
      title: "Emotion",
      description:
        "Every meal is a celebration, every grain carries love. We understand that food connects hearts and creates lasting memories.",
      list: [
        "Family-focused approach",
        "Cultural authenticity",
        "Global community building",
      ],
    },
  ];

  return (
    <section className={`${styles.whyChooseUs} mrb-30 pad-t10`}>
      <div className="container">
        <div className="row">
          <div
            className={`col-sm-12 title-full text-center mrb-30 ${styles.titleSection}`}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="title pad-b10">
              <h2>Why Choose Leysha</h2>
              <p>Three pillars of excellence that define our commitment to quality</p>
            </div>
          </div>

          <div
            className={`col-sm-9 left-grid ${styles.leftGrid}`}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="row">
              {items.map((item) => (
                <div key={item.id} className="col-sm-4 why-col mrb-30">
                  <div className={styles.innerBox}>
                    <figure className={styles.icon}>
                      <i className={`fa ${item.icon}`}></i>
                    </figure>
                    <span className={styles.count}>{item.id}</span>
                    <div className={styles.inner}>
                      <h4 className={styles.title}>{item.title}</h4>
                      <p>{item.description}</p>
                      <ul className={styles.listStyle}>
                        {item.list.map((li, index) => (
                          <li key={index}>{li}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-sm-3 right-grid">
            <figure>
              <img src={img01} alt="Leysha" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
