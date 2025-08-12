'use client';

import { useState } from 'react';
import styles from './Product.module.css';

const tabData = {
  drinks: {
    title: "Sản phẩm Nước uống",
    content: (
      <ul>
        <li>Cà phê Đen - 25.000đ</li>
        <li>Trà Sữa Trân Châu - 35.000đ</li>
        <li>Nước Ép Dứa - 30.000đ</li>
      </ul>
    )
  },
  cakes: {
    title: "Các loại Bánh Ngọt",
    content: (
      <p>
        Chúng tôi có đa dạng các loại bánh được làm mới mỗi ngày. Vui lòng liên hệ quầy để biết chi tiết.
      </p>
    )
  },
  vegetables: {
    title: "Rau Củ Sạch",
    content: (
      <div>
        <h4>Rau trồng theo chuẩn VietGAP</h4>
        <p>Cam kết không thuốc trừ sâu, an toàn cho sức khỏe.</p>
      </div>
    )
  }
};

type TabKey = keyof typeof tabData;

export default function Product(){
  const [activeTab, setActiveTab] = useState<TabKey>('drinks');
    return (
      <div className={styles.tabsContainer}>
      {/* KHU VỰC CÁC NÚT BẤM CHỌN TAB */}
      <div className={styles.tabButtons}>
        <button
          className={activeTab === 'drinks' ? styles.active : ''}
          onClick={() => setActiveTab('drinks')}
        >
          Chè
        </button>
        <button
          className={activeTab === 'cakes' ? styles.active : ''}
          onClick={() => setActiveTab('cakes')}
        >
          Bánh
        </button>
        <button
          className={activeTab === 'vegetables' ? styles.active : ''}
          onClick={() => setActiveTab('vegetables')}
        >
          Nước
        </button>
      </div>

      {/* KHU VỰC HIỂN THỊ NỘI DUNG TƯƠNG ỨNG */}
      <div className={styles.tabContent}>
        {/* Lấy nội dung từ object tabData dựa trên activeTab hiện tại */}
        {tabData[activeTab].content}

      </div>
    </div>
    );
}