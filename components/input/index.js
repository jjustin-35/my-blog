import { Wrapper, Label, InputField } from './styled';

const Input = ({ data, isFocus, onFocus, onBlur }) => (
  <Wrapper>
    <Label isFocus={isFocus} htmlFor={data.input.id}>{data.label}</Label>
    <InputField onFocus={onFocus} onBlur={onBlur} {...data.input} />
  </Wrapper>
);

export default Input;
