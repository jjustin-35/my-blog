import { Wrapper } from './styled';

const Button = ({ data, onClick }) => (
  <Wrapper {...data.styles} onClick={onClick}>
    <span>{data.text}</span>
    {data.image && <img {...data.image} />}
  </Wrapper>
);

export default Button;
