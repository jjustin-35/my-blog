import Link from 'next/link';

import { Container } from '../../constants/styled';
import { Wrapper, Inner, Brand, Menu, MobileMenu, Option, BurgerWrapper, BlackMask } from './styled';

const Burger = ({ onClick }) => (
  <BurgerWrapper onClick={onClick}>
    <span class="material-icons">menu</span>
  </BurgerWrapper>
);

const Header = ({ data, isMobile, isOpen, onClick, isScrollDown }) => {
  const menuSelector = (() => {
    if (isMobile) {
      return (
        <>
          <Burger onClick={onClick} />
          <BlackMask isOpen={isOpen} />
          <MobileMenu isOpen={isOpen}>
            {data.options.map((option) => (
              <Option>
                <Link href={option.link}>{option.text}</Link>
              </Option>
            ))}
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
