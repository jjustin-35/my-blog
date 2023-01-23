import { useEffect, useState } from 'react';

import Header from '../../components/header';
import data from './data';

const HeaderContainer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const scrollHandler = () => {
    if (window.scrollY > 200) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  const resizeHandler = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  return <Header data={data} isMobile={isMobile} isOpen={isOpen} onClick={clickHandler} isScrollDown={isScrollDown} />;
};

export default HeaderContainer;
