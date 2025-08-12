'use client';

import { useState } from 'react';
import styles from './Product.module.css';
import Image, { type StaticImageData } from 'next/image';

import caPheDenImage from './images/Ca-phe-Den.png';
import suaChuaTranChauImage from './images/suachuatranchau.png';


// Định nghĩa cấu trúc cho một tab
interface TabContent {
  title: string;
  content: ProductItem[]; // content là một mảng các ProductItem
}

// Định nghĩa cấu trúc cho toàn bộ dữ liệu tab
// Sử dụng Record<TabKey, TabContent> để code chặt chẽ hơn
type TabData = Record<TabKey, TabContent>;

const tabData = {
  drinks: {
    title: "Sản phẩm Nước uống",
    content: [
      { name: 'Cà Phê Đen Đá', price: 25000, imagePath: caPheDenImage },
      { name: 'Trà Sữa Trân Châu', price: 35000, imagePath: caPheDenImage },
      { name: 'Nước Ép Cam', price: 30000, imagePath: caPheDenImage },
    ]
  },
  cakes: {
    title: "Các loại Bánh Ngọt",
    content: [
      { name: 'Cà Phê Đen Đá', price: 25000, imagePath: caPheDenImage },
      { name: 'Trà Sữa Trân Châu', price: 35000, imagePath: caPheDenImage },
      { name: 'Nước Ép Cam', price: 30000, imagePath: caPheDenImage },
    ]
  },
  vegetables: {
    title: "Rau Củ Sạch",
    content: [
      { name: 'Cà Phê Đen Đá', price: 25000, imagePath: caPheDenImage },
      { name: 'Trà Sữa Trân Châu', price: 35000, imagePath: caPheDenImage },
      { name: 'Nước Ép Cam', price: 30000, imagePath: caPheDenImage },
    ]
  }
};

interface ProductItem {
  name: string;
  price: number;
  imagePath: StaticImageData;
}

type TabKey = keyof typeof tabData;


export default function Product(){
  const [activeTab, setActiveTab] = useState<TabKey>('drinks');
    return (
      <div className={styles.tabsContainer}>
      {/* Phần nút bấm chọn tab (giữ nguyên) */}
      <div className={styles.tabButtons}>
        <button className={activeTab === 'drinks' ? styles.active : ''} onClick={() => setActiveTab('drinks')}>
          Nước uống
        </button>
        <button className={activeTab === 'cakes' ? styles.active : ''} onClick={() => setActiveTab('cakes')}>
          Bánh
        </button>
        <button className={activeTab === 'vegetables' ? styles.active : ''} onClick={() => setActiveTab('vegetables')}>
          Rau
        </button>
      </div>

      {/* --- PHẦN RENDER NỘI DUNG ĐÃ THAY ĐỔI --- */}
      <div className={styles.tabContent}>
        <h2>{tabData[activeTab].title}</h2>
        
        {/* Dùng .map() để lặp qua mảng sản phẩm và render */}
        <div className={styles.productList}>
          {tabData[activeTab].content.map((item) => (
            // Dùng item.name hoặc một ID duy nhất làm key
            <div key={item.name} className={styles.productItem}>
              <Image
                src={item.imagePath}
                alt={item.name}
                width={200} // Cung cấp kích thước ảnh
                height={200}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>
                  {/* Định dạng giá tiền cho đẹp */}
                  {item.price.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}