import { useEffect, useState, useRef } from 'react';
import BannerStyle from '../../components/banner';

const Banner = ({data}) => {
  const [translateY, setTranslateY] = useState(0);

  const bannerRef = useRef();

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
      <BannerStyle data={data} />
    </section>
  );
};

export default Banner;
