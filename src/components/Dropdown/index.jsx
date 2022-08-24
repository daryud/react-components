import styles from "./index.module.css";

export default function Dropdown({ children, className, isOpened }) {
    return (
        <div
            className={`${styles.container} ${
                isOpened ? "opened" : ""
            } ${className}`}
        >
            {children}
        </div>
    );
}
