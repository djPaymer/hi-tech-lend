import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
    return <div className={styles.header}>
        <Link href="/" className={styles.logo}>
            <Image 
                src="/icons/logo.svg" 
                alt="HI-TECH clinic"
                width={125}
                height={44}
            />
        </Link>
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li><Link href="/about">Главная</Link></li>
                <li><Link href="/doctors">Врачи</Link></li>
                <li><Link href="/services">Услуги</Link></li>
                <li><Link href="/examples">Отзывы</Link></li>
                <li><Link href="/reviews">Контакты</Link></li>
            </ul>
            <ul className={styles.contact}>
                <li className={styles.phone}>
                    <li><FontAwesomeIcon icon={faLocationDot} /></li>
                    <span>ул. Алексеева, 34</span>
                </li>
                <li className={styles.phone}>
                    <li><FontAwesomeIcon icon={faPhoneFlip} /></li>
                    <span>+7 (391) 228 94-44</span>
                </li>
            </ul>
        </nav>
    </div>;
}
