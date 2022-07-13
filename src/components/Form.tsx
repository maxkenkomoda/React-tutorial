import { useState } from 'react';

const Form = () => {
  const [userInputText, setUserInputText] = useState('');
  return (
    <form>
      <input
        type="text"
        name="userInputText"
        placeholder="なんか書いてや"
        onChange={(event) => setUserInputText(event.target.value)}
      />
      <button type="submit">送信</button>
      <p>{userInputText}</p>
    </form>
  );
};

export default Form;
