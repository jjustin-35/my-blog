import { H1, P } from '../../constants/styled';
import { Wrapper, BlackBack, Text } from './styled';
import data from './data';

const Banner = () => {
  const { title, desc } = data;

  return (
    <Wrapper>
      <BlackBack />
      <Text>
        <H1 color="white">{title}</H1>
        <P color="white">{desc}</P>
      </Text>
    </Wrapper>
  );
};

export default Banner;
