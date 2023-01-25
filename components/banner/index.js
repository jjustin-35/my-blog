import { H1, P } from '../../constants/styles';
import { Wrapper, BlackBack, Text } from './styled';

const Banner = ({ data, bannerRef }) => {
  const { title, desc, bgImage } = data;

  return (
    <Wrapper bgImage={bgImage} ref={bannerRef}>
      {/* <BlackBack /> */}
      <Text>
        <H1>{title}</H1>
        <P>{desc}</P>
      </Text>
    </Wrapper>
  );
};

export default Banner;
