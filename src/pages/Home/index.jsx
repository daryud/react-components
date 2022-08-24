import React from "react";

import { CaretDown } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import Dropdown from "../../components/Dropdown";

import styles from "./index.module.css";

export default function Home() {
    const [isDropdownOpened, setIsDropdownOpened] = React.useState(false);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <strong className={styles.title}>HOME</strong>
                <div className={`${styles.linksContainer}`}>
                    <Dropdown
                        className={styles.dropdown}
                        isOpened={isDropdownOpened}
                    >
                        <nav className={styles.nav}>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="paginate">
                                        Paginate Component
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="paginate">
                                        Paginate Component
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="paginate">
                                        Paginate Component
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="paginate">
                                        Paginate Component
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </Dropdown>
                    <button
                        className={styles.buttonDropdown}
                        onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                    >
                        <CaretDown size={20} color={"#ffffff"} />
                    </button>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}
