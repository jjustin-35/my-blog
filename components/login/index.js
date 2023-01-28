import { Wrapper, LoginWrapper } from './styled';
import Input from '../../containers/input';
import Button from '../../components/button';

const Login = ({ data }) => (
  <Wrapper>
    <LoginWrapper>
      {data.inputs.map((input, idx) => (
        <Input key={idx} data={input} />
      ))}
      <Button />
    </LoginWrapper>
  </Wrapper>
);

export default Login;
