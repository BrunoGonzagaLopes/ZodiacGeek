import React, { useState, useEffect } from 'react';  
import styles from "./styles.module.css";


const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
  fetch('/api/flyers.php')
    .then(res => {
      if (!res.ok) throw new Error('Erro na API');
      return res.json();
    })
    .then(data => setImages(data))
    .catch(err => console.error(err));
}, []);

 
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentIndex, images]);

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null; 

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <img
          src={images[currentIndex].imagem_url}
          alt={images[currentIndex].descricao}
          className={styles.carouselImage}
        />

        <button className={styles.prevBtn} onClick={prevImage}>‹</button>
        <button className={styles.nextBtn} onClick={nextImage}>›</button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
