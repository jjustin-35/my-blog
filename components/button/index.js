import { Wrapper } from './styled';

const Button = ({ data }) => (
  <Wrapper>
    <span>{data.text}</span>
    {data.image && <img {...data.image} />}
  </Wrapper>
);

export default Button;
