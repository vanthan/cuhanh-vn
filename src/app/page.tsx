import Image from "next/image";
import Calendar from '@/components/calendar/Calendar';
import styles from "./page.module.css";

async function getEvents() {
  // Trong thực tế, bạn sẽ lấy dữ liệu từ API hoặc database
  return [
    { title: 'Sự kiện 1', date: '2025-08-10' },
    { title: 'Họp team', date: '2025-08-15' },
  ];
}

export default async function Home() {
  const events = await getEvents();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-2xl font-bold mb-4">Lịch của tôi</h1>
        <Calendar events={events} />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
