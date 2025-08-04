import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
      <div>
        <nav className={styles.nav}>
          <div className={styles.containt}>
            <Link href="/" className={styles.lnk}>Trang chủ</Link>
            <Link href="/about" className={styles.lnk}>Giới thiệu</Link>
            <Link href="/contact" className={styles.lnk}>Liên hệ</Link>
          </div>
        </nav>
      </div>
  );
}