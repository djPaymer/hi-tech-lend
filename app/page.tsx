// app/page.tsx
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.hero}>

      <div className={styles.main}>
        <h1>Хай-Тэк Стом</h1>
        <p>Современная стоматология в Красноярске</p>
      </div>
    </section>
  );
}