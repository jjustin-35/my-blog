import { H1, P } from '../../constants/styled';
import { Wrapper, BlackBack, Text } from './styled';

const Banner = ({data}) => {
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
