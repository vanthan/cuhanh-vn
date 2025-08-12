import Calendar from '@/components/calendar/Calendar';
import styles from "./page.module.css";
import Product from '@/components/product/Product';

export default async function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section>
          <Product />
        </section>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
