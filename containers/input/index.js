import { useState } from 'react';
import Input from '../../components/input';

const InputContainer = ({ data }) => {
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
  };

  const blurHandler = () => {
    setIsFocus(false);
  };
  return <Input isFocus={isFocus} onBlur={blurHandler} onFocus={focusHandler} data={data} />;
};

export default InputContainer;
