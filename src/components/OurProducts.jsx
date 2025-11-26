import  { useState, useEffect } from "react";
import styles from "../styles/ProductsSection.module.css";
import { productsData } from "../data/ProductsData";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(productsData[0].category);

  useEffect(() => {
    const init = () => {
      if (window.$ && window.$.fn && window.$("#abc").owlCarousel) {
        try {
          window.$("#abc").owlCarousel("destroy");
        } catch (e) { /* ignore */ }

        window.$("#abc").owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: false,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 }
          }
        });
      }
    };

    const t = setTimeout(init, 200);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <section className={styles.productsSec}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mrb-35" data-aos="fade-up" data-aos-duration="2000">
            <div className={styles.content}>
              <div className={styles.subTitle}><span>Our Premium Collection</span></div>
              <h2 className="mrb-20">Our Products Range</h2>
              <p>Discover our premium collection of basmati rice varieties.</p>
            </div>
          </div>

          <div className={`col-sm-12 ${styles.productsCol}`}    data-aos="fade-up"
            data-aos-duration="2000">
            <nav>
              <div className={`nav ${styles.navTabs}`} role="tablist">
                {productsData.map((cat) => (
                  <button
                    key={cat.category}
                    className={`${styles.tabBtn} ${activeTab === cat.category ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab(cat.category)}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </nav>

            <div className={styles.tabContent}>
              {productsData.map((cat) => (
                <div
                  key={cat.category}
                  className={`${styles.tabPane} ${activeTab === cat.category ? styles.activePane : ""}`}
                >
                  <div className="owl-carousel owl-theme" id="abc">
                    {cat.products.map((prod, idx) => (
                      <div className={styles.item} key={idx}>
                        <div className={styles.productsBox}>
                          <div className={styles.productsImage}>
                            <figure>
                              <img src={prod.image} alt={prod.title} />
                            </figure>
                          </div>

                          <div className={styles.info}>
                            <h4>{prod.title}</h4>
                            <p>{prod.description}</p>
                            <p className={styles.price}>
                              Rs. {prod.price} <del>Rs. {prod.oldPrice}</del>
                            </p>
                          </div>

                          <div className={styles.cartBtn}>
                            <div className={styles.padd}>
                              <figure>
                                <img src={prod.previewImage} alt={prod.previewTitle} />
                              </figure>

                              <h4>{prod.previewTitle}</h4>
                              <p>{prod.previewSubtitle}</p>

                              <div className="btn-tag">
                                <button className={styles.iconBtn} aria-label="view"><FaEye /></button>
                                <button className={styles.iconBtn} aria-label="add-to-cart"><FaShoppingCart /></button>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
