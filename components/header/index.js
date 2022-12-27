import { Container } from '../../constants/styled';
import { Wrapper, Inner, Brand, Options, Option } from './styled';

const Header = ({ data }) => (
  <Wrapper>
    <Container>
      <Inner>
        <Brand />
        <Options>
          {data.options.map((option) => (
            <Option>{option}</Option>
          ))}
        </Options>
      </Inner>
    </Container>
  </Wrapper>
);

export default Header;
