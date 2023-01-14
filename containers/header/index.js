import { useEffect, useState } from 'react';

import Header from '../../components/header';
import data from './data';

const HeaderContainer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const resizeHandler = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  return <Header data={data} isMobile={isMobile} isOpen={isOpen} onClick={clickHandler} />;
};

export default HeaderContainer;
