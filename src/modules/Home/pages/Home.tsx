// import React from 'react'
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <div className={styles.home_page}>
                <div className={styles.rect}></div>
                <div className={styles.contents}>
                    <nav>
                        <div className={styles.logo_container}>
                            <div className={styles.logo}></div>
                            <p>
                                <span>Br</span>ease
                            </p>
                        </div>
                        <div className={styles.nav_links}>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="/login">Sign In</a>
                        </div>
                    </nav>

                    <section>
                        <div className={styles.head}>
                            <div>
                                <h1>REDEFINE WORKING</h1>
                                <h1 className={styles.sub_head}>
                                    Let us make your life a tad bit easier eh?{" "}
                                </h1>
                            </div>
                            <div className={styles.about}>
                                <p>
                                    Work seamlessly between various teams,
                                    reduce the hassle and just make life maybe
                                    not suck as much
                                </p>
                                <button>
                                    <a href="/login">Get Started</a>
                                </button>
                            </div>
                        </div>

                        <div className={styles.functionalities}>
                            <p>Manage</p>
                            <p>View</p>
                            <p>BREAZEEE</p>
                            <p>Assign</p>
                            <p>Simplify</p>
                            <p>Add</p>
                        </div>
                    </section>
                    <main>
                        <div className={styles.bg}>
                            <p className={styles.illustration}></p>
                        </div>
                        <div className={styles.main_content}>
                            <h1>
                                Get out of the box traditional platforms and
                                traditional management has put you in and just
                                make your life easier{" "}
                            </h1>

                            <button>Start your journey now</button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;
