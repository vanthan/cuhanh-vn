import styles from './About.module.css';

export default function AboutPage() {
    return(
        <div className={styles.main}>
            <main>
                <h1>Về chúng tôi</h1>
                <p>Đây là trang giới thiệu về công ty hoặc dự án của bạn.</p>
                <p>
                    Chúng tôi chuyên cung cấp các giải pháp tuyệt vời để giải quyết các vấn
                    đề của bạn.
                </p>
            </main>
        </div>
    );
}