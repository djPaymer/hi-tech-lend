import Button from "../Button/Button";
import styles from "./Header.module.scss";

export default function Header() {
    return <div className={styles.header}>
        <a href="/" className={styles.logo}>HI-TECH</a>
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li><a href="/about">О нас</a></li>
                <li><a href="/services">Услуги</a></li>
                <li><a href="/doctors">Врачи</a></li>
                <li><a href="/examples">Работы</a></li>
                <li><a href="/reviews">Отзывы</a></li>
            </ul>
            <ul className={styles.actions}>
                <li><Button>Номер</Button></li>
                <li><Button>Записаться</Button></li>
            </ul>
        </nav>
    </div>;
}