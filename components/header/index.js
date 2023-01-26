import Link from 'next/link';

import { Container } from '../../constants/styles';
import { Wrapper, Inner, Brand, Menu, MobileMenu, Option, BurgerWrapper, BlackMask } from './styled';
import Button from '../button';

const Burger = ({ isOpen, onClick }) => (
  <BurgerWrapper onClick={onClick} isOpen={isOpen}>
    {[...Array(3)].map((item, idx) => (
      <span key={idx} />
    ))}
  </BurgerWrapper>
);

const Header = ({ data, isMobile, isOpen, onClick, isScrollDown }) => {
  const menuSelector = (() => {
    if (isMobile) {
      return (
        <>
          <Burger onClick={onClick} isOpen={isOpen} />
          <BlackMask isOpen={isOpen} onClick={onClick} />
          <MobileMenu isOpen={isOpen}>
            <Container>
              {data.options.map((option) => (
                <Option>
                  <Link href={option.link}>{option.text}</Link>
                </Option>
              ))}
            </Container>
          </MobileMenu>
        </>
      );
    }

    return (
      <Menu>
        {data.options.map((option) => (
          <Option>
            <Link href={option.link}>{option.text}</Link>
          </Option>
        ))}
      </Menu>
    );
  })();

  return (
    <Wrapper isScrollDown={isScrollDown}>
      <Container>
        <Inner>
          <Brand href="/">
            <img {...data.brand} />
          </Brand>
          {menuSelector}
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
