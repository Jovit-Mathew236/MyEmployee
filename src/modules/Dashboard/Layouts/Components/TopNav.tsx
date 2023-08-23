// import { useState } from "react";
import styles from "./Layout.module.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TopNav = () => {
    const title = window.location.pathname.split("/")[2] || "";
    // const [marginTop, setMarginTop] = useState("0px");
    // const [transform2, setTransform2] = useState("0deg");
    // const [transform3, setTransform3] = useState("0deg");
    // const [display, setDisplay] = useState("block");
    // const [display2, setDisplay2] = useState("none");

    return (
        <>
            <div className={styles.top_navbar}>
                {window.innerWidth < 800 && (
                    <div>
                        {/* <div
                            className={styles.menu_btn}
                            onClick={() => {
                                setMarginTop(
                                    marginTop === "0px" ? "-15px" : "0px"
                                );
                                setTransform2(
                                    transform2 === "0deg" ? "45deg" : "0deg"
                                );
                                setTransform3(
                                    transform3 === "0deg" ? "135deg" : "0deg"
                                );
                                setDisplay(
                                    display === "block" ? "none" : "block"
                                );
                                // setOpacity(opacity === 1 ? 0 : 1);
                                setDisplay2(
                                    display2 === "block" ? "none" : "block"
                                );
                                // setTimeout(() => {
                                // }, 1000);
                            }}
                        >
                            <p
                                style={{ transform: `rotate(${transform2})` }}
                                className={styles.lines}
                            ></p>
                            <p
                                style={{
                                    transform: `rotate(${transform3})`,
                                    marginTop: `${marginTop}`
                                }}
                                className={styles.lines}
                            ></p>
                            <p
                                style={{ display: `${display}` }}
                                className={styles.lines}
                            ></p>
                        </div> */}
                        <i className="fi fi-sr-menu-burger" onClick={()=>{
                          
                        }}></i>
                    </div>
                )}
                <div>{title}</div>
                <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            {window.innerWidth < 800 && (
                <div className={styles.top_navbar_mobile}>
                    <div className={styles.menu}>
                        <p>All</p>
                        <p>Active</p>
                        <p>Unassigned</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default TopNav;
