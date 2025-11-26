import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { FaSearch, FaRegUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import mainVideo from "../assets/images/Crafted-For-Every-Cuisine.mp4";
import curveImg from "../assets/images/separator-bg-01.png";
import arrowDown from "../assets/images/arrow-bottom-black.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);


    return (

        <>
            <header className={styles.header}>
                <nav>
                    <div className="container-fluid">
                        <div className={styles.navbar}>
                            <div className={styles.logo}>
                                <Link to="/"><img src={logo} alt="Logo" /></Link>
                            </div>
                            <i
                                className={`fa-solid fa-bars ${styles.menuIcon}`}
                                onClick={() => setMenuOpen(!menuOpen)}
                            ></i>
                            <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>

                                <div className={styles.sidebarLogo}>
                                    {/* <span><img src={logo} alt="Logo" /></span> */}


                                    <i
                                        className={`fa-solid fa-xmark ${styles.closeIcon}`}
                                        onClick={() => setMenuOpen(false)}
                                    ></i>


                                </div>

                                <ul className={styles.links}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>

                                    <li
                                        className={styles.mainMenu}
                                        onMouseEnter={() => window.innerWidth > 991 && setDropdownOpen(true)}
                                        onMouseLeave={() => window.innerWidth > 991 && setDropdownOpen(false)}
                                    >
                                        <a href="/" onClick={(e) => e.preventDefault()}>
                                            Products
                                            <img
                                                src={arrowDown}
                                                alt=""
                                                className={`${styles.arrowDown} ${dropdownOpen ? styles.arrowOpen : ""}`}
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                            />
                                        </a>

                                        <ul className={`${styles.subMenu} ${dropdownOpen ? styles.subMenuOpen : ""}`}>
                                            <li><Link to="/">Leysha Victory</Link></li>
                                            <li><Link to="/">Leysha Bahaar</Link></li>
                                            <li><Link to="/">Leysha Premium</Link></li>
                                            <li><Link to="/">Product Brochure</Link></li>
                                            <li><Link to="/">Nutritional Info</Link></li>
                                            <li><Link to="/">Cooking Guide</Link></li>
                                        </ul>
                                    </li>

                                    <li><Link to="/why-leysha">Why Leysha</Link></li>
                                    <li><Link to="/recipes">Recipes</Link></li>
                                    <li><Link to="/global-presence">Global Presence</Link></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
                                </ul>

                                <div className={styles.orderBtn}>
                                    <Link className={styles.contactBtn} to="/contact">Contact Us</Link>
                                </div>
                                <div className={styles.mobileBottomWrapper}>
                                    <div className={styles.productHeader}>

                                        <div className={styles.productSearchForm}>
                                            {searchOpen && (
                                                <div className={styles.searchBar}>
                                                    <div className={`${styles.card} card-body`}>
                                                        <div className={styles.inputGroup}>
                                                            <input
                                                                type="text"
                                                                placeholder="Search"
                                                                value={searchQuery}
                                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                            />
                                                            <button className={styles.searchBtn}><FaSearch /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <button
                                                className={styles.clickBtn}
                                                type="button"
                                                onClick={() => setSearchOpen(!searchOpen)}
                                            >
                                                <FaSearch />
                                            </button>
                                        </div>

                                        <div className={styles.accountView}>
                                            <button
                                                className={styles.clickBtn}
                                                onClick={() => setAccountOpen(!accountOpen)}
                                            >
                                                <FaRegUser />
                                            </button>

                                            {accountOpen && (
                                                <div className={styles.accountBox}>
                                                    <div className={`${styles.card} card-body`}>
                                                        <ul>
                                                            <li><Link to="/"><i className="fa fa-user"></i> Register</Link></li>
                                                            <li><Link to="/"><i className="fa fa-sign-in"></i> Login</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.cartButton}>
                                            <button className={styles.clickBtn}>
                                                <FaShoppingBag />
                                                <div className={styles.cartCount}><span>0</span></div>
                                            </button>
                                        </div>

                                        <div className={styles.wishlist}>
                                            <button className={styles.clickBtn}>
                                                <FaHeart />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>




            {/*--- Banner----------- */}
            <section className={styles.banner} >
                <div className={styles.video}>
                    <video
                        className={styles.videoEmbed}
                        src={mainVideo}
                        autoPlay
                        loop
                        muted
                        controlsList="nodownload"
                    ></video>
                </div>

                <div className={styles.curveShape}>
                    <img src={curveImg} alt="" />
                </div>
            </section>
        </>
    );
};

export default Navbar;
