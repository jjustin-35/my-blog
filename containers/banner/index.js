import { useEffect, useState, useRef } from 'react';
import Banner from '../../components/banner';
import dataset from './data';

const BannerContainer = ({ variant }) => {
  const data = dataset[variant];
  const [translateY, setTranslateY] = useState(0);

  const bannerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTranslateY(window.scrollY / 3);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setTranslateY();
      });
    };
  }, []);

  useEffect(() => {
    bannerRef.current.style = `transform: translateY(${translateY}px)`;
  }, [translateY]);

  return (
    <section ref={bannerRef}>
      <Banner data={data} />
    </section>
  );
};

export default BannerContainer;
