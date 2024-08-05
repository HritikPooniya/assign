
import { useEffect, useState } from 'react';
import styles from '@/styles/Animation.module.css';

const ImageLoader = ( {images } : any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [img,setImg] = useState('/assets/arjit.jpeg');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change image every 1.5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.imageContainer}>
    <img src={images[currentIndex]} alt={`Image  not found`} />
    <div className={styles.loader}></div>
  </div>
  );
};

export default ImageLoader;
