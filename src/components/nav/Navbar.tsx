"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    return (
      
      <div className={styles.header_bottom}>
        <nav className={styles.nav}>
          <div className={styles.containt}>
            <Link href="/" className={`${styles.lnk} ${pathname === '/' ? styles.active : ''}`}>Trang chủ</Link>
            <Link href="/about" className={`${styles.lnk} ${pathname === '/about' ? styles.active : ''}`}>Giới thiệu</Link>
            <Link href="/contact" className={`${styles.lnk} ${pathname === '/contact' ? styles.active : ''}`}>Liên hệ</Link>
          </div>
        </nav>
      </div>
  );
}